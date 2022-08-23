// Дано:

// Три товара с категории vegetables:
// cabbage = 8;
// avocado = 30;
// tomato = 10;

// Три товара с категории fruits:
// grapes = 20;
// raspberry = 25;
// coconut = 50;

// Задача: в зависимости от выбранного пользователем периода (winter или summer), 
// категории (vegetables или fruits), 
// товара с выбранной категории (vegetables: cabbage, avocado, tomato или fruits: grapes, raspberry, coconut), 
// и количества единиц выбранного товара – 
// посчитать финальную стоимость покупки и вывести всю информацию о выбранном товаре в html.

// Порядок действий:

// Запрашиваем у пользователя период, в которой он совершает покупку: winter или summer.
//    Если пользователь вводит winter, то финальное значение стоимости покупки будет умножаться на 2
//    Если пользователь вводит summer, то финальное значение стоимости покупки будет умножаться на 0.8
//      Важно: 
//        Продолжаем запрашивать у пользователя название периода до тех пор, пока не будет введено слово ‘winter’ либо ‘summer’.
//        Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова. 

// Запрашиваем у пользователя категорию, с которой он будет далeе выбирать товар: vegetables или fruits.
//   Важно: 
//     Продолжаем запрашивать у пользователя название категории до тех пор, пока не будет введено слово ‘vegetables’ либо ‘fruits’.
//     Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова. 

// Запрашиваем у пользователя товар в зависимости от выбранной ранее категории.
//    Для категории vegetables пользователь может ввести название товара cabbage или avocado или tomato.
//    Для категории fruits пользователь может ввести название товара grapes или raspberry или coconut.
//       Важно: 
//         Продолжаем запрашивать у пользователя название товара до тех пор, пока не будет введено название одного из трех допустимых товаров.
//         Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова.

// Запрашиваем у пользователя количество единиц ранее выбранного товара.
//   Важно:
//     Введенное значение должно быть числом и не меньше 1.
//     Выводим в html информацию о выбранном товаре с финальной стоимостью покупки. Вариант вывода:

// <div class="product" align="center">
//   <img src="images/vegetables/cabbage.svg" alt="cabbage" width="100" height="100">
//   <p>Selected product: <b>cabbage</b></p>
//   <p>Count of cabbages: <b>3</b></p>
//   <p>Selected period: <b>winter</b></p>
//   <p>Selected category: <b>vegetables</b></p>
//   <p>Final sum: <b>48 UAH</b></p>
// </div>
debugger;

vegetableList = ['cabbage', 'avocado', 'tomato'];
fruitList = ['grapes', 'raspberry', 'coconut'];
vegetablePrise = [8, 30, 10];
fruitPrise = [20, 25, 50];
result = 0;

do{
    season = prompt('Рериод, в которой вы совершаете покупки: winter или summer?');
   
    if(season){
        season = season.toLowerCase().replaceAll(' ', '');
    }

}while(season !== 'winter' && season !== 'summer');


koef = season == 'summer' ? 0.8 : 2;

console.log(season);

do{
    categories = prompt('Выберите категорию товаров: vegetables или fruits?');
    
    if(categories){
        categories = categories.toLowerCase().replaceAll(' ', '');
    }

}while(categories !== 'vegetables' && categories !== 'fruits');



if(categories === 'vegetables'){
    do{
        vegetable = prompt('В категории vegetables введите название товара: cabbage, avocado или tomato?');
        
        if(vegetable){
            vegetable = vegetable.toLowerCase().replaceAll(' ', '');
        }

    }while(vegetable !== 'cabbage' && vegetable !== 'avocado' && vegetable !== 'tomato');
       
    if(vegetable){
        vegetableKey = vegetableList.indexOf(vegetable)
        productPrice = vegetablePrise[vegetableKey];
    }

} else if(categories === 'fruits'){
    do{
        fruit = prompt('В категории fruits введите название товара: grapes, raspberry или coconut?');
        
        if(fruit){
            fruit = fruit.toLowerCase().replaceAll(' ', '');
        }

    }while(fruit !== 'grapes' && fruit !== 'raspberry' && fruit !== 'coconut');

    if(fruit){
        fruitKey = fruitList.indexOf(fruit);
        productPrice = fruitPrise[fruitKey];
    }
}
console.log(categories);
console.log(productPrice);

do{
    number = parseInt(prompt('Введите количество единиц ранее выбранного товара (не мение 1)?'));
}while(!number || number <= 1);

console.log(number);

result = koef * productPrice * number;

console.log(result);
document.write(`
    if(categories === 'vegetables'){
        <div class="product" align="center">
            <img src="images/vegetables/${vegetable}.svg" alt="${vegetable}" width="100" height="100">
            <p>Selected product: <b> ${vegetable}</b></p>
            <p>Count of cabbages: <b>${number}</b></p>
            <p>Selected period: <b>${season}</b></p>
            <p>Selected category: <b>vegetables</b></p>
            <p>Final sum: <b>${result} UAH</b></p>
            </div>
    }
    if(categories === 'fruits'){
        <div class="product" align="center">
            <img src="images/fruits/${fruit}.svg" alt="${fruit}" width="100" height="100">
            <p>Selected product: <b> ${fruit}</b></p>
            <p>Count of cabbages: <b>${number}</b></p>
            <p>Selected period: <b>${season}</b></p>
            <p>Selected category: <b>vegetables</b></p>
            <p>Final sum: <b>${result} UAH</b></p>
            </div>
    }
`);
