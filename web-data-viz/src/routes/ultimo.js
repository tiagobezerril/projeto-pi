var express = require("express");
var router = express.Router();
var ultimoController = require("../controllers/ultimoController");


router.get("/ultimo/:idSensor", (req, res) => {
    ultimoController.obterResultados(req, res);
});

module.exports = router;