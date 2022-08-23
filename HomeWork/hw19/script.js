
const roles = {
	admin: "https://bayguzin.ru/assets/cache_image/2017/06/avatar_1024x0_326.webp",
	student: "https://bayguzin.ru/assets/cache_image/2017/06/avatar_1024x0_326.webp",
	lector: "https://bayguzin.ru/assets/cache_image/2017/06/avatar_1024x0_326.webp"
};

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "https://bayguzin.ru/assets/cache_image/2017/06/avatar_1024x0_326.webp",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "https://bayguzin.ru/assets/cache_image/2017/06/avatar_1024x0_326.webp",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "https://bayguzin.ru/assets/cache_image/2017/06/avatar_1024x0_326.webp",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "https://bayguzin.ru/assets/cache_image/2017/06/avatar_1024x0_326.webp",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "https://bayguzin.ru/assets/cache_image/2017/06/avatar_1024x0_326.webp",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 53,
		img: "https://bayguzin.ru/assets/cache_image/2017/06/avatar_1024x0_326.webp",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

class User {
	constructor(name, age, img, role, courses){
		this.name= name;
		this.age= age;
		this.img= img;
		this.role= role;
		if(courses){
			this.courses= courses;
		}
	}

	render(){
		
		let data = document.write(`
			<div class="user__info">
				<div class="user__info--data">
					<img src=${this.img} alt="${this.name}" height="50">
					<div class="user__naming">
						<p>Name: <b>${this.name}</b></p>
						<p>Age: <b>${this.age}</b></p>
					</div>
				</div>
				<div class="user__info--role student">
					<img src="${roles[this.role]}" alt="${this.role}" height="25">
					<p>${this.role}</p>
				</div>
			</div>
		`);

		return data;
	}



	renderCourses(){
		
		this.courses.map(
			function(item){
				
				let result = 'easy';

				if(item.mark<=20){
					result = "satisfactory";
				} else if(item.mark<=21 && item.mark<=55){
					result = "good";
				} else if(item.mark<=56 && item.mark<=85){
					result = "very-good";
				} else if(item.mark<=86 && item.mark<=100){
					result = "excellent";
				}
				item.result = result;

				return item;
			}
		)
		.map(
			function(item){

				return document.write(`
				 	<div class="user__courses">
				 		<p class="user__courses--course student">
				 			${item.title} <span class="${item.result}">${item.result}</span> 
				 		</p>
				 	</div>
				`);
		
			}
		);
	}
	

			
}

class Student extends User{
	constructor(name, age, img, role, courses){
	
		super(name, age, img, role, courses);
	}

	render(){

		let data = super.render();
	}

	renderCourses(){
		let userCourses = super.renderCourses();
	}
	
	serGradations(){
		let result = super.userGradations();
	}
	
}

class Admin extends User{
	constructor(name, age, img, role, courses){
		super(name, age, img, role, courses);
	}
	render(){
		let data = super.render();
	}

	renderCourses(){
	
		this.courses.map(
			function(item){
	
				let result = 'easy';

				if(item.score<=20){
					result = "satisfactory";
				} else if(item.score<=21 && item.score<=55){
					result = "good";
				} else if(item.score<=56 && item.score<=85){
					result = "very-good";
				} else if(item.score<=86 && item.score<=100){
					result = "excellent";
				}
				item.result = result;

				return item;
			}	
		)
		.map(
			function(item){
				
				return document.write(`
					<div class="user__courses admin--info">
						<div class="user__courses--course admin">
							<p>Title: <b>${item.title}</b></p>
							<p>Admin's score: <span class="${item.result}">${item.result}</span></p>
							<p>Lector: <b>${item.lector}</b></p>
						</div>
					</div>
				`);
			}
		);
	}
}

class Lector extends User{
	constructor(name, age, img, role, courses){
	
		super(name, age, img, role, courses);
	}

	render(){
		let data = super.render();
	}

	renderCourses(){
		this.courses.map(
			function(item){
				
				let result = 'easy';

				if(item.score<=20){
					result = "satisfactory";
				} else if(item.score<=21 && item.score<=55){
					result = "good";
				} else if(item.score<=56 && item.score<=85){
					result = "very-good";
				} else if(item.score<=86 && item.score<=100){
					result = "excellent";
				}
				item.result = result;

				return item;
			}	
		)
		.map(
			function(item){
				return document.write(`
				<div class="user__courses admin--info">
					<div class="user__courses--course lector">
						<p>Title: <b>${item.title}</b></p>
						<p>Lector's score: <span class="${item.result}">${item.result}</span></p>
						<p>Average student's score: <span class="${item.result}">${item.result}</span></p>
					</div>
				</div>
				`);
			}
		);
	}
}

users.map(

	function(user){
		
		if(user.role == 'student'){
			let student = new Student(user.name, user.age, user.img, user.role, user.courses);
			
			student.render();
			if(user.courses){
				student.renderCourses();
			}
		}

		if(user.role == 'admin'){
			let admin = new Admin(user.name, user.age, user.img, user.role, user.courses);

			admin.render();
			admin.renderCourses();
		}

		if(user.role == 'lector'){
			let lector = new Lector(user.name, user.age, user.img, user.role, user.courses);

			lector.render();
			lector.renderCourses();
		}

	}
);
