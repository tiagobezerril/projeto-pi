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

module.exports = {
    obterDadosBarras
};