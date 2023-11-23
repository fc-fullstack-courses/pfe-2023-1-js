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

console.log(arr1);
arr1.pop();
console.log(arr1);

const deletedValue = arr1.pop();
console.log(arr1);
console.log(deletedValue);

// const arr2 = [];

// arr2.pop();
// arr2.pop();
// arr2.pop();
// arr2.pop();
// const deletedValue2 = arr2.pop();

// додавання елемент(-ів) до початку масиву
console.log('=====unshift======');
console.log(arr1);
arr1.unshift('unshifted 1');
console.log(arr1);
arr1.unshift(true, 'test 1', 'test 2');
console.log(arr1);

// видалення елементу з початку массиву
console.log('=====shift======');
console.log(arr1);

arr1.shift();

console.log(arr1);

const deletedValue3 = arr1.shift();
console.log(arr1);
console.log(deletedValue3);

//
console.log('=====splice======');
console.log(arr1);
// початковий індекс, з якого відбуваються зміни
// arr1.splice(2);
// негативний індекс рахується з кінця масиву
// arr1.splice(-2);
// друге число казує кількість елементів для видалення
// arr1.splice(2, 2);
// з третього аргументу всі значення будуть додаватися
// розпочинаючи з вказаного індексу
const spliceResult = arr1.splice(2, 1, 'test', 'original');
console.log(arr1);
// splice повертає масив з видаленими значеннями
console.log(spliceResult);
