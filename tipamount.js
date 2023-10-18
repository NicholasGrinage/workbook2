"strict"

var costOfFood = 0;
var entree = 19;
var drink = 11;
var app = 9;
var dessert = 6;
var tipPercentage
var tipPercentageAsDecimal = 20/100;

costOfFood = app + entree + drink + dessert;
var tipAmount = costOfFood * tipPercentageAsDecimal;

console.log("The tip on " + costOfFood + " food bill is " + tipAmount + ".");
