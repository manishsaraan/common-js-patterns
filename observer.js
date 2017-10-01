var Book = function(name, price){
	var priceChanging = [],
	    priceChanged = [];
	this.name  = function(val){
          return name;
	};

	this.price = function(val){

		if(val !== undefined || val	 !== price){
			for(var i = 0;i<priceChanging.length;i++){
				if(!priceChanging[i](this,val)){
					return price;
				}
				
			}
			
			for(var m= 0;m<priceChanged.length;m++){
				priceChanged[i](this)
			}
		    price = val;          
		}
		return price;
	};

	this.onPriceChanging  =  function(callback){
           priceChanging.push(callback);
	};

	this.onPriceChanged = function(callback){
           priceChanged.push(callback);
	};
};

var Book = new Book('JavaScript: The Good Parts',20.12);

console.log('The name is : '+Book.name());

console.log('The price is: '+Book.price());

Book.onPriceChanging(function(b,price){
	if(price > 100){
		console.log('System Error: price has gone enxepectedly high');
	}
});

Book.onPriceChanged(function(b){
	 console.log('The book price has changed to '+b.price());
});

Book.price(44);

Book.price(200);