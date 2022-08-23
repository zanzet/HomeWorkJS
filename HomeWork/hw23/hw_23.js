const getFile = function(file, someFunction) {
    let xml = new XMLHttpRequest;
    xml.open('GET', file);
    xml.send();

    xml.addEventListener('readystatechange', ()=>{
        if(xml.readyState === 4 && xml.status === 200){
            let data = JSON.parse(xml.response);
            someFunction(data);
        }
    });
};

function render (obj){
    for(let key in obj){
        if(Array.isArray(obj[key])){
            obj[key].map(item => result.push(item));
        }
    }
}

result = new Array;
getFile('data.json', render);
getFile('data2.json', render);


console.log(result);