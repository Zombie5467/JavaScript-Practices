/* eslint-disable prefer-const */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
// eslint-disable-next-line eol-last, no-unused-vars
let naming = 'Zombie';

// eslint-disable-next-line no-console
console.log(`My name is ${naming}`);

let coffee = 5;
let bagels = 3;
let soup = 9;

let cost = coffee + soup + (bagels + bagels);
let tax = cost * 0.1;
// eslint-disable-next-line no-console
console.log(`taxes: $${tax}`);
// eslint-disable-next-line no-console
console.log(`cost of food: $${cost}`);

let total = cost + tax;
// eslint-disable-next-line no-console
console.log(`the total of your order is: $${total}`);