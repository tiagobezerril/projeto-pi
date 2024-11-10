var express = require("express");
var router = express.Router();

var cadastroController = require("../controllers/cadastroController");

//Recebendo os dados do html e direcionando para a função cadastrar de cadastroController.js
router.post("/cadastrar", function (req, res) {
    cadastroController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    cadastroController.autenticar(req, res);
});

module.exports = router;