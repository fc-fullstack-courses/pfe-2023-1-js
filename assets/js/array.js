// Array
// x5000
// const firstVipUser = 'bestuser1234@gmail.com';
// const secondVipUser = 'kabfdifbdi@outlook.com';
// const thirdVipUser = 'aeonfdeu2343@gmail.com';

const vipEmailsObj = {
  0: 'bestuser1234@gmail.com',
  1: 'aeonfdeu2343@gmail.com',
  2: 'kabfdifbdi@outlook.com',
};

// vipEmails[1];

// Через конструктор
// const vipEmails = new Array('bestuser1234@gmail.com', 'aeonfdeu2343@gmail.com', 'kabfdifbdi@outlook.com');

// літеральне створення массиву
const vipEmails = [
  'bestuser1234@gmail.com',
  'aeonfdeu2343@gmail.com',
  'kabfdifbdi@outlook.com',
  vipEmailsObj,
];

// console.log(typeof vipEmails); // object

// console.log(vipEmailsObj);
// console.log(vipEmails);

// відобразити другий елемент у массиві в консолі
// console.log(vipEmails[1]);

// додайте 5 елемент до массиву 'almostlastmail@mail.com'
// vipEmails[4] = 'almostlastmail@mail.com';
// vipEmails[4000] = 'almostlastmail@mail.com';

// vipEmails.test = 'almostlastmail@mail.com';

// методи конструктора (статичними)
// Array.isArray();

const arr1 = [];

// додавання елементу в кінець массиву
arr1.push(100);

arr1.push(null);

const newLength = arr1.push('test', false, {});

// видалення останньго елементу з кінця массиву

// console.log(arr1);
arr1.pop();
// console.log(arr1);

const deletedValue = arr1.pop();
// console.log(arr1);
// console.log(deletedValue);

// const arr2 = [];

// arr2.pop();
// arr2.pop();
// arr2.pop();
// arr2.pop();
// const deletedValue2 = arr2.pop();

// додавання елемент(-ів) до початку масиву
// console.log('=====unshift======');
// console.log(arr1);
arr1.unshift('unshifted 1');
// console.log(arr1);
arr1.unshift(true, 'test 1', 'test 2');
// console.log(arr1);

// видалення елементу з початку массиву
// console.log('=====shift======');
// console.log(arr1);

arr1.shift();

// console.log(arr1);

const deletedValue3 = arr1.shift();
// console.log(arr1);
// console.log(deletedValue3);

// //
// console.log('=====splice======');
// console.log(arr1);
// початковий індекс, з якого відбуваються зміни
// arr1.splice(2);
// негативний індекс рахується з кінця масиву
// arr1.splice(-2);
// друге число казує кількість елементів для видалення
// arr1.splice(2, 2);
// з третього аргументу всі значення будуть додаватися
// розпочинаючи з вказаного індексу
const spliceResult = arr1.splice(2, 1, { test: 'oh no' }, 'test', 'original');
// console.log(arr1);
// // splice повертає масив з видаленими значеннями
// console.log(spliceResult);

// console.log('=====slice======');
// console.log(arr1);
// копія всього масиву
const copy1 = arr1.slice();
// console.log(copy1);
// копіювати починаючи з вказаного індексу
const copy2 = arr1.slice(2);
const copy3 = arr1.slice(-2);
// console.log(copy2);
// console.log(copy3);

// другий параметр вказуює ДО якого індексу копіювати
// const copy4 = arr1.slice(2, 4);
// const copy5 = arr1.slice(2, -2);
// console.log(copy4);
// console.log(copy5);

// console.log('=====slice trics======');

// console.log(copy5 === arr1);
// console.log(copy5[0] === arr1[2]);

/*

  видалити п'ять останніх елементів за один раз
  у массиві після другого елементу видалити 2 елементи і вставити на їх місце один елемент
  
  зробити копію масиву починаючи з 4 елементу і до 7 елементу ВКЛЮЧНО
  зробити копію масиву починаючи з третього елемента з кінця

*/

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// arr.splice(-5);

// arr.splice(2, 2, 'inserted');

// const taskCopy1 = arr.slice(3, 7);

// const taskCopy2 = arr.slice(-3);

const names = ['Andriy', 'Anton', 'Ganna', 'John', 'Jane'];

// join
const namesString = names.join('\\__/');
// console.log(namesString);

// includes
const isAndriyInArray = names.includes('Andriy');
const isMarkoInArray = names.includes('Marko');

// reverse
const reversedArray = names.reverse(); // reversedArray === names -> true

// flat
const deepArray = [
  'first',
  'second',
  ['deep-1', 'deep-2', 'deep-3', ['deeper-1', ['deepest -1']]],
  'fourth',
];

// 'deeper-1'
// console.log(deepArray[2][3][0]);

const flatted1 = deepArray.flat(1);
const flatted2 = deepArray.flat(3);

// concat
const concated1 = names.concat('Pavlo', 'Petro');
const concated2 = names.concat('Pavlo', 'Petro', ['Victoria', ['Kyrylo']]);

/*

  перевірте наявність в масиві значення 10

  створіть масив [1,2,3,[10,20,30,[100,[1000]]],4]
  отримайте на його основі масив, у якому немає інших масивів

  маючи масиви [1,2,3,4] та [9,8,7,6]
  отримайте масив [1,2,3,4,10,9,8,7,6]

*/

// перевірте наявність в масиві значення 10
const has10 = names.includes(10);

//  створіть масив [1,2,3,[10,20,30,[100,[1000]]],4]
// отримайте на його основі масив, у якому немає інших масивів
const numbers = [1, 2, 3, [10, 20, 30, [100, [1000]]], 4];
const flattedNumbers = numbers.flat(Infinity);

// маючи масиви [1,2,3,4] та [9,8,7,6]
// отримайте масив [1,2,3,4,10,9,8,7,6]

const nums1 = [1, 2, 3, 4];
const nums2 = [9, 8, 7, 6];
const finalNums = nums1.concat(10, nums2);

const users = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// whatToDo - функція зворотнього виклику (callback)
const doSomething = function (whatToDo, item) {
  // debugger;
  whatToDo(item);
};

// doSomething(alert, 'Magic');

// forEach - виконує фунцію для кожного елементу масиву
// з починаючи з початку
function printUserCallback(user, index, usersArray) {
  // debugger;
  console.log(user); // поточний елемент
  // console.log(index); // індекс поточного елемента
  // console.log(usersArray); // масив по якому ходимо
}

// users.forEach(printUserCallback);

// зробіть масив з числами
// пройдіться по всім числам в масиві методом forEach
// і покажіть кожне число в четвертій ступені
const nums = [5, 15, -504, 63.5, 10];

function printNumber (number) {
  // console.log(number ** 4);
}

nums.forEach(printNumber);

// передаємо анонімну функцію
nums.forEach(function (number) {
  // console.log(number ** 4);
});

// map - повертає новий масив з результатами
// виклику коллбеків для кожного елементу початового масиву
const newArray = nums.map(function (number) {
  // console.log(number ** 4);
  return number ** 4;
});

// filter - повертає новий масив, який складається з елементів
// які пройшли перевірку у колбек- функції

const betterUsers = ['Andriy', 'Petro', 'Natalka', 'Olena', 'Anton', 'John'];

const noAntonsAllowed = betterUsers.filter(function callback(name) {
  // if(name !== 'Anton') {
  //   // не Антони
  //   return true; // елемент опиниться у новому масиві
  // } else {
  //   // Антони
  //   return false; // елемент не опиниться у новому масиві
  // }

  return name !== 'Anton';
});
