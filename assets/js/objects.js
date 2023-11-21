'use strict';
// Objects

// приклад акаунта користувача
// BAD
let login1 = 'Admin';
let password1 = '@#4ds45t4!sssd';
let email1 = 'admin@gmail.com';

// приклад об'єкта
let object = {
  // властивості об'єкта
  // властивість складається з ключа (назва властивості)
  // і значення
  key: 'value',
  key2: 'value2',
  key3: 500,
  // метод - властивість об'єкта, значененя якої убде функцією
  action1: function () {
    console.log('something');
  },
};

//
let toyCar = {
  color: 'yellow',
  brand: 'Honda',
  model: 'S2000',
  fuelTank: 30,
  drive: function () {
    alert('car id driving');
  },
};

let me = {
  name: 'Kyrylo',
  height: 1.7,
  speak: function () {
    alert('bla bla bla');
  },
};

// Створення об'єктів
let hamster1 = {}; // літеральний, часто
let hamster2 = Object(); // рідко
let hamster3 = new Object(); // відносно часто для об'єктів з певною стуктурою

let hamster = {
  color: 'black',
  breed: 'Jungar',
  // gender: 'male',
  // назви з декількох слів прийнято писати в кемелКейсі
  isMale: true,
  nickname: 'Bobick',
  age: 3,
};

/*
  Створіть об'єкт телефона

  у телефона має бути 
    виробник
    назва
    ціна
    колір
    поточний стан (увімкнений чи вимкнений)

  телефон також має вміти дзвонити
*/

let phone = {
  brand: 'Nokia',
  model: '3310 Max',
  price: 9999.99,
  color: 'black',
  isOn: true,
  operator: null,
  call: function () {
    console.log('calling ...');
  },
};

// доступ до об'єкта
console.log(phone);

// alert(phone); // приводить до рядка перед відображенням
// об'єкти в рядок без сторонньої допомого переводяться погано

// console.log(phone + '');

// доступ до властивостей об'єкта
// назвуЗмінноїОбь'єкта.назвуВластивості

console.log(phone.price);
console.log(phone.abracadabra);
console.log(phone.operator);
// alert(phone.price);
// phone.call();

// Створити функцію, яка спираючись на об'єкт телефону
// буде повертати рядок наступного виду:
// 'Телефон Nokia 3310 Max коштує 9999.99 гривень'

const printPhoneData = function (phoneObject) {
  // debugger;
  // Nokia
  // let phoneBrand = phoneObject.brand;
  // let phoneModel = phoneObject.model;
  // let phonePrice = phoneObject.price;

  // Телефон Nokia
  // let phoneDataString  = 'Телефон Nokia 3310 Max коштує 9999.99 гривень';

  // let phoneDataString = 'Телефон ' + phoneBrand + ' ' + phoneModel + ' коштує ' + phonePrice + ' гривень';
  // return phoneDataString;

  return (
    'Телефон ' +
    phoneObject.brand +
    ' ' +
    phoneObject.model +
    ' коштує ' +
    phoneObject.price.value +
    ' ' +
    phoneObject.price.currency
  );
};

// отримання доступу до спеціфічно названих властивостей
const testObj = {
  key: 'value 1',
  'my key': 'value 2',
  1: 'value 3',
  keyLast: 'value 4',
  nested: {
    deep1: true,
    deep2: 'amffdoifmofv',
    deep3: {},
  },
};

console.log(testObj.key);
console.log(testObj.keyLast);
// console.log(testObj.'my key'); ERROR

// доступ до властивості з можливістю обчислення
// обчислювальні власитивості
console.log(testObj['my key']);
// до змінної
let x = 'my key';
console.log(testObj[x]);

// console.log(testObj.1); ERROR
console.log(testObj[1]);

console.log(testObj.nested.deep2);
console.log(testObj['nested']['deep2']);
console.log(testObj['nested'].deep2);

// console.log(testObj.user.name); ERROR

// Зміна об'єкту
const cat = {
  name: 'fwfewnkmrgfskjfdsal',
  isMale: true,
  age: 3,
  color: 'white',
  sidfbidfids: '',
};

console.log(cat.name);

cat.name = 'Nikki';

console.log(cat.name);

console.log(cat.age);

cat.age++;

console.log(cat.age);

cat.age += 2;

console.log(cat.age);

// cat = 12354;
// cat = {};

// додавання нових властивостей до об'єкту
console.log(cat.breed);
cat.breed = 'Maine-Coon';

console.log(cat.breed);

// let breed = undefined;
// breed = 'Maine-Coon';

// видалення властивостей об'єкту
delete cat.sidfbidfids;

console.log(cat);
// змінні так не видаляються
// delete cat;

console.log(cat);
/*
  змініть властивость price у телефоні
    це має стати об'єктом з властивостями
      value - число
      currency - рядок з симоволом валюти або назва валюти

  створіть властивість pin у вже існуючому телефоні

  видаліть властивість pin з телефону
*/

phone.price = {
  value: 9999,
  currency: 'UAH',
};

phone.pin = '2492';

delete phone.pin;

function test1() {
  console.log(this); // undefined (strict mode) || Window (default)
}

test1();

const testObj1 = {
  name: 'Hi there',
  testFunc: function () {
    console.log(this); // testObj1
    this.isParentObject = true;
  },
};

testObj1.testFunc();

console.log(testObj1);

/*
зробити функцію printPhoneData методом об'єкта phone
тепер при запуску цього метода має виводитися інформація 
про телефон у якого її запустили, 
і вона не має приймати вхідних параметрів
*/

let phone2 = {
  brand: 'Nokia',
  model: '3310 Max',
  price: 19999.99,
  color: 'black',
  isOn: true,
  operator: null,
  call: function () {
    console.log('calling ...');
  },
  printPhoneData: function () {
    return (
      'Телефон ' +
      this.brand +
      ' ' +
      this.model +
      ' коштує ' +
      this.price +
      ' UAH'
    );
  },
};

let phone3 = {
  brand: 'Apple',
  model: 'iPhone XLVII',
  price: 59999.99,
  color: 'white',
  isOn: true,
  operator: null,
  call: function () {
    console.log('calling ...');
  },
  printPhoneData: function () {
    return (
      'Телефон ' +
      this.brand +
      ' ' +
      this.model +
      ' коштує ' +
      this.price +
      ' UAH'
    );
  },
};

// Функція-конструктор - альтернативний спосіб створення об'єктів
// з потрібною нам структурою
// назва за узгодженням пишеться в PascalCase
// function Phone (brand, model, price, color, isOn, operator) {
//   let newPhone = {
//     // brand: brand,
//     // model: model,
//     // price: price,
//     // color: color,
//     // isOn: isOn,
//     // operator: operator
//     brand,
//     model,
//     price,
//     color,
//     isOn,
//     operator
//   }

//   // return true;
// }

function Phone(brand, model, price, color, isOn, operator) {
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.color = color;
  this.isOn = isOn;
  this.operator = operator;

  this.call = function () {
    console.log('calling ...');
  };

  this.printPhoneData = function () {
    return (
      'Телефон ' +
      this.brand +
      ' ' +
      this.model +
      ' коштує ' +
      this.price +
      ' UAH'
    );
  };
}

// має бути вже повноцінний об'єкт телефона
// const phone5 = Phone('Test', 'Best model', 150, 'rainbow', true, 'Lifecell');

// перевод в режим конструктора
const phone6 = new Phone(
  'Apple',
  'iPhone 15',
  150000,
  'blue',
  false,
  'Vodafone'
);
