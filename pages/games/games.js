let sairButton = document.querySelector('#sairButton')
let userMenu = document.getElementById('userMenu')

let email = localStorage.getItem('email');


console.log(email)

function userClick() {
    userMenu.addEventListener('click', function() {
        console.log("clicado")
    })
}

function botaoSair() {
    
}