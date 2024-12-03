// importa os bibliotecas necessários
const serialport = require('serialport');
const express = require('express');
const mysql = require('mysql2');

// var arquivo = require('../../web-data-viz/src/controllers/manutencaoController');

// var manutencao = arquivo.manutencao;
// console.log(manutencao);

// constantes para configurações
const SERIAL_BAUD_RATE = 9600;
const SERVIDOR_PORTA = 3300;

// habilita ou desabilita a inserção de dados no banco de dados
const HABILITAR_OPERACAO_INSERIR = true;

// função para comunicação serial
const serial = async (
    valoresSensorAnalogico
    // valoresSensorDigital,
) => {

    // conexão com o banco de dados MySQL
    let poolBancoDados = mysql.createPool(
        {
            host: 'localhost',
            user: 'safeware',
            password: 'Urubu100@',
            database: 'safeware',
            port: 3306
        }
    ).promise();

    // lista as portas seriais disponíveis e procura pelo Arduino
    const portas = await serialport.SerialPort.list();
    const portaArduino = portas.find((porta) => porta.vendorId == 2341 && porta.productId == 43);
    if (!portaArduino) {
        throw new Error('O arduino não foi encontrado em nenhuma porta serial');
    }

    // configura a porta serial com o baud rate especificado
    const arduino = new serialport.SerialPort(
        {
            path: portaArduino.path,
            baudRate: SERIAL_BAUD_RATE
        }
    );

    // evento quando a porta serial é aberta
    arduino.on('open', () => {
        console.log(`A leitura do arduino foi iniciada na porta ${portaArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`);
    });

    // processa os dados recebidos do Arduino
    arduino.pipe(new serialport.ReadlineParser({ delimiter: '\r\n' })).on('data', async (data) => {
        console.log(data);
        const valores = data.split(';');
        const sensorAnalogico = parseFloat(valores[0]);

        // armazena os valores dos sensores nos arrays correspondentes
        valoresSensorAnalogico.push(sensorAnalogico);

        // insere os dados no banco de dados (se habilitado)
        if (HABILITAR_OPERACAO_INSERIR) {
                await poolBancoDados.execute('SELECT stts FROM manutencao WHERE fkSensor = 2000 ORDER BY idManutencao DESC LIMIT 1;');

                if(rows = 1){
                    await poolBancoDados.execute(
                        'INSERT INTO dados (porcentagem, fkSensor) VALUES (0,?)',
                        [sensorAnalogico, 2000]
                    );
    
                    // este insert irá inserir os dados na tabela "medida"
                    console.log("Valores inserido no banco: ", sensorAnalogico);
                } else {
                    await poolBancoDados.execute(
                        'INSERT INTO dados (porcentagem, fkSensor) VALUES (?,?)',
                        [sensorAnalogico, 2000]
                    );
    
                    // este insert irá inserir os dados na tabela "medida"
                    console.log("Valores inserido no banco: ", sensorAnalogico);
                }


        }

    });

    // evento para lidar com erros na comunicação serial
    arduino.on('error', (mensagem) => {
        console.error(`Erro no arduino (Mensagem: ${mensagem}`)
    });
}

// função para criar e configurar o servidor web
const servidor = (
    valoresSensorAnalogico
    // valoresSensorDigital
) => {
    const app = express();

    // configurações de requisição e resposta
    app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });

    // inicia o servidor na porta especificada
    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });

    // define os endpoints da API para cada tipo de sensor
    app.get('/sensores/analogico', (_, response) => {
        return response.json(valoresSensorAnalogico);
    });
    // app.get('/sensores/digital', (_, response) => {
    //     return response.json(valoresSensorDigital);
    // });
}

// função principal assíncrona para iniciar a comunicação serial e o servidor web
(async () => {
    // arrays para armazenar os valores dos sensores
    const valoresSensorAnalogico = [];
    // const valoresSensorDigital = [];

    // inicia a comunicação serial
    await serial(
        valoresSensorAnalogico
        // valoresSensorDigital
    );

    // inicia o servidor web
    servidor(
        valoresSensorAnalogico
        // valoresSensorDigital
    );
})();