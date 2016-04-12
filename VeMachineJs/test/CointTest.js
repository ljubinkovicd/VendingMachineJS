var expect = require("chai").expect;
var Coin = require("../Coin");

describe("Coin", function () {

    describe("Coin name value", function () {

        it("converts the basic colors", function () {

            // // NICKEL(0.05), DIME(0.10), QUARTER(0.25), DOLLAR(1.00);
            var coin = new Coin("NICKEL", 0.05);

            expect(coin.getName()).to.equal("NICKEL");
            expect(coin.getValue()).to.equal(0.05);
        });

    });

});
