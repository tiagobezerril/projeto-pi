var database = require("../database/config");

function puxarDados(idSensor) {
    var instrucaoSql = `
                SELECT porcentagem, dtColeta FROM dados where fkSensor = ${idSensor} LIMIT 9; 

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
    module.exports = {
        puxarDados,
      };
      