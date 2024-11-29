var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    empresaController.buscarPorCnpj(req, res);
});

router.get("/buscar/:id", function (req, res) {
  empresaController.buscarPorId(req, res);
});

router.get("/buscarRestauranteDoUsuario/:fkRestaurante", function (req, res){
  empresaController.buscarRestauranteDoUsuario(req, res);
});

router.get("/buscarFiliaisPorRestaurante/:fkRestaurante", function (req, res){
  empresaController.buscarFiliaisPorRestaurante(req, res);
});

router.get("/buscarSensoresPorRestaurante/:fkRestaurante", function (req, res){
  empresaController.buscarSensoresPorRestaurante(req, res);
});

router.get("/buscarEnderecoFilial/:idFilial", function (req, res) {
  empresaController.buscarEnderecoFilial(req, res);
});

router.get("/buscarManutencaoFilial/:idFilial", function(req, res){
  empresaController.buscarManutencaoFilial(req, res);
})

router.post("/atualizarEnderecoFilial", function(req, res){
  empresaController.atualizarEnderecoFilial(req, res);
})

module.exports = router;