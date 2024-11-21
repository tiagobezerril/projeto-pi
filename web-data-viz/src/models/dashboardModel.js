var database = require("../database/config");

// Função para buscar dados no banco
function puxarBanco(idDados) {
    var instrucaoSql = `
        SELECT 
            DATE_FORMAT(dtdecoleta, '%Hh') AS horario,
            ROUND(AVG(porcentagem), 2) AS porcentagem
        FROM 
            dados
        WHERE 
            idDados = ${idDados} -- Filtra pelo idDados recebido
        GROUP BY 
            DATE_FORMAT(dtdecoleta, '%Hh')
        ORDER BY 
            dtdecoleta;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Função para guardar dados no banco
function guardarBanco(porcentagem, dtColeta) {
    var instrucaoSql = `
        INSERT INTO dados (porcentagem, dtcoleta) VALUES (${porcentagem}, '${dtColeta}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    puxarBanco,
    guardarBanco
};
