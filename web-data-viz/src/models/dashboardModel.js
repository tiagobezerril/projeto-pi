var database = require("../database/config");

function obterDadosBarras(idSensor){
    var instrucaoSql = `
        SELECT MONTH(dtColeta) AS Mes, COUNT(porcentagem) AS qtdVazamentos, local_inst FROM dados 
            JOIN sensor ON fkSensor = idSensor
            WHERE porcentagem > 0  AND idSensor = ${idSensor} GROUP BY Mes, Mes ORDER BY Mes;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function obterDadosAtual(idSensor){
    var instrucaoSql = `
        SELECT porcentagem FROM dados WHERE fkSensor = ${idSensor} ORDER BY idDados DESC LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

module.exports = {
    obterDadosBarras,
    obterDadosAtual
};