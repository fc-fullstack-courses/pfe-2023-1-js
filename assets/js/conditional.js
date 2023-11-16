// if ... else

let expression = 5 < 0;

if (expression) {
  //
  console.log('щось');
  console.log('щось2');
}

let expression1 = false;

if (expression1) console.log('щось');

console.log('test');

let userName = '';

if (userName) {
  // коли ім'я приводиться до істини
  console.log('Hello ' + userName);
} else {
  // у всіх інших випадках
  console.log('Hello Guest');
}

let directorUserName = 'Bohdan';
let managerName = 'Inna';
let userName2 = 'Kyrylo';

// debugger;

if (userName2 === directorUserName) {
  // вітаємось шановливо якщо ім'я співпадає з директором
  console.log('Good day ' + userName2);
} else if (userName2 === managerName) {
  // особливо вітаємося з менеджером
  console.log('Greetings ' + userName2);
} else if (userName2) {
  // коли ім'я приводиться до істини
  console.log('Hello ' + userName2);
} else {
  // у всіх інших випадках
  console.log('Hello Guest');
}

// if (!userName) {
//   console.log("Hello Guest");
// }

// const userName3 = prompt("Введіть ім'я");

// if (userName3) {
//   // дія 1
//   alert('Hello ' + userName3);
// } else {
//   // дія 2
//   alert('Hello Guest');
// }

// тернарка

/*
  умова ? дія 1 : дія 2
*/

// userName3 ? alert('Hello ' + userName3) : alert('Hello Guest');

10 > 0 ? console.log('10 > 0 is true') : console.log('10 > 0 is false');

let value;

if (10 > 0) {
  value = 'This is true';
} else {
  value = 'This is false';
}

const value2 = 10 > 0 ? 'This is true' : 'This is false';

let price1 = 150;
let price2 = 50;

let accountBalance = 100;

if (accountBalance >= price1) {
  // alert('Товар придбано');
} else {
  // alert('Не вистачає грошей');
}

// accountBalance >= price1 ? alert('Товар придбано') : alert('Не вистачає грошей');

alert(accountBalance >= price2 ? 'Товар придбано' : 'Не вистачає грошей');

100 > 10 ? 'Yes' : 100 === 10 ? 'Yes2' : 'No';
