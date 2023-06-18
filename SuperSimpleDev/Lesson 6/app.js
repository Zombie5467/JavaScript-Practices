/* eslint-disable no-console */
// eslint-disable-next-line eol-last, prefer-const, no-unused-vars
let hour = 16;
const name = 'Zombie'; // la variable name estaba en desuso pero yo lo cambie, archivo lib.dom.d.ts, linea 27029

const edad = 77;
const holyday = false;
const random = Math.random();
const guess = 'trails';
let result = '';
// eslint-disable-next-line prefer-const, no-unused-vars
let cartQuantity = 0;

// eslint-disable-next-line brace-style
if (hour >= 6 && hour <= 12) { console.log(`morning! ${name}`); }
// eslint-disable-next-line brace-style
else if (hour >= 13 && hour <= 17) { console.log(`good afternoon ${name}`); }
else { console.log('good night'); }

if ((edad <= 6 || edad >= 65) && !holyday) { console.log('enjoy discount'); } else { console.log('regular ticket payment'); }

if (random < 0.5) { result = 'heads'; } else { result = 'trails'; }
console.log(result);

// if (guess === result) { console.log('you win'); } else console.log('you lose');
console.log(guess === result ? 'you win' : 'you lose');
