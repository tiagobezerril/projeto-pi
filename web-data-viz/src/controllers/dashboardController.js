var dashboardModel = require("../models/dashboardModel");

// Função para buscar dados no banco
function puxarBanco(req, res) {
    var idDados = req.params.idDados;

    dashboardModel.puxarBanco(idDados).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Erro ao puxar dados:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// Função para guardar dados no banco
function guardarBanco(req, res) {
    var porcentagem = req.body.porcentagem;
    var dtColeta = req.body.dtColeta;

    if (!porcentagem || !dtColeta) {
        res.status(400).send("Porcentagem e data de coleta são obrigatórios!");
        return;
    }

    dashboardModel.guardarBanco(porcentagem, dtColeta).then(function () {
        res.status(200).send("Dados inseridos com sucesso!");
    }).catch(function (erro) {
        console.log("Erro ao guardar dados:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

/////////////////////MODO MANUTENÇÃO//////////////////////////////////////

var dashboard1 = new Chart(sensorAnalogico1, configLinha);

// VAR CRIADA PARA CONTROLAR O ESTADO DE ATIVIDADE DO SENSOR 
var sensorAtivo = true; // DASHBOARD JÁ ESTÁ ATIVA E CAPTANDO DINAMICAMENTE OS DADOS DO SENSOR(quando botão está modo off OFF)

// PUXANDO Elemento físico do botão manutenção
const manutencaoBtn = document.getElementById('onoff');

// Função para atualizar o gráfico com os dados dinamicos. Função inicialmente criada com Math.Random para simular entrada de dados do sensor
function atualizarDashboard() {
    if (sensorAtivo) {
        console.log("O sensor está captando e plotando dados na dashboard...");
        // Simula chamada à API com fetch ou outro método
        const novosDados = Array.from({ length: 11 }, () => Math.random() * 3);
        dashboard1.data.datasets[0].data = novosDados; // Atualiza dados do primeiro dataset
        dashboard1.update(); // Atualiza o gráfico
    } else {
        console.log("Dashboard pausada, manutenção de cilindro em andamento!");
    }
}

// Evento no botão toggle
manutencaoBtn.addEventListener('change', () => {
    sensorAtivo = !manutencaoBtn.checked; // Quando manutencaoBtn está ON, pausa o dashboard
    console.log(`Dashboard ${sensorAtivo ? "ativada" : "pausada"}`);
});

// Intervalo para simular a atualização periódica
setInterval(atualizarDashboard, 2000); // Atualiza a cada 2 segundos


module.exports = {
    puxarBanco,
    guardarBanco,
    atualizarDashboard
};
