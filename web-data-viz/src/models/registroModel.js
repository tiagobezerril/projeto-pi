var database = require("../database/config")

    function registrar (body){

        console.log("ACESSEI O REGISTRO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFuncionario():", body);

        var instrucaoSql = `INSERT INTO loginControle VALUES (${body.usuarioServer}, ${body.sensorServer}) `

        return database.executar(instrucaoSql);
    }
module.exports = {
    registrar
    
};