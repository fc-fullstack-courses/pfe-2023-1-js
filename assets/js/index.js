// Функції

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

console.log(3);

// functional declaration - об'ява функції

// arrow function - функції "стрілки"

const getSumOfTwoNumbers = function (num1, num2) {
  // додавання точки зупинки для дебаггера
  // debugger;

  if (num1 !== num1 || typeof num1 !== 'number') {
    return null;
  }

  if (num2 !== num2 || typeof num2 !== 'number') {
    return null;
  }

  let result = num1 + num2;

  return result;
};

const result = getSumOfTwoNumbers(5, 8);

console.log(result);

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
