var visaoGeralModel = require("../models/visaoGeralModel");

function obterDadosVisaoGeral(req, res){
    var idFilial = req.params.idFilial;

    visaoGeralModel.obterDadosVisaoGeral(idFilial).then(function(resultado){
        res.json({
            dados: resultado
        })
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    obterDadosVisaoGeral
};