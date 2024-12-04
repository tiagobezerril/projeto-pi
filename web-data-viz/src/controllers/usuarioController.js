var usuarioModel = require("../models/usuarioModel");
var empresaModel = require("../models/empresaModel");
var registroModel = require("../models/registroModel");
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
      .then(function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
        if(resultadoAutenticar[0].tipo == 'Suporte'){
          res.json({
            idFuncionario: resultadoAutenticar[0].idFuncionario,
            nome: resultadoAutenticar[0].nome,
            email: resultadoAutenticar[0].email,
            senha: resultadoAutenticar[0].senha,
            tipo: resultadoAutenticar[0].tipo
          });
        } else {
          //  buscarRestauranteDoUsuario
          if (resultadoAutenticar.length == 1) {
            console.log(resultadoAutenticar);
  
            empresaModel.buscarRestauranteDoUsuario(resultadoAutenticar[0].fkRestaurante)
              .then((resultadoRestaurante) => {
                if (resultadoRestaurante.length > 0) {
                  empresaModel.buscarFiliaisPorRestaurante(
                    resultadoAutenticar[0].fkRestaurante
                  )
                    .then((resultadoFilial) => {
                      if (resultadoRestaurante.length > 0) {
                        empresaModel.buscarSensoresPorRestaurante(
                          resultadoAutenticar[0].fkRestaurante
                        )
                          .then((resultadoSensor) => {
                            if (resultadoSensor.length > 0) {
                              usuarioModel.buscarFuncionariosPorSupervisor(
                                resultadoAutenticar[0].idFuncionario
                              )
                                .then((resultadoFuncionarios) => {
                                    res.json({
                                      idFuncionario: resultadoAutenticar[0].idFuncionario,
                                      nome: resultadoAutenticar[0].nome,
                                      email: resultadoAutenticar[0].email,
                                      senha: resultadoAutenticar[0].senha,
                                      tipo: resultadoAutenticar[0].tipo,
                                      restaurantes: resultadoRestaurante,
                                      filiais: resultadoFilial,
                                      sensores: resultadoSensor,
                                      funcionarios: resultadoFuncionarios,
                                    });
                                    console.log(resultadoAutenticar[0].idFuncionario)
                                    console.log(resultadoAutenticar[0].fkRestaurante)
                                    registroModel.registrar(
                                      resultadoAutenticar[0].idFuncionario,
                                      resultadoAutenticar[0].fkRestaurante
                                    ).then((resultadoAutenticar) => {
                                      console.log('Registro efetuado com sucesso!');
                                    })
                                });
                            }
                          });
  
                      } else {
                        res.status(204).json({ sensores: [] });
                      }
                    });
                } else {
                  res.status(204).json({ restaurantes: [] });
                }
              });
          } else if (resultadoAutenticar.length == 0) {
            res.status(403).send("Email e/ou senha inválido(s)");
          } else {
            res.status(403).send("Mais de um usuário com o mesmo login e senha!");
          }
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
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
  } else if (fantasia == undefined) {
    res.status(400).send(`Seu fantasia está undefined`);
  } else if (cnpj == undefined) {
    res.status(400).send(`Seu cnpj está undefined`);
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else if (rep == undefined) {
    res.status(400).send(`Seu representante está undefined`);
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrar(razao, fantasia, cnpj, rep, email, senha)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrarFuncionario(req, res) {
  var nomeFuncionario = req.body.nomeFuncionarioServer;
  var emailFuncionario = req.body.emailFuncionarioServer;
  var senhaFuncionario = req.body.senhaFuncionarioServer;
  var fkRestaurante = req.body.idRestaurante;
  var fkSupervisor = req.body.idSupervisor;

  if (nomeFuncionario == undefined) {
    res.status(400).send(`Seu representante está undefined`);
  } else if (emailFuncionario == undefined) {
    res.status(400).send(`Seu representante está undefined`);
  } else if (senhaFuncionario == undefined) {
    res.status(400).send(`Seu representante está undefined`);
  }

  usuarioModel.cadastrarFuncionario(nomeFuncionario, emailFuncionario, senhaFuncionario, fkRestaurante, fkSupervisor)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar o cadastro! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarFuncionariosPorSupervisor(req, res) {
  var idSupervisor = req.body.idFuncionario;

  if (idSupervisor == undefined) {
    res.status(400).send(`Seu idFuncionario está undefined`);
  }

  usuarioModel.buscarFuncionariosPorSupervisor(idSupervisor)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar o cadastro! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    })
}

function deletarFuncionario(req, res) {
  var idFuncionario = req.body.idFuncionario;

  console.log('Entrei no controller');

  usuarioModel.deletarFuncionario(idFuncionario)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao excluir a conta! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
  autenticar,
  cadastrar,
  cadastrarFuncionario,
  buscarFuncionariosPorSupervisor,
  deletarFuncionario
};
