// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;
    var nomeEmpresa = JSON.parse(sessionStorage.RESTAURANTES).nome_fantasia;

    var bRestaurante = document.getElementById("bRestaurante");
    var qtdFiliais = document.getElementById("qtdFiliais");
    var qtdSensores = document.getElementById("qtdSensores");

    if (email != null && nome != null) {
        bRestaurante.innerHTML = nomeEmpresa;
        qtdFiliais.innerHTML = JSON.parse(sessionStorage.FILIAIS).length;
        qtdSensores.innerHTML = JSON.parse(sessionStorage.SENSORES).length;
    } else {
        window.location = "../login.html";
    }
}

function exibirUsuario() { 
    console.log("Nome do usuário: ", sessionStorage.NOME_USUARIO); 
    console.log("ID do usuário: ", sessionStorage.ID_USUARIO);
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}

function limparSessaoFunc() {
    sessionStorage.clear();
    window.location = "../../index.html";
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

