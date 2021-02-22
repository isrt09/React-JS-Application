class Food{
	constructor(name){
		this.name = name;
	}

	price(){
		console.log(this.name+' is very tasty');
	}

	static weight(){
		console.log('Orange\'s weight is 180 gm');
	}
}

let food = new Food('Orange');
food.price();
Food.weight();