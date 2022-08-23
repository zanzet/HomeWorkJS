// Дано две функции:
// function main (a, b, c) { 
  
// }

// function sum (a, b) { 
//     return a + b; 
// }
// Перепишите функцию main следующим образом:

// 1.Если аргументы a и b не переданы, они равны по умолчанию 2 и 3 соответсвенно.
// 2.Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum, 
//    и в качестве входящего значение принимает результат работы функции sum.
// 3.Функция main должна возвращать результат функции аргумента c, если он есть, 
//    либо результат функции sum.


// function main (a=2, b=3, c) { 
//     let result = sum(a,b);
   
//     return  typeof c === 'function'? c(result) : result;
  
// }
    
// function sum (a, b) { 
//     return a + b; 
// }

// function getValue(value){
//     return value+5;
// }

// result = main(2, 5, getValue);
// console.log(result);



// Написать функцию, которая принимает как аргумент(параметр) два массива и сравнивает 
// суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая – должен вернутся 
// функцией.

// Пример:
// a = [1,2,3, 'hello',4,5] => summA = 15
// b = [1,2,3, true, 4, undefined, 6] => summB = 16

// if(summA < summB) => return b

// let a = [1,2,3, 'hello',4,5],
//     b = [1,2,3, true, 4, undefined, 6];


// function getSumm(arr){
    
//     let sum = 0;

//     for(let i=0; i<arr.length; i++){
//         if(typeof arr[i] === 'number'){
//             sum += arr[i];
//         }
//     }
//     return sum;
// } 
// function getBigetSumArr(arr1, arr2){
    
//     let resultSum1 = getSumm(arr1);
//     let resultSum2 = getSumm(arr2);

//     return resultSum1 > resultSum2 ? arr1 : arr2;
// }

// console.log(getBigetSumArr(a, b));

// Реализовать функцию copy(list) по копированию массива.
// Предусмотреть возможность передачи вторым аргументом функции. 
// При копировании массива – функция применяется к каждому элементу копируемого массива.

// newList = copy(list, function(value){ return value*10; })
debugger;
let list = [1, 2, 3, 4],
    newList = copy(list, function(value){debugger; return value*10; });

function copy(list, func){
    debugger;
    result = [];
    for(let i=0; i<list.length; i++){
        result[i] = func(list[i]);
    }
    return result; 
}
console.log(list);
console.log(newList);
