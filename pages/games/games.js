// Importação dos elementos html

let sairButton = document.getElementById('sairButton')
let userMenu = document.getElementById("userMenu")
let userIcon = document.getElementById('userIcon')
let userNameMenu = document.getElementById('userNameMenu')
let notIcon = document.getElementById('notIcon')
let detailsButtons = document.querySelectorAll('.details-button')
let videoButtons = document.querySelectorAll('.video-button')
let playButtons = document.querySelectorAll('.play-button')
let closeBtns = document.querySelectorAll('.btn-close')
let detailsModal = document.getElementById('detailsModal')
let modalContainer = document.getElementById('modalContainer')

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

// Escuta o click do ícone de notificações e redireciona o usuário

notIcon.addEventListener('click', function(){
    window.location.href = '../notification/notification.html'
})

// Apagar o regfistro de usuário e volta à página index.html

sairButton.addEventListener('click', function(){
    localStorage.clear()
    location.reload();
})



//Abre modal quando botões são clicados


detailsButtons.forEach( (btn) => {
    
    btn.addEventListener('click', function(){

        detailsModal.classList.remove('inactive-modal')
        detailsModal.classList.add('active-modal')

        
        
    })

})


videoButtons.forEach( (btn) => {

    btn.addEventListener('click', function(){
        console.log(btn.dataset.video)
    })

})

playButtons.forEach( (btn) => {

    btn.addEventListener('click', function(){
        console.log(btn.dataset.play)
    })

})

// Fecha modal ao clicar no botão de fechar

closeBtns.forEach( (closeBtn) => {
    closeBtn.addEventListener('click', function(){
        detailsModal.classList.remove('active-modal')
        detailsModal.classList.add('inactive-modal')
    })
})

// function fecharModal() {

//     let modal2 = document.getElementById('modalFull')
    


//     modal2.classList.remove('active-modal')
//     modal2.classList.add('inactive-modal')
    
//     console.log(modal2)
// }
        


