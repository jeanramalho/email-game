
// Importa elementos html

let inputEmail = document.getElementById('inputEmail')
let responseEmail = document.getElementById('responseEmail')


// Função que valida se o emaiul é válido

function validaEmail() {

    let usuario = inputEmail.value.substring(0, inputEmail.value.indexOf("@"))
    let dominio = inputEmail.value.substring(inputEmail.value.indexOf("@")+ 1, inputEmail.value.length);

    if ((usuario.length >=1) &&
    (usuario.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
        return true
}
else{
    return false
}

}


// Se o email for válido o usuário é redirecionado para a página de games

function acessarButton() {

    if(inputEmail.value == "" || validaEmail() == false) {
        responseEmail.innerHTML = "<p>Insira um email válido</p>",
        inputEmail.value = ""
    } else if( validaEmail() == true) (
        window.location.href = "./pages/games/games.html",
        localStorage.setItem('email', inputEmail.value)
    )
}

