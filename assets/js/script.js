/*--------------------------------------------Go-to-the-top-------------------------------------------------------*/
let goTop = document.querySelector('.goTop');

goTop.addEventListener('click', function(){
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
})
/*----------------------------------------------------------------------------------------------------------------*/

/*-------------------------------------------Header-Controls------------------------------------------------------*/
window.addEventListener("scroll", function (event) {
    
    HeaderBackgroundToggle()
    
    let scroll = this.scrollY;
    let selected = document.querySelector('.selected');
    let btns = document.querySelectorAll('.menu a');

    if(scroll > 115){
        document.querySelector('.boxMenu').style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        document.querySelector('.boxMenu').style.borderBottom = '1px solid black';
    }else{
        document.querySelector('.boxMenu').style.backgroundColor = 'transparent';
        document.querySelector('.boxMenu').style.borderBottom = 'transparent';
    }

    /*Heights*/
    let about = document.getElementById('sobre').offsetTop - 70;
    let services = document.getElementById('serviços').offsetTop - 70;
    let portifolio = document.getElementById('portifólio').offsetTop - 70;
    let contact = document.getElementById('contato').offsetTop - 70;
    /***/

    let goTop = document.querySelector('.goTop');
    if(scroll < about){
        goTop.style.display = 'none';
    }else{
        goTop.style.display = 'block';
    }


    if(scroll < about){
        removeSelect(btns)
        btns[0].classList.add('selected');
    }
    if(scroll >= about && scroll < services){
        removeSelect(btns)
        btns[1].classList.add('selected');
    }
    if(scroll >= services && scroll < portifolio){
        removeSelect(btns)
        btns[2].classList.add('selected');
    }
    if(scroll >= portifolio && scroll < contact){
        removeSelect(btns)
        btns[3].classList.add('selected');
    }
    if(scroll >= contact-400){
        removeSelect(btns)
        btns[4].classList.add('selected');
    }
})
/*----------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------Scroll-When-Click--------------------------------------------------------*/
let btns = document.querySelectorAll('.menu a');

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
       setTimeout(function(){
           if(btns[i].innerText != 'Home' && btns[i].innerText != 'Contato'){
                let scroll = window.scrollY - 70;
                window.scroll({top: scroll, left: 0})
           }
       }, 800)
    })
}

let btnsMobile = document.querySelectorAll('.menuMobile a');

for(let i = 0; i < btnsMobile.length; i++){
    btnsMobile[i].addEventListener('click', function(){
       setTimeout(function(){
           if(btnsMobile[i].innerText != 'Home' && btnsMobile[i].innerText != 'Contato'){
                let scroll = window.scrollY - 50;
                window.scroll({top: scroll, left: 0, behavior: 'smooth' })
           }
       }, 800)
    })
}
/*----------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------Border-Bottom-Animation--------------------------------------------------*/
let technologyIcon = document.querySelectorAll('.technologySingle');
let border = document.querySelectorAll('.borderBottomAnimation');

for(let i = 0; i < technologyIcon.length; i++){
    technologyIcon[i].addEventListener('mousemove', function(){
        for(let j = 0; j < technologyIcon.length; j++){
            border[j].style.width = '0';
        }
        border[i].style.width = '100%';
    })
    technologyIcon[i].addEventListener('mouseout', function(){
        border[i].style.width = '0';
    })
}
/*----------------------------------------------------------------------------------------------------------------*/


/*-----------------------------------------Functions-Helpers------------------------------------------------------*/
function HeaderBackgroundToggle(){
    let scroll = this.scrollY;
    let selected = document.querySelector('.selected');
    let btns = document.querySelectorAll('.menu a');

    if(scroll > 115){
        document.querySelector('.boxMenu').style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        document.querySelector('.boxMenu').style.borderBottom = '1px solid black';
    }else{
        document.querySelector('.boxMenu').style.backgroundColor = 'transparent';
        document.querySelector('.boxMenu').style.borderBottom = 'transparent';
    }
}

function removeSelect(btns){
    for(let i = 0; i < btns.length; i++){
        btns[i].classList.remove('selected');
    }
}