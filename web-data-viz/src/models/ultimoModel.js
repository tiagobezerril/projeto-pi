var database = require("../database/config");

function puxarDados(idSensor) {
    var instrucaoSql = `
        SELECT porcentagem, dtColeta AS ordem, DATE_FORMAT(dtColeta, '%H:%i:%s') AS dtColeta FROM dados WHERE fkSensor = ${idSensor} ORDER BY idDados DESC LIMIT 9; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    puxarDados,
};
      