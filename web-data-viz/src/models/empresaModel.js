var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM empresa WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function buscarRestauranteDoUsuario(fkRestaurante){
  var instrucaoSql = `SELECT idCadastro, nome_fantasia, cnpj FROM restaurante where idCadastro = '${fkRestaurante}'`;

  return database.executar(instrucaoSql);
}

function buscarFiliaisPorRestaurante(fkRestaurante){
  var instrucaoSql = `
    SELECT idFilial, CONCAT(e.bairro, ', ', e.logradouro, ' - ', e.numero) AS endereco FROM filial JOIN endereco AS e ON 
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

function buscarEnderecoFilial(idFilial){
  var instrucaoSql = `SELECT estado, cidade, bairro, logradouro, numero, cep, fkFilial FROM endereco WHERE fkFilial = ${idFilial};`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarManutencaoFilial(idFilial){
  var instrucaoSql = `SELECT DATE_FORMAT(dtHoraInicio, '%H:%i:%s - %d/%c/%Y') AS inicio, 
    DATE_FORMAT(dtHoraTermino, '%H:%i:%s - %d/%c/%Y') AS termino,
    local_inst FROM manutencao JOIN sensor ON fkSensor = idSensor WHERE fkFilial = ${idFilial};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarEnderecoFilial(idFilial, estado, cidade, bairro, cep, rua, numero){
  var instrucaoSql = `UPDATE endereco SET estado = '${estado}', cidade = '${cidade}', bairro = '${bairro}', cep = '${cep}', 
    logradouro = '${rua}', numero = ${numero} WHERE fkFilial = ${idFilial}`;
  
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = { 
  buscarPorCnpj, 
  buscarPorId, 
  cadastrar,
  buscarRestauranteDoUsuario,
  buscarFiliaisPorRestaurante,
  buscarSensoresPorRestaurante,
  buscarEnderecoFilial,
  buscarManutencaoFilial,
  atualizarEnderecoFilial
};
