var express = require("express");
var router = express.Router();

var visaoGeralController = require("../controllers/visaoGeralController");

router.get("/obterDadosVisaoGeral/:idFilial", function(req, res){
    visaoGeralController.obterDadosVisaoGeral(req, res);
});

module.exports = router;