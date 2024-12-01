var dashboardModel = require("../models/dashboardModel");

function obterDadosBarras(req, res){
    var idSensor = req.params.idSensor;

    dashboardModel.obterDadosBarras(idSensor).then(function(resultado){
        res.json({
            dados: resultado
        })
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function obterDadosAtual(req, res){
    var idSensor = req.params.idSensor;

    dashboardModel.obterDadosAtual(idSensor).then(function(resultado){
        res.json({
            dados: resultado
        })
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    obterDadosBarras,
    obterDadosAtual
};