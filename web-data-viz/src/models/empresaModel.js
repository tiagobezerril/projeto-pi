var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM empresa WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT id, razao_social, cnpj, codigo_ativacao FROM empresa`;

  return database.executar(instrucaoSql);
}

function buscarRestauranteDoUsuario(fkRestaurante){
  var instrucaoSql = `SELECT idCadastro, nome_fantasia, cnpj FROM restaurante where idCadastro = '${fkRestaurante}'`;

  return database.executar(instrucaoSql);
}

function buscarFiliaisPorRestaurante(fkRestaurante){
  var instrucaoSql = `
    SELECT idFilial, CONCAT(e.logradouro, ', ', e.numero) AS endereco FROM filial JOIN endereco AS e ON 
      fkFilial = idFilial WHERE filial.fkRestaurante = '${fkRestaurante}'`;

  return database.executar(instrucaoSql);
}

function buscarSensoresPorRestaurante(fkRestaurante){
  var instrucaoSql = `SELECT fkFilial, idSensor, dtInstalacao, stts, local_inst FROM sensor WHERE fkRestaurante= '${fkRestaurante}'`;

  return database.executar(instrucaoSql);
}

function buscarPorCnpj(cnpj) {
  var instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(razaoSocial, cnpj) {
  var instrucaoSql = `INSERT INTO empresa (razao_social, cnpj) VALUES ('${razaoSocial}', '${cnpj}')`;

  return database.executar(instrucaoSql);
}

module.exports = { 
  buscarPorCnpj, 
  buscarPorId, 
  cadastrar,
  listar,
  buscarRestauranteDoUsuario,
  buscarFiliaisPorRestaurante,
  buscarSensoresPorRestaurante
};
