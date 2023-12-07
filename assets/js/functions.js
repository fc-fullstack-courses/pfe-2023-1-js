'use strict';
// Функції

// testVar = 12345;
// console.log(testVar);

// alert;
// console.log;

// дужки - виклик функції
// вхідні дані для функції переадються у дужки через кому
// вони називаються аргументами функції
// функція може мати будь-яку кількість аргументів
// alert('Hello there', 'sds', 'asd');

// функції після свого виконання повертають результат,
// який можна зберігти у змінній або використати іншим чином
// let userName = prompt('Введіть ваше ім`я');

// alert( userName );

// Отримати від користувача його ім'я
// Привитатися з ним по імені, наприклад: Привіт, Кирило

// let userName = prompt('Введіть ваше ім`я');

// let greetingText = 'Привіт, ' + userName;

// alert(greetingText);

// Отримати від користувача 2 числа
// вивести на екран їх суму

// v1
// let num1 = prompt('Введіть перше число');
// let num2 = prompt('Введіть друге число');

// alert(+num1 + +num2);

// v2
// let input1 = prompt('Введіть перше число');
// let input2 = prompt('Введіть друге число');

// let num1 = +input1;
// let num2 = +input2;

// alert(num1 + num2);

// v3
// let num1 = +prompt('Введіть перше число');
// let num2 = +prompt('Введіть друге число');

// alert(num1 + num2);

// fool protection version
// let num1 = +prompt('Введіть перше число');
// let num2 = +prompt('Введіть друге число');

// let result = num1 + num2;

// if(result === result) {
//   alert(result);
// }

console.log(1);

// myFirstFunction(5,2); ERROR

// function expression - функціональний вираз
// параметр функції - спеціаьна змінна, доступна тільки всередині функції
const myFirstFunction = function (testValue, testValue2) {
  // тіло функції
  console.log(testValue);
  console.log(testValue2);
  let x = 20 + 20;

  // повертання значення із функції
  // функція прпацює до першого return
  if (x > 10) {
    return x;
  }

  console.log('мій код');
};

myFirstFunction(5, 2); // NORMAL

console.log(3);

// sum2(5,5); // NORMAL

// functional declaration - об'ява функції
// function sum2(num1, num2) {
//   debugger;
//   return num1 + num2;
// }

// sum2(5,5); // NORMAL

// arrow function - функції "стрілки"

const getSumOfTwoNumbers = function (num1, num2) {
  // додавання точки зупинки для дебаггера
  debugger;

  if (num1 !== num1 || typeof num1 !== 'number') {
    return null;
  }

  if (num2 !== num2 || typeof num2 !== 'number') {
    return null;
  }

  let result = num1 + num2;

  return result;
};

// const result = getSumOfTwoNumbers(5, 8);

// console.log(result);

// const input1 = +prompt(1);
// const input2 = +prompt(2);

// const funcResult = getSumOfTwoNumbers(input1, input2);

// const funcResult = getSumOfTwoNumbers(50, 50);
// if (typeof funcResult === "number") {
//   alert(funcResult);
// }

// Області видимості

let test1 = '3dfd';

console.log(test1);

if (true) {
  let test2 = 645478;

  if (true) {
    // debugger;
    let test1 = true;
    console.log(test1);
    console.log(test2);
  }
  console.log(test1);
}

console.log(test1);
// console.log(test2); error

// let let1 = 'test';

// const letFunc1 = function () {

//   let let2 = 12354;
//   console.log(let1);
//   console.log(let2);
// }

// console.log(let2);

// var var1 = 'test';

// const varFunc1 = function () {

//   var var2 = 12354;
//   console.log(var1);
//   console.log(var2);
// }

// console.log(var2);

// let let3 = "test";

// if (true) {
//   let let4 = false;

//   console.log(let3);
//   console.log(let4);
// }

// console.log(let4);

var var3 = 'test';

var var4 = null;
console.log(var4);

