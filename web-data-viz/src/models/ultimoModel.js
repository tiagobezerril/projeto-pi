var database = require("../database/config");

function puxarDados(idSensor) {
    var instrucaoSql = `
                SELECT porcentagem, DATE_FORMAT(dtColeta, '%H:%i:%s' ) AS dtColeta FROM dados WHERE fkSensor = ${idSensor} LIMIT 9; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    puxarDados,
};
      