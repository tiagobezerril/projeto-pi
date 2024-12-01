var database = require("../database/config");

function obterDadosVisaoGeral(idFilial){
    var instrucaoSql = `
        SELECT MONTH(dtColeta) AS Mes, COUNT(porcentagem) AS qtdVazamentos, fkFilial FROM dados 
            JOIN sensor ON fkSensor = idSensor
            WHERE porcentagem > 0  AND fkFilial = ${idFilial} GROUP BY Mes, Mes ORDER BY Mes;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

module.exports = {
    obterDadosVisaoGeral
};