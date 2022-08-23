// 1.Создать массив А размерностью n. Заполнить случайными числами в любом диапазоне. 
//     Например A = [23,1,2,52,5,34,23,6,246,436];
//     проверить все числа на простоту, и найденные простые числа сохранить в новый массив B.
//     в полученному массиве B найти максимальное и минимальное число.

// debugger;

a = [3,1,2,51,5,34,23,6,246,437];
b = [];

for(i=0; i<a.length; i++){
    flag = 0;
    
    if(a[i]>=3){
        for(j=2; j<a[i]; j++){
            
            if(a[i]%j==0){
                flag++;
                break;
            }
        } 
        if(!flag){
            b.push(a[i]);
        }   
    }else{
        b.push(a[i]);
    }
}
console.log(b);

for(i=1, min=max=b[0]; i<b.length; i++){
    if(b[i] > min){
        min = b[i];
    }
    if(b[i] > max){
        max = b[i];
    }
}
console.log(`Max: ${max}`);
console.log(`Min: ${min}`);


// 2.Создать новый массив А размерностью n. Элементы массива между min -- max записать в новый массив B.

a= new Array( parseInt(prompt(`Ввудите число?`, 6)));  
b = [];
for(i=0, min=-10, max=20; i<a.length; i++){
    a[i] = Math.floor(Math.random() * (max - min + 5)) - min;
}          
console.log(a);
for(i = 1, min=max=a[0]; i<a.length; i++){
    if(a[i] < min){
        min = a[i];
    }
    if(a[i] > max){
        max = a[i];
    }
}
console.log(`Max: ${max}`);
console.log(`Min: ${min}`);

b = a.slice(a.indexOf(min), a.indexOf(max));
console.log(b);


// 3.Создать новый массив A размерностью n. В нем найти и поменять местами min и max.

a = [2, 3, 5, 55, 22, 9];

for(i = 1, min=max=a[0]; i<a.length; i++){
    if(a[i]<min){
        min=a[i];
    }
    if(a[i]>max){
        max=a[i];
    }
}

console.log(`${min}`, a.indexOf(min));
console.log(`${max}`, a.indexOf(max));

b = a[max];
a[max] = a[min];
a[min] = b;

console.log(`${min}`, a.indexOf(min));
console.log(`${max}`, a.indexOf(max));