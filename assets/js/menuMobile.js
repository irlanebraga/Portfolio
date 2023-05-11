let btnMenuMobile = document.querySelector('.btnMenuMobile');
let menuMobile = document.querySelector('.menuMobile');
let isOpen = false;

btnMenuMobile.addEventListener('click', function(){
    
    if(isOpen){
        btnMenuMobile.innerHTML = ' <i class="fas fa-bars"></i>';
        menuMobile.style.display = 'none';
    }else{
        btnMenuMobile.innerHTML = '<i class="fas fa-times"></i>';
        menuMobile.style.display = 'flex';
    }
    isOpen = !isOpen;
})

let mobileButtons = document.querySelectorAll('.menuMobile a');

for(let i = 0; i < mobileButtons.length; i++){
    mobileButtons[i].addEventListener('click', function(){
        btnMenuMobile.innerHTML = ' <i class="fas fa-bars"></i>';
        menuMobile.style.display = 'none';
        isOpen = !isOpen;
    })
}

window.onresize = function(){
    let windowWidth = window.innerWidth;
    if(windowWidth > 1020 && isOpen){
        btnMenuMobile.innerHTML = ' <i class="fas fa-bars"></i>';
        menuMobile.style.display = 'none';
        isOpen = false;
    }
}