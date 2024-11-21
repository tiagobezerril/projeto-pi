var dashboardModel = require("../models/dashboardModel");

// Função para buscar dados no banco
function puxarBanco(req, res) {
    var idDados = req.params.idDados;

    dashboardModel.puxarBanco(idDados).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Erro ao puxar dados:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// Função para guardar dados no banco
function guardarBanco(req, res) {
    var porcentagem = req.body.porcentagem;
    var dtColeta = req.body.dtColeta;

    if (!porcentagem || !dtColeta) {
        res.status(400).send("Porcentagem e data de coleta são obrigatórios!");
        return;
    }

    dashboardModel.guardarBanco(porcentagem, dtColeta).then(function () {
        res.status(200).send("Dados inseridos com sucesso!");
    }).catch(function (erro) {
        console.log("Erro ao guardar dados:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    puxarBanco,
    guardarBanco
};
