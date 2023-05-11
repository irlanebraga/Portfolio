/*-------------------------------------phrases to display-------------------------------------------------*/
let phases = [
    'Desenvolvedora Front-End',
    'Desenvolvedora Web'
];
let time = 3000;
/*--------------------------------------------------------------------------------------------------------*/



/*initial variables*/
let element = document.querySelector('.anim');
let write = '';
let now = -1;
/****/

let empty = true;
changesEveryTime();

setInterval(()=>{
    changesEveryTime();
}, time);



/*-----------------------------------------FUNCTIONS-------------------------------------------------------*/
function changesEveryTime(){
    
    if(empty){
        
        if(now < phases.length - 1){
            now++;
        }else{
            now = 0;
        }
        write = phases[now];

        typeWrite(element, write);

    }else{
        typeErase(element);
    }
    empty = !empty;
}

function typeWrite(element, write){
    let array = write.split('');
    array.forEach((letter, i)=>{
        element.innerHTML = '';
        setTimeout(()=>{
            element.innerHTML += letter;
        }, 75 * i);
    });
    
}

function typeErase(element){
    let array = element.innerHTML.split('');
    array.forEach((letter, i)=>{
        setTimeout(()=>{
            
            let current = element.innerHTML;

            let erase = current.replace(/.$/, '');

            element.innerHTML = erase;
        }, 75 * i);
    });
    
}
/*--------------------------------------------------------------------------------------------------------*/