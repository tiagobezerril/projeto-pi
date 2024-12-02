var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/obterDadosBarras/:idSensor", function(req, res){
    dashboardController.obterDadosBarras(req, res);
})

router.get("/obterDadosAtual/:idSensor", function(req, res){
    dashboardController.obterDadosAtual(req, res);
})

router.get("/obterDadosLinha/:idSensor", function(req, res){
    dashboardController.obterDadosLinha(req, res);
})

module.exports = router;

// router.get("/puxar/:idDados", function (req, res) {
//     dashboardController.puxarBanco(req, res);
// });

// router.get("/guardar/:idDados", function (req, res) {
//     dashboardController.guardarBanco(req, res);
// });

// router.post("/publicar/:idUsuario", function (req, res) {
//     avisoController.publicar(req, res);
// });

// router.put("/editar/:idAviso", function (req, res) {
//     avisoController.editar(req, res);
// });

// router.delete("/deletar/:idAviso", function (req, res) {
//     avisoController.deletar(req, res);
// });


