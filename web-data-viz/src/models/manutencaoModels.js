var database = require("../database/config");

function inserirManutencao(idSensor){
    var instrucaoSql = `INSERT INTO manutencao(dtHoraTermino, fkSensor, stts) VALUES (NULL, ${idSensor}, TRUE);`;

    return database.executar(instrucaoSql);
}

function atualizarManutencao(idSensor, idManutencao){
    var instrucaoSql = `UPDATE manutencao SET dtHoraTermino = DEFAULT, stts = FALSE WHERE fkSensor = ${idSensor} AND idManutencao = ${idManutencao};`;

    return database.executar(instrucaoSql);
}

function procurarUltimaManutencao(idSensor){
    var instrucaoSql = `SELECT idManutencao FROM manutencao WHERE fkSensor = ${idSensor} ORDER BY idManutencao DESC LIMIT 1;`;

    return database.executar(instrucaoSql);
}

module.exports = { 
    inserirManutencao,
    procurarUltimaManutencao,
    atualizarManutencao
};