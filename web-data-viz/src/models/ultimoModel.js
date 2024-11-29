var database = require("../database/config");

function puxarDados(idSensor) {
    var instrucaoSql = `
                SELECT porcentagem, dtColeta FROM dados where fkSensor = 2000; 

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
    module.exports = {
        puxarDados,
      };
      