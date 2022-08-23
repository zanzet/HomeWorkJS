// Задача:
// 1. С массива sports с помощью метода .slice() скопировать в новый массив summer_sports
// массивы, которые относятся к летним видам спорта.
// 2. С массива sports с помощью метода .slice() скопировать в новый массив winter_sports 
// массивы, которые относятся к зимним видам спорта.
// 3. С полученных массивов summer_sports и winter_sports вырезать в новый массив fruits 
// те массивы, которые относятся к фруктам.
// 4. Вывести все элементы полученных массивов summer_sports, winter_sports, fruits в консоль
// в виде, который изображен на рисунке console.png.
sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];
a = '***';
summer_sports = sports.slice(5);
winter_sports = sports.slice(1,5);

fruits = summer_sports.splice(2,2); 
fruit = winter_sports.splice(1,1);
resault = fruits.concat(fruit);

console.log(a, 'Winter Sport', a);
// for(i=0; i<winter_sports.length; i++){
// 	console.log(`${winter_sports[i][0]}: ${winter_sports[i][1]}`);
// }
sport(winter_sports);


console.log(a, 'Summer Sport', a);
// for(i=0; i<summer_sports.length; i++){
// 	console.log(`${summer_sports[i][0]}: ${summer_sports[i][1]}`);
// }
sport(summer_sports);


console.log(a, 'Fruts', a);
// for(i=0; i<resault.length; i++){
// 	console.log(`${resault[i][0]}: ${resault[i][1]}`);
// }
sport(resault);

function sport(list){
	for(i=0; i<list.length; i++){
		console.log(`${list[i][0]}: ${list[i][1]}`);
	}
}

// Дано:

// hero = ['Ivan'];
// native = ['York','Of'];
// destination = ['Poltava','In'];

// Используя циклы, if/else, switch/case и методы .push(), .pop(), .unshift(), .shift(),
// .concat(), .splice(), .reverse() .join():

// 1. Объединить массивы destination, native, hero в общий массив rainbow.
// 2. Сделать реверс элементов полученного массива rainbow.
// 3. Изменить/добавить элементы массива rainbow так, что бы в итоге получился массив вида 
// ['Richard','Of','York','Gave','Battle','In','Vain'];
// 4. Вывести элементы полученного массива в html в виде, который представлен в прикрепленном рисунке rainbow.png.

// Шрифт надписей на картинке Quicksand. Вы можете взять любой))
// Использовать все методы не обязательно! Берем только те, которые помогут 
// вам привести массив к такому виду, что бы вывести его как на прикрепленной 
// картинке rainbow.png.

hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];
colors = ['red', 'pink', 'black', 'green', 'blue', 'pink', 'red'];
rainbow = destination.concat(native, hero);
rainbow.reverse();
resaultColor = [];

rainbow.splice(0,1,'Richard');
rainbow.splice(3,4,'Gave','Battle','In','Vain');

for(i=0; i<colors.length; i++){
	resaultColor.push(`<div class='circle' style="background:${colors[i]};"></div>`);
}

document.write(resaultColor.join(''));
document.write(`<ul><li>${rainbow.join(`</li><li>`)}</li></ul>`);
