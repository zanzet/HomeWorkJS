// Реализовать опросник для пользователя.
// Задать ему, с помощью модальных окон, несколько вопросов и оценить его ответы.
// За правильный ответ начисляется 10 очков, за неправильный или отказ от ответа - 0.
// После прохода всех вопросов вывести, с помощью alert, результат.

//   'Сколько будет 2+2?'
//   'Солнце встает на востоке?'
//   'Сколько будет 5 / 0?'
//   'Какого цвета небо?'
//   'Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.' - ответ 42


let questionAlg = +prompt('Сколько будет 2+2?');
let total = 0;

	if(!questionAlg) {
		alert('Ой');
	
	} else if(questionAlg === 4) {
		alert('Правильный ответ');
		total += 10;
	} else {
		alert('НЕ верный ответ');
	}

let questionSun = confirm('Солнце встает на востоке?');

	if(questionSun){
		alert('Красава');
		total += 10;
	} else {
		alert('НЕ верный ответ');
	}

let questionUnril = prompt('Сколько будет 5 / 0?');

	if(questionUnril){
		questionUnril = questionUnril.trim().toLowerCase();
		
		if(!questionUnril) {
			alert('Ой');
			
		} else if (questionUnril =='ошибка'){
			total += 10;
			alert('Верно');
	
		} else {
			alert('Попоробуй вседующий раз');
		}
	
	}
	
let questionSky = prompt('Какого цвета небо?');
	if(questionSky) {
		questionSky = questionSky.trim().toLowerCase();
			
		if(!questionSky) {
				alert('Ой');
				
		} else if (questionSky == 'голубое'){
				total += 10;
				alert('Красава');
		} else {
				alert('Попоробуй вседующий раз');
		}
	}

let questionGlob = +prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.');

	if(!questionGlob) {
		alert('Ой');
		
	} else if (questionGlob === 42){
		total += 10;
		alert('Красава');

	} else {
		alert('Попоробуй вседующий раз');
	}


	switch (total){
		case 0:
			alert(`Ваш результат ${total}, прискорбно!`);
		break;

		case 10:
			alert(`Ваш результат ${total}, попробуйту в слующий раз!`);
		break;

		case 20:
			alert(`Ваш результат ${total}, нужно читать книги!`);
		break;

		case 30:
			alert(`Ваш результат ${total}, выше среднего!`);
		break;
		
		case 40:
			alert(`Ваш результат ${total}, потресающе!`);
		break;

		case 50:
			alert(`Ваш результат ${total}, Вы гений`);
		break;

	}


// Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом). 
// Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры). 
// Посчитать сумму факториалов* чисел которые попадаются во время перебора.


let a = 5,
	b = 10,
	h = 2,
    factorial = 1,
    sum = 0;
for(; a < b; a+=h){
    
        for(let i=1; i<=a; i++){
            factorial *= i;
        }
    console.log(`${a}! = ${factorial}`);
    sum +=factorial;
     
}
console.log(sum);

