var manutencaoModel = require("../models/manutencaoModels");

function inserirManutencao(req, res) {
    var idSensor = req.params.idSensor;

    manutencao = true;
    module.exports = manutencao;

    manutencaoModel.inserirManutencao(idSensor).then(function(resposta){
        manutencaoModel.procurarUltimaManutencao(idSensor).then((resultado) => {
            res.json({
                idManutencao: resultado[0]
            })
        })
    }).catch(function(erro){
        console.log(erro);
        console.log("\nHouve um erro ao inserir! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    })
}

var manutencao = false;

function atualizarManutencao(req, res){
    var idSensor = req.body.idSensor;
    var idManutencao = req.body.idManutencao;
    manutencao = false;

    module.exports = manutencao;

    manutencaoModel.atualizarManutencao(idSensor, idManutencao).then(function(resposta){
        res.status(200).json(resposta);
    }).catch(function(erro){
        console.log(erro);
        console.log("\nHouve um erro ao atualizar! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    inserirManutencao,
    atualizarManutencao,
    // manutencao
}