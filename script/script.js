
let inputEmail = document.getElementById('inputEmail')
let responseEmail = document.getElementById('responseEmail')


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



function acessarButton() {
    console.log(validaEmail())

    if(inputEmail.value == "" && validaEmail() == false) {
        responseEmail.innerHTML = "<h1>Insira um email válido</h1>"
    } else if( validaEmail() == true) (
        alert("email válido")
    )
}

