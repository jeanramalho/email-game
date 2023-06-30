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
let videoModal = document.getElementById('videoModal')
let modalContainer = document.getElementById('modalContainer')
let descGameModal = document.getElementById('descGameModal')
let closeBtnsVideo = document.querySelectorAll('.closeBtnVideo')
let containerVideo = document.getElementById('containerVideo')

// Recupera email do usuário

let email = localStorage.getItem('email');

//Insere email no meu de usuário

function insereUser(emailUser) {
    if(emailUser) {
        userNameMenu.innerText = emailUser
    }
}

insereUser(email)



// Validação se existe um usuário no localStorage

// function validaUser(emailUser) {
//     if(emailUser ==  null) {
//         window.location.href = '../../index.html'
//     } else {
//         userNameMenu.innerText = emailUser
//     }
// }

// validaUser(email)

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
    window.location.replace("../../index.html")
})



//Abre modal quando botões são clicados


detailsButtons.forEach( (btn) => {
    
    btn.addEventListener('click', function(){

        detailsModal.classList.remove('inactive-modal')
        detailsModal.classList.add('active-modal')

        descGameModal.innerHTML = btn.dataset.detalhes
        
    })

})


videoButtons.forEach( (btn) => {

    btn.addEventListener('click', function(){     

        videoModal.classList.remove('inactive-modal')
        videoModal.classList.add('active-modal')   
        
        containerVideo.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${btn.dataset.video}" 
        class="video-modal"
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
        </iframe>
        `
    })

})

playButtons.forEach( (btn) => {

    btn.addEventListener('click', function(){
        window.open(btn.dataset.play, '_blank');
    })

})

// Fecha modal ao clicar no botão de fechar

closeBtns.forEach( (closeBtn) => {
    closeBtn.addEventListener('click', function(){
        detailsModal.classList.remove('active-modal')
        detailsModal.classList.add('inactive-modal')
    })
})

closeBtnsVideo.forEach( (closeBtnVideo) => {
    closeBtnVideo.addEventListener('click', function(){
        videoModal.classList.remove('active-modal')
        videoModal.classList.add('inactive-modal')
    })
})




