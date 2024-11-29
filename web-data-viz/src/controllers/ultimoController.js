
var ultimoModel = require("../models/ultimoModel");

function puxarDados(req, res) {
    var idSensor = req.body.idSensor
    ultimoModel.puxarDados(idSensor)
        .then(idSensor => {
            res.json(idSensor);
        })
        .catch(e => {
            console.error(e);
            res.status(500).send("Erro ao obter os idSensor.");
        });
}

module.exports = {
    puxarDados
};

