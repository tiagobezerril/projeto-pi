var database = require("../database/config")

function cadastro(nome, email, senha, fkEmpresa, cpf, nomeFantasia, razaoSocial) {
    console.log("Função cadastro():", nome, email, senha, fkEmpresa, cpf, nomeFantasia, razaoSocial);

    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, fk_empresa, cpf, nome_fantasia, razao_social)
        VALUES ('${nome}', '${email}', '${senha}', '${fkEmpresa}', '${cpf}', '${nomeFantasia}', '${razaoSocial}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastro
};