
/* CRIANDO FUNÇÕES */
function onScroll() {  /*  DECLARO A FUNÇÃO QUE VOU CRIAR E O QUE ELA VAI FAZER  */

    if(scrollY > 3) {
        navigation.classList.add('scroll');  // aqui eu chamo a função para o ID setado no HTML 
        } else {
            navigation.classList.remove('scroll');
        }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

/* EXECUTANDO FUNÇÕES */
onScroll();