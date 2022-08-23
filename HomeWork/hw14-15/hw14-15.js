// Создать объект с такой структурой: 
// obj = {
//   x: 10, 
//   y: 20, 
//   inner: { x: 20, z: 30 }, 
//   foo2: { k: 23, p: 13 } 
// } 
// Написать функцию convert(obj), которая получает аргументом obj. 
// Функция должна вернуть новый объект вида:

// newObj = {
//     x: 20,
//     y: 20,
//     z: 30,
//     k: 23,
//     p: 13
// }

let obj = {
  x: 10, 
  y: 20, 
  inner: { x: 20, z: 30 }, 
  foo2: { k: 23, p: 13 } 
};
newObj = {};

function convert(obj){
  
  for(let key in obj){
    newObj[key] = obj[key];
  
    if(typeof obj[key] === 'object'){
      
      let object = obj[key];
      for(let key in object){
        newObj[key] = object[key];
      }
    }
  }
}
convert(obj);
console.log(newObj);

// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 объекта 
// и возвращает новый, который состоит из свойств обоих объектов (склеить). 
// Если свойство повторяется, то взять значение второго объекта:

// assignObjects({ x: 10, y: 20 }, { z: 30 }) вывод { x:10, y:20, z: 30 }
// assignObjects({ x: 10 }, { x: 20, y: 30 }) вывод { x:20, y: 30 }

function assignObjects(obj1, obj2){
  obj3 = {};
  for(let key in obj1){
    obj3[key] = obj1[key];
  }
  for(let key in obj2){
    obj3[key] = obj2[key];
  }
  return obj3;
}

console.log(assignObjects({ x: 10, y: 20 }, { z: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));

