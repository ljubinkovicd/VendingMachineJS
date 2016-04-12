var VendingMachine = require('./VendingMachine');
var Coin = require('./Coin');
var Item = require('./Item');


// var coin1 = new Coin("DOLLAR", 1.00);
// var coin2 = new Coin("DOLLAR", 1.00);

var availableItems = [
    Item.A,
    Item.B,
    Item.C
];

var availableCoins = [
    // Coin.COIN_NICKEL, Coin.COIN_NICKEL, Coin.COIN_NICKEL, Coin.COIN_NICKEL,
    // Coin.COIN_DIME, Coin.COIN_DIME, Coin.COIN_DIME, Coin.COIN_DIME, Coin.COIN_DIME,
    // Coin.COIN_NICKEL, Coin.COIN_NICKEL, Coin.COIN_NICKEL, Coin.COIN_NICKEL, Coin.COIN_NICKEL,
    // Coin.COIN_DOLLAR, Coin.COIN_DOLLAR, Coin.COIN_DOLLAR, Coin.COIN_DOLLAR, Coin.COIN_DOLLAR
    Coin.COIN_DOLLAR
];

var vendingMachine = new VendingMachine();

vendingMachine.service(availableCoins, availableItems);

vendingMachine.insertMoney(Coin.COIN_NICKEL);

var returnedMoney = vendingMachine.returnsAllInsertedMoney();

vendingMachine.showSequence(returnedMoney, availableCoins);

console.log("returned money: " + returnedMoney);

vendingMachine.selectItem( Item.A);