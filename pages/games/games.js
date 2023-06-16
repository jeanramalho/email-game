let sairButton = document.querySelector('#sairButton')
let userMenu = document.getElementById('userMenu')
let userIcon = document.getElementById('userIcon')

let email = localStorage.getItem('email');


console.log(email)
console.log(userIcon)

function userClick() {
    userIcon.addEventListener('click', botaoSairß)
}

function botaoSair() {
    console.log("clicado")
}