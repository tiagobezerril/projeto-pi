var express = require("express");
var router = express.Router();
var ultimoController = require("../controllers/ultimoController");


router.post("/puxarDados", (req, res) => {
    ultimoController.puxarDados(req, res);
});

module.exports = router;