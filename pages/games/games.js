let sairButton = document.querySelector('#sairButton')
let userMenu = document.getElementById("userMenu")
let userIcon = document.querySelector('#userIcon')

console.log(sairButton, userMenu, userIcon)

let email = localStorage.getItem('email');

userIcon.addEventListener('click', function(){
    if(userMenu.classList.contains('lista-active')) {
        userMenu.classList.remove('lista-active')
        userMenu.classList.add('lista-inactive')
    } else if (userMenu.classList.contains('lista-inactive')) {
        userMenu.classList.remove('lista-inactive')
        userMenu.classList.add('lista-active')
    }
})
