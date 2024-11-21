var database = require("../database/config");

function puxarBanco(porcentagem, dtColeta) {

    var instrucaoSql = `
        SELECT * from dados;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function guardarBanco(porcentagem, dtColeta ) {

    var instrucaoSql = `
        INSERT INTO dados (porcentagem, dtcoleta) VALUES ('${porcentagem}', '${dtColeta}');
        `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    puxarBanco,
    guardarBanco
}
