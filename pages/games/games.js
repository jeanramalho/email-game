// Importação dos elementos html

let sairButton = document.getElementById('sairButton')
let userMenu = document.getElementById("userMenu")
let userIcon = document.getElementById('userIcon')
let userNameMenu = document.getElementById('userNameMenu')

// Recupera email do usuário

let email = localStorage.getItem('email');

// Validação se existe um usuário no localStorage

function validaUser(emailUser) {
    if(emailUser ==  null) {
        window.location.href = '../../index.html'
    } else {
        userNameMenu.innerText = emailUser
    }
}

validaUser(email)

// Escuta o click do ícone de usuário e exibe o menu 

userIcon.addEventListener('click', function(){
    if(userMenu.classList.contains('lista-active')) {
        userMenu.classList.remove('lista-active')
        userMenu.classList.add('lista-inactive')       
        
    } else if (userMenu.classList.contains('lista-inactive')) {
        userMenu.classList.remove('lista-inactive')
        userMenu.classList.add('lista-active')
    }
})

// Apgar o regfistro de usuário e volta à página index.html

sairButton.addEventListener('click', function(){
    localStorage.clear()
    location.reload();
})


