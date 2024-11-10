var cadastroModel = require("../models/cadastroModel");


function cadastro(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var cpf = req.body.cpfServer;
    var senha = req.body.senhaServer;
    var fkEmpresa = req.body.idEmpresaVincularServer;

    // Novos campos
    var nomeFantasia = req.body.nomeFantasiaServer;
    var razaoSocial = req.body.razaoSocialServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu CPF está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (fkEmpresa == undefined) {
        res.status(400).send("Sua empresa a vincular está undefined!");
    } else if (nomeFantasia == undefined) {
        res.status(400).send("O nome fantasia está undefined!");
    } else if (razaoSocial == undefined) {
        res.status(400).send("A razão social está undefined!");
    } else {
        cadastroModel.cadastro(nome, email, senha, fkEmpresa, cpf, nomeFantasia, razaoSocial)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}


module.exports = {
    cadastro
}