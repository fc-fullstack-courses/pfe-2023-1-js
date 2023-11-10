// однорядковий коментар
/*
  багаторядковий коментар

  alert - функція
  alert() - запуск функції
  'Hello World' - тип даних Рядок / string
  ; - кінець інструкції
*/
// alert('Hello World');

// String
"asdmsa;lds 213 342343  44po43j43p";
"asdkhsakljdhsjfhdsfjdk jfdweklfe";

`sdnsdlsndl nl n234 9403 `;

// Number
10000000000000000000000000000000000000000000000000000000000000000000;
2.5;
-50;

// BigInt
4543773587373786786757434735473555252525253535272525252250000000000000000004545n;

// Boolean
true; // правда / працює
false; // брехня / непрацює

// null
null;

// undefined
undefined;

// Symbol
Symbol("опис");

// alert( typeof null );

// створення змінних
// оголошення змінної
let age;
let Age;

let longVariableName;

let LongVariableName;

let LONG_VARIABLE_NAME;

// BAD
// let змінна;
// let long-variable-name;
// let let;
// let true;
// let var;

// alert(age);

// присвоєння значення змінній
age = 50;

// alert(age);

// let catName;
// catName = 'Vasyl';

// ініціалізація змінної
let catName = "Vasyl";

// alert(catName);

// оголосіть якусь змінну за допомогою let
let userName1;
// подивіться на її значення
// alert(userName1);
// присвойте цій зміній нове значення
userName1 = "Kyrylo";
// подивіться на її значення ще раз
// alert(userName1);

// повторіть ті ж кроки але для змінної const
// Помилка 1
// const userName2;
const userName2 = "Some name";

// alert(userName2);
// Помилка 2
// userName2 = 'Anton';

// alert(userName2);

// alert('Завдання виконано! Молодець');

// console.log(userName1);

// int number1 = 5;

let testVariable; // undefined

testVariable = 50; // number

testVariable = "asdjhsalfdsfds"; // string

testVariable = false; // boolean

30 + 70; // 100

let number1 = 30;

let number2 = 70;

number1 + number2; // 100

number2 = "50";

// number1 - number2 // 80 / '3050'

// console.log( number1 + number2 );

// 30       '50'
// number1 - number2 // -20

// console.log( number1 - number2 );

//
(50 + 50) * 25; // 2500

// матиматичні оператори

// +
console.log("2 + 2");
console.log(2 + 2);

console.log("0.1 + 0.2");
console.log(0.1 + 0.2);

console.log("30 + '50'");
console.log(30 + "50"); // перетворення на рядок

console.log("true + false");
console.log(true + false);

// -

console.log("30 - '50'");
console.log(30 - "50");

// *
console.log(2 * 3);
// /
console.log(20 / 3);
// % - залишок від ділення
console.log(-9 % 3);
console.log(9 % -3);
// ** - зведення у ступінь
console.log("2 ** 3");
console.log(2 ** 3);

console.log("5 ** 2");
console.log(5 ** 2);

console.log("-5 ** 2");
console.log((-5) ** 2);

// оперератори інкрементації / декрементації

let num1 = 10;
// num1 = num1 + 1; // 11
console.log("++");
console.log(num1); // 10

// префіксний інкремент + 1
console.log(++num1); // 11

// постфіксний інкремент
console.log(num1++); // 11
console.log(num1); // 12

// декременти - 1
console.log(--num1); // 11
console.log(num1--); // 11
console.log(num1); // 10

// унарний мінус
-50;
let x = 25;
-x;

// унарний плюс - спосіб приведення значення до числового
+50;

let badNumber1 = "500";
console.log(+badNumber1);

console.log(+"asffdgrfasdds"); // NaN
console.log(+"0xFA45BC"); // 0x - ставиться перед шістнадцятковими числами

// Логіка
// ! - не щось

!true; // false
!false; // true

!"test"; // false

// перетворення значення до булевого
!!"test"; // true;

!!502;

// порівняння
100 > 50; // true
5 < 5000000; // true
1 > 99999; // false

console.log('who is better / bigger');
console.log(!('cat' > 'mouse')); // false посимвольно по позиції в таблиці юнікоду

50 > 50 // false
50 >= 50 // true
// <=

let name1 = 'Anton';
let name2 = 'Vasyl';
let name3 = 'Anton';
// 
console.log(name1 === name2); // false
console.log(name1 === name3); // true

let var1 = 50;
let var2 = '50';

var1 == var2; // true / true ПОГАНО
var1 === var2; // true / false

name1 !== name2; // true

let testVar = NaN;
testVar === testVar; // false

// х1 більше 10 і менше 100
//  10 < x1 < 100
let x1 = 150;

// console.log(10 < x1 < 100); // true

// логічне Та && - повертає першу берхню або останню правду

console.log(10 < x1 && x1 < 100); // false

console.log(10 && 50); // 50
console.log(10 && NaN); // NaN
console.log(null && NaN); // null

// логічне АБО || - повертає першу правду або останню берхню 

console.log(10 < x1 || x1 < 100); // true

console.log(10 || 50); // 10
console.log(10 || NaN); // 10
console.log(null || NaN); // NaN

// 10 < x1 && x1 < 100 && 500 > 5 