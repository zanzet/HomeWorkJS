
let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

function Product (type, price, category){
	
    this.type = type;
    this.price = price;
	this.category = category;
}

Product.prototype.renderTr = function(){

    return `<tr>
                <td><img src="images/${this.category}/${this.type}.svg"  width="50" height="50"></td>
                <td>${this.type}</td>
                <td>${this.price} USD</td>
            </tr>`;
};

function getNewProduct(obj){

	category = 0;
	// if(obj.indexOf('cosmeticsProducts')){
	// 	category = 'cosmetics';
	// }

	// if(obj.indexOf('devicesProducts')){
	// 	category = ' devices';
	// }

	// if(obj.indexOf('kitchenProducts')){
	// 	category = 'kitchen';
	// }

    obj.map(
        function(item){
            return new Product(item.type, item.price, category);
        }
	)
	.map(
		function (item){
		
			return item.renderTr();
		}
	)
}

document.write(`
				<table>
				<thead>
					<tr>
						<th>Imege</th>
						<th>Name</th>
						<th>Price</th>
					</tr>
					</thead>
				<tbody>
					${getNewProduct(cosmeticsProducts)}
					${getNewProduct(kitchenProducts)}
					${getNewProduct(devicesProducts)}
				</tbody>
				</table>
`)
