var usuarioModel = require("../models/usuarioModel");
var empresaModel = require("../models/empresaModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
                    //  buscarRestauranteDoUsuario
                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        
                        empresaModel.buscarRestauranteDoUsuario(resultadoAutenticar[0].fkRestaurante)
                            .then((resultadoRestaurante) => {
                                if (resultadoRestaurante.length > 0) {

                                    empresaModel.buscarFiliaisPorRestaurante(resultadoAutenticar[0].fkRestaurante)
                                        .then((resultadoFilial) => {
                                            if (resultadoRestaurante.length > 0) {

                                                empresaModel.buscarSensoresPorRestaurante(resultadoAutenticar[0].fkRestaurante)
                                                    .then((resultadoSensor) => {
                                                        if (resultadoSensor.length > 0) {

                                                            res.json({
                                                                idFuncionario: resultadoAutenticar[0].idFuncionario,
                                                                nome: resultadoAutenticar[0].nome,
                                                                email: resultadoAutenticar[0].email,
                                                                senha: resultadoAutenticar[0].senha,
                                                                restaurantes: resultadoRestaurante,
                                                                filiais: resultadoFilial,
                                                                sensores: resultadoSensor
                                                            });  
                                                        }
                                                    })
                                            } else {
                                                res.status(204).json({ restaurantes: [] });
                                            }
                                        });
                                } else {
                                    res.status(204).json({ restaurantes: [] });
                                }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var razao = req.body.razaoServer;
    var fantasia = req.body.fantasiaServer;
    var cnpj = req.body.cnpjServer;
    var rep = req.body.repServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;


    // Faça as validações dos valores
    if (razao == undefined) {
        res.status(400).send("Seu social está undefined!");
    } else if ( fantasia == undefined) {
        res.status(400).send(`Seu fantasia está undefined`);
    } else if (cnpj == undefined) {
        res.status(400).send(`Seu cnpj está undefined`);
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (rep == undefined) {
        res.status(400).send(`Seu representante está undefined`);
    }
    else {


        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(razao, fantasia, cnpj, rep, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}