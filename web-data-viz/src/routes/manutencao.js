var express = require("express");
var router = express.Router();

var manutencaoController = require("../controllers/manutencaoController");

router.post("/inserirManutencao/:idSensor", function (req, res) {
    manutencaoController.inserirManutencao(req, res);
});

router.post("/atualizarManutencao/:idSensor", function (req, res) {
    manutencaoController.atualizarManutencao(req, res);
});

module.exports = router;