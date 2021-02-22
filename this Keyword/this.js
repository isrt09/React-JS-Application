// Using single Quotation
const Food ={
	color  : 'orange',
	price  : 120,
	weight : 100,
	species: function(){
		return 'This orange price is '+this.price+' BDT';
	}
}

// Using Telda 
const Juice ={
	color  : 'orange',
	price  : 140,
	weight : 100,
	species: function(){		
		return `This orange price is ${this.price} BDT and weight ${this.weight} gm`;
	}
}
console.log(Food.species());
console.log(Juice.species());