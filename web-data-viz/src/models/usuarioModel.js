var database = require("../database/config");

function autenticar(email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
    email,
    senha
  );
  var instrucaoSql = `
        SELECT idFuncionario, nome, email, senha, fkRestaurante, tipo FROM funcionario WHERE email = '${email}' AND senha = '${senha}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(razao, fantasia, cnpj, rep, email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    razao,
    fantasia,
    cnpj,
    rep,
    email,
    senha
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucaoSql = `
        INSERT INTO restaurante (razao_social, nome_fantasia, cnpj) VALUES ('${razao}', '${fantasia}', '${cnpj}');
        `;

  var instrucaoFilial = `
        INSERT INTO filial (fkRestaurante)  
	        SELECT idCadastro FROM restaurante ORDER BY idCadastro DESC LIMIT 1;
    `;

  var instrucaoFuncionario = `
        INSERT INTO funcionario (nome, email, senha, tipo, fkRestaurante) VALUES 
            ('${rep}', '${email}', '${senha}', 'Supervisor',
            (SELECT idCadastro FROM restaurante ORDER BY idCadastro DESC LIMIT 1));
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql).then(() => {
    console.log("Executando a instrução SQL: \n" + instrucaoFuncionario);
    return database.executar(instrucaoFuncionario).then(() => {
      console.log("Executando a instrução SQL: \n" + instrucaoFuncionario);
      return database.executar(instrucaoFilial);
    });
  });
}

function cadastrarFuncionario(
  nomeFuncionario,
  emailFuncionario,
  senhaFuncionario,
  fkRestaurante,
  fkSupervisor
) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFuncionario():",
    nomeFuncionario,
    emailFuncionario,
    senhaFuncionario
  );

  var instrucaoSql = `
        INSERT INTO funcionario (nome, email, senha, tipo, fkRestaurante, fkSupervisor) VALUES 
            ('${nomeFuncionario}', '${emailFuncionario}', '${senhaFuncionario}', 'Comum', ${fkRestaurante}, ${fkSupervisor});
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarFuncionariosPorSupervisor(idSupervisor){
    var instrucaoSql = `
        SELECT idFuncionario, nome, email, senha FROM funcionario WHERE fkSupervisor = '${idSupervisor}';
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarFuncionario(idFuncionario) {
  var instrucaoSql = `
    DELETE FROM funcionario WHERE idFuncionario = ${idFuncionario};
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  autenticar,
  cadastrar,
  cadastrarFuncionario,
  buscarFuncionariosPorSupervisor,
  deletarFuncionario
};
