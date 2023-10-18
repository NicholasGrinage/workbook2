"use strict"

var savings, interestRate, years, savingsDoubled;

var savings = 50000;
var interestRate = 5;
var savingsDoubled = savings * 2;
var years = 72/interestRate;
console.log("At a " + interestRate + "% interest rate, your savings account will be worht $" + savingsDoubled.toFixed(2) + years.toFixed(1) + " years");