if (true) {
  var var4 = false;

  console.log(var3);
  console.log(var4);
}

console.log(var4); // false

// чисті функції - clear func
function sum(num1, num2) {
  return num1 + num2;
}

// параметр за замовчанням
function multiply(num1, num2 = 2) {
  return num1 * num2;
}

function square(num = 1) {
  return multiply(num, num);
}

// детерменовані функції - determined func
function sum(num1, num2) {
  let result = num1 + num2;
  console.log(result);
  return result;
}

// функції з побічними ефектами - func with side effects
// let num = 1;
// function sum (num1, num2) {
//   let result = num1 + num2 + num++;
//   console.log(result);
//   return result;
// }

// let result;

// function sum2 (num1, num2) {
//   result = num1 + num2;
//   return result;
// }

// функції вищого порядку - HOF (High Order Functions)
//  функція, що приймає як аргументи інші функції або повертає іншу функцію як результат.

function hof1(func1) {
  if (Math.random() > 0.5) {
    func1();
  }
}

function hof2() {
  const func2 = function () {
    console.log('boo');
  };

  return func2;
}

const innerFunc = hof2();

// innerFunc();
// innerFunc();
// innerFunc();

// функції - стрілки
// const arrow = () => {}

const nonArrowSum = function (num1 = 2, num2 = 2) {
  return num1 + num2;
};

const arrowSum1 = (num1 = 2, num2 = 2) => {
  return num1 + num2;
};
// скороченний запис
const arrowSum2 = (num1 = 2, num2 = 2) => num1 + num2;

const nonArrowFunc = function () {
  console.log(this); // undefined || Window
};

//  немає свого this,
// його запозичують з вернього рівня скрипта / у іншої функції
const arrowFunc = () => {
  console.log(this); // Window
};

const rozetkaShop = {
  name: 'Rozetka',
  products: [
    { name: 'prod 1', price: 5000, quantity: 0 },
    { name: 'prod 2', price: 1000, quantity: 1234 },
    { name: 'prod 3', price: 200, quantity: 2 },
    { name: 'prod 4', price: 21200, quantity: 105 },
    { name: 'prod 5', price: 76800, quantity: 11221 },
  ],
  // displayAllProducts: function () {
  //   this.products.forEach(function(product) {
  //     console.log(this); // undefined
  //     console.log(`Shop ${this.name} has product ${product.name} with price ${product.price} and quantity ${product.quantity}`);
  //   });
  // }
  displayAllProductsV1: function () {
    let that = this;
    this.products.forEach(function (product) {
      console.log(that);
      console.log(
        `Shop ${that.name} has product ${product.name} with price ${product.price} and quantity ${product.quantity}`
      );
    });
  },
  displayAllProductsV2: function () {
    function displayProduct(product) {
      console.log(this);
      console.log(
        `Shop ${this.name} has product ${product.name} with price ${product.price} and quantity ${product.quantity}`
      );
    }

    // копія функції displayProduct з конкретно вказаним значенням this яке дорівнює rozetkaShop
    const bindedCorrectThisFunc = displayProduct.bind(rozetkaShop);

    this.products.forEach(bindedCorrectThisFunc);
  },
  displayAllProductsV3: function () {
    // const callback = (product) => {
    //   console.log(this); // rozetkaShop
    //   console.log(`Shop ${this.name} has product ${product.name} with price ${product.price} and quantity ${product.quantity}`);
    // }

    // this.products.forEach(callback);

    this.products.forEach((product) => {
      console.log(this); // rozetkaShop
      console.log(
        `Shop ${this.name} has product ${product.name} with price ${product.price} and quantity ${product.quantity}`
      );
    });
  },
};

// стрілки не можуть бути конструкторами
// const test = new arrowFunc(); // TypeError

// у стрілок не має arguments
const haveArguments = function (a, b, c) {
  console.log(arguments); // псевдомасив
};

const doesntHaveArguments = () => {
  console.log(arguments); // нічого
};
