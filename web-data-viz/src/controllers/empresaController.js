var empresaModel = require("../models/empresaModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarRestauranteDoUsuario(req, res){
    var fkRestaurante = req.body.fkRestaurante;

    empresaModel.buscarRestauranteDoUsuario(fkRestaurante).then((resultado) => {
      res.status(200).json(resultado);
    });
}

function buscarFiliaisPorRestaurante(req, res){
  var fkRestaurante = req.body.fkRestaurante;

    empresaModel.buscarFiliaisPorRestaurante(fkRestaurante).then((resultado) => {
      res.status(200).json(resultado);
    });
}

function buscarSensoresPorRestaurante(req, res){
  var fkFilial = req.body.fkFilial;

    empresaModel.buscarSensoresPorRestaurante(fkFilial).then((resultado) => {
      res.status(200).json(resultado);
    });
}

function cadastrar(req, res) {
  var cnpj = req.body.cnpj;
  var razaoSocial = req.body.razaoSocial;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    if (resultado.length > 0) {
      res.status(401).json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
    } else {
      empresaModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

function buscarEnderecoFilial(req, res){
  var idFilial = req.params.idFilial;

  empresaModel.buscarEnderecoFilial(idFilial).then((resultado) => {
    res.json({
      endereco: resultado
    })
  })
}

function buscarManutencaoFilial(req, res){
  var idFilial = req.params.idFilial;

  empresaModel.buscarManutencaoFilial(idFilial).then((resultado) => {
    res.json({
      manutencao: resultado
    })
  })
}

function atualizarEnderecoFilial(req,res){
  var idFilial = req.body.idFilial;
  var estado = req.body.estado;
  var cidade = req.body.cidade;
  var bairro = req.body.bairro;
  var cep = req.body.cep;
  var rua = req.body.rua;
  var numero = req.body.numero;

  empresaModel.atualizarEnderecoFilial(idFilial, estado, cidade, bairro, cep, rua, numero).then((resultado) => {
    res.status(200).json(resultado);
  })
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
