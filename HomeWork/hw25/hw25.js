let API = 'https://6224bf0d6c0e39662045a917.mockapi.io/heroes'

const controller = async (api, method="GET", obj) => {

	const options = {
		method: method,
		headers: {
			"content-type": "application/json"
		}
	}

	if(obj){
		options.body = JSON.stringify(obj);
	}

	try{
		let request = await fetch(api, options),
			response = await request.json();

		return response;
	} catch(err){
	\
		return [];
	}
}

// RenderHEroesCArt
const getHeroesData = async ()=>{
	let heroesData = await controller(API);
	heroesData.forEach(item => {
			 new HEROES(item);
	 });
}

getHeroesData();

//registr heroes
const form = document.querySelector('#heroesForm');

form.addEventListener(`submit`,async e =>{
    e.preventDefault();
	
    let nameHeroes =  e.target.querySelector(`input[data-name="heroName"]`).value,
        heroesComics = e.target.querySelector(`#heroComics`).value,
        heroesFavourite = e.target.querySelector(`input[data-name="heroFavourite"]`).checked;

	let heroesObj = {
		"name": nameHeroes,
		"comics": heroesComics,
		"favorite": false,
	}


	if(heroesFavourite){
		heroesObj.favorite = true;
	}

    let heroesData = await controller(API);

	let heroesExist = heroesData.find(user => user.name === nameHeroes);

	if(heroesExist){
		console.log(`Такой горой уже есть в базе данных!`);
	}else {
		let newHeroes = await controller(API,"POST", heroesObj)
		new HEROES(newHeroes)
	}
})
// Render heroes
const dataTable = document.querySelector('.DataTable');

class HEROES{
	constructor(user){
		
		for(let key in user){
			this[key] = user[key];
 		}
		this.render();
	}

	render(){
		let table = document.createElement('table'),
			tbody = document.createElement('tr'),
			labelTD = document.createElement('td'),
			labelFav = document.createElement('label'),
			inputFav = document.createElement('input'),
			deleteAction = document.createElement('td'),
			deleteBTN = document.createElement('button');

			deleteBTN.addEventListener('click', async()=>{
				let deleteHero = await controller (API+`/${this.id}`, 'DELETE')
				if(typeof deleteHero == 'object'){
					table.innerHTML = '';	
				}
			})

		labelFav.classList.add('heroFavouriteInput');
		labelFav.innerHTML = `Favourite:`;
		inputFav.type = 'checkbox';

		if(this.favorite){
			inputFav.checked = true;	
		}
		

		table.classList.add('heroes__table');
		deleteBTN.innerHTML = 'DELETE'
		tbody.innerHTML = `
							<td>${this.name}</td>
							<td>${this.comics}</td>
							`

		table.innerHTML = `<thead>
								<tr>
									<th>Name Surname</th>
									<th>Comics</th>
									<th>Favourite</th>
									<th>Actions</th>
								</tr>
							</thead>`

		labelTD.append(labelFav);
		labelFav.append(inputFav);
		inputFav.addEventListener('click', async() =>{
			debugger
			let obj = {
				favorite: true
			};
			
			if(inputFav.checked === true){
				await controller(API+`/${this.id}`, 'PUT', obj)
			} else if(inputFav.checked === false){
				obj.favorite = false;
				await controller(API+`/${this.id}`, 'PUT', obj)
			}
		})
		
		deleteAction.append(deleteBTN); 

		dataTable.append(table);
		table.append(tbody);
		tbody.append(labelTD);
		tbody.append(deleteAction);


	
		
	}
}
