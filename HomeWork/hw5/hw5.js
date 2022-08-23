// 1) С помощью prompt запрашиваем у пользователя что он хочет сделать (+ - / *). 
// Спрашиваем до тех пор, пока он не введет допустимое значение

// 2) Запрашиваем сколько операндов он хочет использовать. 
// Это должно быть ЧИСЛО больше 1 и меньше 7. 
// Спрашиваем пока пользователь не введет допустимое значение

// 3) Запрашиваем у пользователя каждый операнд. Это должно быть ЧИСЛО. 
// Запрашиваем пока пользователь не введет допустимое значение

// 4) С помощью alert или console.log выводим финальный результат действия (+ - / *).
debugger;
do{
	action = prompt('Выберите дуйствые (+ - / *)');
} while(action !== '+' && action !== '-' && action !== '*' && action !== '/');
console.log(action);

do{
    operand = parseInt(prompt('Выберите число от 1 до 7?'));
      
} while(operand <= 1 && operand >= 7 || isNaN(operand));
console.log(operand);

let result = 0;

for(let i=1; i<=operand; i++){
    do{
        number = parseInt(prompt('Введите любое число?'));
    }while(!number);

    if(action == '+'){
        result += number;
    } else if(action == '-'){
        result -= number;
    } else if(action == '*') {
        if(result == 0){
                result = 1;
        }
        result *= number;
    } else if(action == '/') {
        if(result == 0){
            result = number ;
        }
        result /= number;
    }
    
}
console.log(result);
