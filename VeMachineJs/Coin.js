var method = Coin.prototype;

// constructor
function Coin(name, value) {
    this.name = name;
    this.value = value;
}

method.getName = function () {
    return this.name;
};

method.getValue = function () {
    return this.value;
};

method.toString = function () {
    return this.name + " [$" + this.value + "]";
};

// public class definition
module.exports = Coin;

var COIN_NICKEL = new Coin("NICKEL", 0.05);
var COIN_DIME = new Coin("DIME", 0.10);
var COIN_QUARTER = new Coin("QUARTER", 0.25);
var COIN_DOLLAR = new Coin("DOLLAR", 1.00);

// public objects
module.exports.COIN_NICKEL = COIN_NICKEL;
module.exports.COIN_DIME = COIN_DIME;
module.exports.COIN_QUARTER = COIN_QUARTER;
module.exports.COIN_DOLLAR = COIN_DOLLAR;