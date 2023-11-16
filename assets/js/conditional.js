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

// alert(accountBalance >= price2 ? 'Товар придбано' : 'Не вистачає грошей');

100 > 10 ? 'Yes' : 100 === 10 ? 'Yes2' : 'No';

// switch ... case

/*
  1 - класична
  2 - пепперонні
  3 - американо
  4 - 4 сира
*/
let itemNumber = +prompt('Яку піццу ви хочете замовити?');

// if (itemNumber === 1) {
//   alert('Ви замовили класичну піцу');
// } else if (itemNumber === 2) {
//   alert('Ви замовили піцу пепперонні');
// } else if (itemNumber === 3) {
//   alert('Ви замовили піцу американо');
// } else if (itemNumber === 4) {
//   alert('Ви замовили піцу 4 сира');
// } else {
//   alert('Некорректний номер піци');
// }

let totalPrice = 0;

// debugger;
switch (itemNumber) {
  // конкретний випадок
  case 1: {
    alert('Ви замовили класичну піцу');
    // totalPrice += 50;
    // вимикаєте провал кейсів
    break;
  }
  case 2: {
    alert('Ви замовили піцу пепперонні');
    // totalPrice += 70;
    break;
  }
  case 3: {
    alert('Ви замовили піцу американо');
    // totalPrice += 150;
    break;
  }
  case 4: {
    alert('Ви замовили піцу 4 сира');
    // totalPrice += 350;
    break;
  }
  // в якості останнього випадку можна записати default
  // він вконується для всіх інших випадків
  default: {
    alert('Некорректний номер піци');
  }
}

// let userScore = 9;

// switch (userScore) {
//   case 0:
//   case 1:
//   case 2:
//   case 3:
//     alert('Bad score');
//     break;
//   case 4:
//   case 5:
//   case 6:
//   case 7:
//     alert('normal score');
//     break;
//   case 8:
//   case 9:
//     alert('good score');
//     break;
//   case 10:
//     alert('perfect score');
//     break;
// }
