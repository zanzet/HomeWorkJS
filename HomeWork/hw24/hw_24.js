let userData = {
    'USD': 1000,
    'EUR': 900,
    'UAH': 15000,
    'GBP': 20000,
    'AOA': 100
},
bankData = {
    'USD': {
        max: 3000,
        min: 100,
        img: '💵'
    },
    'EUR': {
        max: 1000,
        min: 50,
        img: '💶'
    },
    'UAH': {
        max: 0,
        min: 0,
        img: '💴'
    },
    'GBP': {
        max: 10000,
        min: 100,
        img: '💷'
    }
};

let getMoney = (userData, bankData )=>{
    return new Promise((resolve, reject)=>{
        confirm(`Посмотреть баланс на карте?`) ? resolve(userData) : reject(bankData);
    });
};

getMoney(userData, {userData: userData, bankData: bankData})
    .then(     
        valyta=>{ 
            let val = [];
            for(let key in valyta){
                val.push(key);
            }
            do{
               currency = prompt(`Введите название валюты в формате:${val.join(', ')}`,'EUR');
            }while(currency !== 'UAH' && currency !== 'USD' && currency !== 'EUR'  && currency !== 'BIF'  && currency !== 'AOA');
            return currency;
        },
        objKash =>{  
            let val = [];

            for(let keyA in objKash.userData){
                for(let keyB in objKash.bankData){
                    if(keyA == keyB && objKash.bankData[keyB].max !== 0){
                        val.push(keyA);
                    }
                }
            }
            do{
                currency = prompt(`Введите название валюты в формате:${val.join(', ')}`,`${val[0]}`);
            }while(currency !== 'UAH' && currency !== 'USD' && currency !== 'EUR'  && currency !== 'BIF'  && currency !== 'AOA');
            
            return Promise.reject(currency);
        }
    )
    .then(
        currency =>{ 
            for(let key in userData){
                if(currency == key){
                    console.log(`Баланс составляет: ${userData[key]} ${key}`)
                }
            }
        },
        currency =>{  
           let summCash = 0;
            do{
                summCash = parseInt(prompt(`Введите суму денег?`));
            }while(isNaN(summCash));
         
            for(let key in bankData){
                if(key == currency){
                    if(summCash > bankData[key].max){
                        console.log(`Введенная сумма больше допустимой. Максимальная сумма снятия: ${bankData[key].max}`);
                    } else if(summCash < bankData[key].min){
                        console.log(`Минимальная сумма снятия: $${bankData[key].min}`);
                    } else if(summCash > bankData[key].min && summCash < bankData[key].max){
                        console.log(`Вот Ваши денежки ${summCash} ${currency} ${bankData[key].img}`);
                    }
                }
            }
           
        }
    )
    .finally(
            ()=> console.log('Спасибо, хорошего дня 😘')
    )