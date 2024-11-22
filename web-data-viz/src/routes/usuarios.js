var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/cadastrarFuncionario", function (req, res) {
    usuarioController.cadastrarFuncionario(req, res);
})

router.post("/buscarFuncionariosPorSupervisor", function (req, res) {
    usuarioController.buscarFuncionariosPorSupervisor(req, res);
})

router.delete("/deletarFuncionario", function (req, res) {
    usuarioController.deletarFuncionario(req, res);
})

module.exports = router;