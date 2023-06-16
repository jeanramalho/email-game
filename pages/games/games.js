let sairButton = document.querySelector('#sairButton')
let userMenu = document.querySelector('#userMenu')

let email = localStorage.getItem('email');


console.log(email)

function userClick() {
    if(userMenu.classList.contains("lista-active")) {
        console.log("tem a classe")
    }
}

function botaoSair() {
    
}