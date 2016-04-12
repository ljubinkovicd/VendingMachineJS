var method = Item.prototype;

// constructor
function Item(name, price) {
    this.name = name;
    this.price = price;
}

// Example method on the Animal object
method.getName = function () {
    return this.name;
};
method.getPrice = function () {
    return this.price;
};

method.toString = function () {
    return "'" + this.name + "' $" + this.price;
};

module.exports = Item;

var A = new Item("A", 0.65);
var B = new Item("B", 1.00);
var C = new Item("C", 1.50);

// public objects
module.exports.A = A;
module.exports.B = B;
module.exports.C = C;

    