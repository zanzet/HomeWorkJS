const Name = prompt(`Как вас зовут?`).replaceAll(' ', '');
const subName = prompt(`Ваша фамилия?`).replaceAll(' ', '');
const email = prompt(`Ваша почта?`).replaceAll(' ', '').toLowerCase();
const dateOfBirthday = +prompt(`В каком году вы родились?`).replaceAll(' ', '');

nameLength = Name.length;
firstLetter = Name[0].toUpperCase();
newName = firstLetter + Name.slice(1,nameLength);

console.log(newName);

subnameLength = subName.length;
letterFirst = subName[0].toUpperCase();
newSubName = letterFirst + subName.slice(1,subnameLength);

console.log(newSubName);

if(email.indexOf(`@`) == -1){
    a = `not valid email <b>${email}</b> (symbol @ not exist)`;
}else if(email.indexOf(`@`) === email.length-1){
    a = `not valid email <b>${email}</b> (symbol @ find in last place)`;
} else if(!email.indexOf(`@`)){
    a = `not valid email <b>${email}</b> (symbol @ find in first place)`;
} else if(email.indexOf(`@`)){
    a = email;
}

today = new Date();
year = today.getFullYear();
age = year - dateOfBirthday;
console.log(age);

document.write(`<p>Full name: ${newName} ${newSubName}</p>
<p>Email: ${a}</p>
<p>Age: ${age}</p>`);