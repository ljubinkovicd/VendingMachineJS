var Coin = {
	NICKEL : { name: "nickel", value : 0.05 },
	DIME : { name: "dime", value : 0.10 },
	QUARTER : { name: "quarter", value : 0.25 },
	DOLLAR : { name: "dollar", value : 1.00 }
};

var Item = {
	POPCORN : { name: "popcorn", value : 0.65 },
	SNICKERS : { name: "snickers", value : 1.00},
	MILKA : { name : "milka", value : 1.50 }
};

function vendingMachine() {
	this.display = 'INSERT COIN';
	this.coinsAvailable = [Coin.dollar, Coin.dollar, Coin.dollar, Coin.dollar, Coin.dollar, Coin.quarter, Coin.quarter, Coin.quarter, Coin.quarter, Coin.dime, Coin.dime, Coin.dime, Coin.dime, Coin.dime, Coin.nickel, Coin.nickel];
	this.coinsInserted = [];
	this.itemsAvailable = [Item.popcorn, Item.popcorn, Item.popcorn, Item.snickers, Item.snickers, Item.snickers, Item.milka, Item.milka, Item.milka];

	this.coinReturn = function() {
		var numOfItemsInserted = 0;

		for (var i = 0; i < coinsInserted.length; ++i) {
			++numOfItemsInserted;
		}

		coinsAvailable = coinsAvailable.splice(coinsAvailable.length - 1, numOfItemsInserted);
	}
}