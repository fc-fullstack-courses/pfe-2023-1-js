// console.log('some string');
// console.log('some string'.length);

// const str1 = 'asdsad';
// console.log(str1);

// const str2 = new String('asdsad');
// console.log(str2);
// console.log(str2.length);

// const bool1 = new Boolean(false);

// console.log( bool1 ? 'test' : 'cat');

// const empty = {};

// if (empty) {
//   console.log('its empty');
// }

// приводить значення до булевого
// const bool2 = Boolean(false); // !!

// const bool3 = Boolean(NaN);

// const num1 = Number('asfddsgdsfs'); // +

// const str1 = String(500); // '' + 500


// Number
// Number.isFinite(NaN) // false

// Number.isFinite('asdsfds') // false

// Number.isFinite('100') // false

// isFinite(100) // true

// isFinite('100') // true

// Number.isNaN(0) // false

// Number.isNaN(Infinity) // false

// Number.isNaN('1000') // false

// Number.isNaN('asdsfdsfsdf') // false

// Number.isNaN(true) // false

// isNaN(50) // false

// isNaN('50') // false

// isNaN('sadsdsa') // true

// звичайні змінні
const camelCase = {};

// конструктори
const PascalCase = function () {}

// константе значення 
const UPPER_SNAKE_CASE = 3.14;

// Math

// абсолютне значення числа
// Math.abs(5); // 5
// Math.abs(-50) // 50

// округлення в більший бік
// Math.ceil() // 2

// округлення в менший бік
// Math.floor(10.99999999999999) // 10

// округлення в ближчий бік
// Math.round(1.1) // 1
// Math.round(1.5) // 2
// Math.round(1.6) // 2

// Math.min(0,1,5,88,-15,1212,-45465) // -45465
// Math.max(0,1,5,88,-15,1212,-45465) // 1212

// Math.pow(2,3) // 8

// Math.random() випадкове значення від 0 до 1 (одиниця не включно)


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// корень квадратний від числа
// Math.sqrt(25) // 5

// alert('Глава 2 \nІм\'я користувача\\');

/*
  Отримати у користувача промптами дав числа X та Y

  Отримати результат множення X на Y та вивести його у вигляді наступного рядку
  X * Y = result
  замість назв змінних мають бути підставлені значення, наприклад:
  2 * 3 = 6
*/

// let x = +prompt('num 1');
// let y = +prompt('num 2');

// alert(x + ' * ' + y + ' = ' + x * y);
// alert(x + ' + ' + y + ' = ' + (x + y));

'text';
"text";

`text`; // шаблоний рядок
// alert(`Глава 2 
// Ім'я персонажа бла бла бла`);

// let x = +prompt('num 1');
// let y = +prompt('num 2');

// повторити для + , - , /
// console.log(`${x} * ${y} = ${x * y}`);
// console.log(`${x} + ${y} = ${x + y}`);
// console.log(`${x} / ${y} = ${x / y}`);
// console.log(`${x} - ${y} = ${x - y}`);


const testStr = 'Test string Lorem Ipsum Lorem';

// console.log(testStr);

const letter1 = testStr.charAt(3);
const letter2 = testStr[3];
const letter1Unicode = testStr.charCodeAt(3);

testStr[2] = 'x';

// console.log(testStr);

const newStr1 = testStr.concat('string 1', ' text 2');

const isLoremHere = testStr.includes('Lorem');
const isOremHere = testStr.includes('Orem');

const loremStartingIndex = testStr.indexOf('Lorem');
const oremStartingIndex = testStr.indexOf('Orem');

const testStr2 = testStr.slice(0,4);
const testStr3 = testStr.slice(-5);

let testStr4 = '       User    Userenko       ';

const trimmedStr = testStr4.trim();

// let operator = '   +';

// switch(operator.trim()) {
//   case '+': console.log('sum'); 
// }

const lowerCasedStr = testStr.toLowerCase();
const upperCasedStr = testStr.toUpperCase();

const noLorem = testStr.replace('Lorem', 'some other text');

const split1 = testStr.split();
const split2 = testStr.split(' ');
const split3 = testStr.split('');

