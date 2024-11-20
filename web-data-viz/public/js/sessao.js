// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;
    var nomeEmpresa = JSON.parse(sessionStorage.RESTAURANTES).nome_fantasia;

    var bRestaurante = document.getElementById("bRestaurante");
    // var divID = document.getElementById("divMens");

    if (email != null && nome != null) {
        bRestaurante.innerHTML = nomeEmpresa;
    } else {
        window.location = "../login.html";
    }
}

function exibirUsuario() { 
    console.log("Nome do usuário: ", sessionStorage.NOME_USUARIO); 
    console.log("ID do usuário: ", sessionStorage.ID_USUARIO);
}

// document.addEventListener("DOMContentLoaded", function () { 
//     validarSessao(); 
//     exibirUsuario();
// });

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

