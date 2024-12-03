var express = require("express");
var router = express.Router();

var registroControler = require("../controllers/registroController");

router.get("/registrar", function (req, res) {
  registroController.registrar(req, res);
});

module.exports = router;