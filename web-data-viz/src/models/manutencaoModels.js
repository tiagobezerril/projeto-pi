var database = require("../database/config");

function inserirManutencao(idSensor){
    var instrucaoSql = `INSERT INTO manutencao(dtHoraTermino, fkSensor) VALUES (NULL, ${idSensor});`;

    return database.executar(instrucaoSql);
}

module.exports = { 
    inserirManutencao, 
};