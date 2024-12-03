var manutencaoModel = require("../models/manutencaoModels");

function inserirManutencao(req, res) {
    var idSensor = req.params.idSensor;

    manutencaoModel.inserirManutencao(idSensor).then(function(resposta){
        res.status(200).json(resposta);
    }).catch(function(erro){
        console.log(erro);
        console.log("\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    })
}

function atualizarManutencao(req, res){
    var idSensor = req.params.idSensor;

    manutencaoModel.atualizarManutencao(idSensor).then(function(resposta){
        res.status(200).json(resposta);
    }).catch(function(erro){
        console.log(erro);
        console.log("\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    inserirManutencao,
    atualizarManutencao
}