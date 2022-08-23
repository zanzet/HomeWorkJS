const figures = document.querySelectorAll(`.figures>*`),
      submit = document.querySelector(`#submit`),
      userColor = document.querySelector(`#userColor`),
      userForm = document.querySelector(`#userForm`); 

let activeFigur = false;

userForm.addEventListener('submit', e=>{
    e.preventDefault();
    
    userFigures = document.querySelector(`input[name=userFigures]:checked`);
    
    figures.forEach(item=>{
        
        if(item.className == userFigures.value){
            if(item.className == "triangle"){
                item.classList.add(`active`);
                item.style.borderBottom =  `140px solid ${userColor.value}`; 
            }else{
                item.style.backgroundColor = `${userColor.value}`;
                item.classList.add(`active`);
            }           
        }

    });

    figures.forEach(item =>{

        if(item.classList[1] == 'active'){
        
            item.addEventListener('mousedown', e=>{
                
                activeFigur = true;
                x = e.screenX;
                y = e.screenY;
            });

            item.addEventListener('mousemove', e=>{
                if(activeFigur){
                    x_ = e.screenX;
                    y_ = e.screenY;
    
                    deff_X = x_ - x;
                    deff_Y = y_ - y;
    
                    item.style.left = !item.style.left ? `${deff_X}px` : `${parseInt(item.style.left)+deff_X}px`
                    item.style.top = !item.style.top ? `${deff_Y}px` : `${parseInt(item.style.top)+deff_Y}px`
                    
                    x = x_;
                    y = y_;
                }
            });

            document.addEventListener('mouseup', e=>{
                if(activeFigur){
                    x_ = e.screenX;
                    y_ = e.screenY;
    
                    deff_X = x_ - x;
                    deff_Y = y_ - y;
    
                    item.style.left = !item.style.left ? `${deff_X}px` : `${parseInt(item.style.left)+deff_X}px`
                    item.style.top = !item.style.top ? `${deff_Y}px` : `${parseInt(item.style.top)+deff_Y}px`
                    
                    activeFigur = false;
                }
            });
        }
    });
});

