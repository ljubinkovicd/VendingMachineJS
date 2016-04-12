var method = VendingMachine.prototype;

// constructor
function VendingMachine() {
    this.availableMoney = [];
    this.availableItems = [];
    this.insertedMoney = [];
}

function showInventory() {
    console.log("");
    console.log("availableMoney: " + this.availableMoney + ", sum = " + this.calculateInsertedMoneyValue(this.availableMoney));
    console.log("insertedMoney: " + this.insertedMoney + ", sum = " + this.calculateInsertedMoneyValue(this.insertedMoney));
    console.log("availableItems: " + this.availableItems);
    console.log("");
}
method.insertMoney = function (coin) {

    this.insertedMoney.push(coin);
    this.availableMoney.push(coin);
    showInventory.call(this);
};


//  select item: sets the available change and items
method.service = function (coins, items) {
    this.availableMoney = coins;
    this.availableItems = items;
    showInventory.call(this);
};

// var cars = new Array("Saab", "Volvo", "BMW");
// Example method on the Animal object
method.returnsAllInsertedMoney = function () {

    // we added inserted coins to available
    for (var i = 0; i < this.insertedMoney.length; i++) {
        var insertedCoin = this.insertedMoney[i];

        console.log("Found inserted coin: " + insertedCoin);

        // var foundCoin = this.availableMoney.filter(function( obj ) {
        //     return obj.getValue() == insertedCoin.getValue && obj.getName() == insertedCoin.getName();
        // });
        // console.log("Found inserted coin: " + insertedCoin + " = " + foundCoin + " in available " + this.availableMoney);

        var index = this.availableMoney.indexOf(insertedCoin);
        console.log("Found inserted coin: " + insertedCoin + ", index = " + index);
        if (index > -1) {
            this.availableMoney.splice(index, 1);
        }
        showInventory.call(this);
    }
    // for (insertedCoin : insertedCoin)  {
    //     availableCoins.remove(insertedCoin);
    // }
    // return copy of inserted to client, we need to clear inserted
    var copy = this.insertedMoney.slice(0);

    // showSequence("COIN-RETURN", insertedCoin);

    this.insertedMoney = [];

    showInventory.call(this);

    return copy;
};

method.selectItem = function (item) {

    var index = this.availableItems.indexOf(item);
    console.log("? Found item : " + item + ", index = " + index);
    if (index > -1) {
        console.log("Found item : " + item + ", index = " + index + " res = " + this.availableItems[index]);
    }
};

method.calculateInsertedMoneyValue = function (array) {

    var sum = 0.0;
    for (var i = 0; i < array.length; i++) {
        var insertedMoney = array[i];
        var value = insertedMoney.getValue();
        sum = sum + value;
    }
    // console.log("sum = " + sum);
    return sum;
};

method.roundToTwoDecimalPlaces = function (value) {
    return value.toFixed(2); //
    // return Math.round(value * 100.0) / 100.0;
};

method.showSequence = function (result, coins) {

    console.log("----");
    console.log("this.insertedMoney");
    console.log(this.insertedMoney);
    // this.insertedMoney.stream().forEach(c => console.log(c + ", "));

    for (var i = 0; i <  this.insertedMoney.length; i++) {
        var insertedMoney =  this.insertedMoney[i];
        console.log("AAA" + insertedMoney + ", ");
    }
    var insertedMoneyString = this.insertedMoney.join();

    // this.insertedMoney.forEach(function (c) {
    //     console.log(c + ", ");
    // });
    console.log(insertedMoneyString);
    console.log("----");
    console.log(result);

    if (coins != null) {

        var sum = this.calculateInsertedMoneyValue(coins);
        // double sum = change.stream().mapToDouble(c -> c.getValue()).sum();
        if (sum > 0) {
            console.log("Return money: ");
            // showCoins(coins);

            var coinString = coins.join();
            console.log("\t" + coinString + " value = " + sum);
            // coins.forEach(function (c) {
            //     console.log(c + ", ");
            // });
            // console.log(" value = " + sum);
        } else {
            console.log("No return money (value = 0.0)");
        }

    } else {
        console.log("No change");
    }

};

module.exports = VendingMachine;