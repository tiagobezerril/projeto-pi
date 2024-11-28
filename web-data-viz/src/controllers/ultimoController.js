
var ultimoModel = require("../models/ultimoModel");

function obterResultados(req, res) {
    var idSensor = req.params.idSensor
    ultimoModel.obterResultados(idSensor)
        .then(resultados => {
            res.json(resultados);
        })
        .catch(e => {
            console.error(e);
            res.status(500).send("Erro ao obter os resultados.");
        });
}

module.exports = {
    obterResultados 
};

