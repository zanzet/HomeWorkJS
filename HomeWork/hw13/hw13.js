// Дано:
// let amount = 100;
// let monday = [
//   ['Write a tutorial',180],
//   ['Some web development',120]
// ];
// let tuesday = [
//   ['Keep writing that tutorial',240],
//   ['Some more web development',360],
//    ['A whole lot of nothing',240]
// ];
// Для элементов массивов monday и tuesday необходимо выполнить следующие методы:
//   1.Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
//   2.Оставить только те задачи, на выполнение которых нужно более 2-х часов.
//   3.Умножить результат на часовую ставку (amount) и добавить полученное значение в качестве третъего элемента в массив.
//   4.Вывести в html таблицу, которая состоит из ячеек с задачами в виде:

// <tr>
//   <td>Task name: Write a tutorial</td>
//   <td>Taks duration: 3 hours</td>
//   <td>Task amount: $300</td>
// </tr>

// Используем только методы concat/forEach/map/filter/join (по надобности, все не нужно).

let amount = 100;
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
  ['A whole lot of nothing',240]
];

let allDays = monday.concat(tuesday)
    .map(
        function (item){
            item.push(item[1] / 60);
            return item;
        }
    )
    .filter(
        function(item){
            if(item[2] > 2){
                return item;
            }
        }
    )
    .map(
        function(item){
            item.push(item[2] * amount);
            return item;
        }
    )
    .map(
        function(item){
            return  `<tr>
                        <td>Task name: ${item[0]}</td>
                        <td>Taks duration: ${item[2]} hours</td>
                        <td>Task amount: $${item[3]}</td>
                    </tr>`;
                    
        }
    )
    .join(` `);

document.write(`<table cellspacing="20px">
                        ${allDays}
                    </table>`);
console.log(allDays);