var database = require("../database/config")

    function registrar (idFuncionario, fkRestaurante){

        console.log("ACESSEI O REGISTRO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFuncionario():", idFuncionario, fkRestaurante);

<<<<<<< HEAD
        var instrucaoSql = `INSERT INTO loginControle VALUES (DEFAULT, ${idFuncionario}, ${fkRestaurante}) `
=======
        var instrucaoSql = `INSERT INTO loginControle(fkFuncionario, fkRestaurante) VALUES (${idFuncionario}, ${fkRestaurante}) `
>>>>>>> 15ead9c50288b7a453577c2bd5bfa214c7d71cfa

        return database.executar(instrucaoSql);
    }
module.exports = {
    registrar
    
};