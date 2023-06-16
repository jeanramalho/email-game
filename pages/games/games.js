let sairButton = document.getElementById('sairButton')
let userMenu = document.getElementById("userMenu")
let userIcon = document.getElementById('userIcon')
let userNameMenu = document.getElementById('userNameMenu')


let email = localStorage.getItem('email');

function validaUser(emailUser) {
    if(emailUser ==  null) {
        window.location.href = '../../index.html'
    } else {
        userNameMenu.innerText = emailUser
    }
}

validaUser(email)


userIcon.addEventListener('click', function(){
    if(userMenu.classList.contains('lista-active')) {
        userMenu.classList.remove('lista-active')
        userMenu.classList.add('lista-inactive')
    } else if (userMenu.classList.contains('lista-inactive')) {
        userMenu.classList.remove('lista-inactive')
        userMenu.classList.add('lista-active')
    }
})



