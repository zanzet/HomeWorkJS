

const root = document.querySelector('.root'),
      ul = document.querySelectorAll('ul');

console.log(root)

let level = parseInt(prompt(`Введите число от 0 до 6`, 3));

function setFirstItemClassName(level){

    for(let i=0; i<ul.length; i++){

        if(level == i){
            setTimeout(()=>{
                ul[i].firstElementChild.classList.add('first');
            },2000); 

            setTimeout(() => {
                ul[i].lastElementChild.classList.add('last');
            },2000);
        }
    }
}

setFirstItemClassName(level);

