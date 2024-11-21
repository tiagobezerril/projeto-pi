var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

// Endpoint para buscar dados no banco
router.get("/puxar/:idDados", function (req, res) {
    dashboardController.puxarBanco(req, res);
});

// Endpoint para guardar dados no banco
router.post("/guardar", function (req, res) {
    dashboardController.guardarBanco(req, res);
});

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

