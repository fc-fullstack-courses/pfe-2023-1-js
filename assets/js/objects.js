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
// const cat = {
//   name: 'fwfewnkmrgfskjfdsal',
//   isMale: true,
//   age: 3,
//   color: 'white',
//   sidfbidfids: '',
// };

// console.log(cat.name);

// cat.name = 'Nikki';

// console.log(cat.name);

// console.log(cat.age);

// cat.age++;

// console.log(cat.age);

// cat.age += 2;

// console.log(cat.age);

// cat = 12354;
// cat = {};

// додавання нових властивостей до об'єкту
// console.log(cat.breed);
// cat.breed = 'Maine-Coon';

// console.log(cat.breed);

// let breed = undefined;
// breed = 'Maine-Coon';

// видалення властивостей об'єкту
// delete cat.sidfbidfids;

// console.log(cat);
// змінні так не видаляються
// delete cat;

// console.log(cat);
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

console.log('========================================');

let testValue1 = 'Test value';
let testValue2 = 'Other test value';
let testValue3 = 'Other test value';

console.log(testValue1 === testValue2); // false
console.log(testValue2 === testValue3); // true

console.log('========================================');

const newTestObj1 = {
  test: 10,
};

const newTestObj2 = {
  notTest: 20,
};

const newTestObj3 = {
  notTest: 20,
};

const newTestObj4 = newTestObj2;

console.log(newTestObj1 === newTestObj2); // false
console.log(newTestObj2 === newTestObj3); // false

console.log('========================================');

console.log(newTestObj2 === newTestObj2); // true
console.log(newTestObj2 === newTestObj4); // true

console.log('========================================');

newTestObj2.notTest = 40;
console.log(newTestObj2);

console.log(newTestObj4);
newTestObj4.test = false;

console.log(newTestObj2);

function testFunc(someObj) {
  someObj.someValue = 500;

  return someObj;
}

const lastObject = testFunc(newTestObj2);

// Prototypes

const video = {
  id: 0,
  title: 'My first video',
  description: 'bla bla bla',
  views: 15000,
  likes: 150,
  dislikes: 3,
  isPrivate: false,
  comments: [
    {
      id: 0,
      text: 'Best video ever',
    },
  ],
  addView: function () {
    // треба додати один перегляд
    return ++this.views;
  },
};

let videoId = 0;

const videoPrototype = {
  addView: function () {
    // треба додати один перегляд
    return ++this.views;
  },
}

function Video(title, description, isPrivate) {
  this.id = videoId++;
  this.title = title;
  this.description = description;
  this.views = 0;
  this.likes = 0;
  this.dislikes = 0;
  this.isPrivate = isPrivate;
  this.comments = [];

  // неоптимальний підхід для конструкторів
  // this.__proto__ = videoPrototype; 
}
// даємо прототип конструктору, а він його сам виставляє екземплярам відео
Video.prototype = videoPrototype;


const video2 = new Video('Video title', '...', false);
const video3 = new Video('Video title 2', '...', false);
console.log('============== PROTOTYPES ===================');

console.log(video2.addView === video3.addView); // false

const arr1 = [1];
const arr2 = [2];

// console.log(arr1.map === arr2.map); // true

// const videoPrototype = {
//   test: function () {
//     console.log(this);
//     console.log('this method written in videoPrototype')
//   },
//   id: 0
// }

// const testVideo1 = {
//   title: 'test 1'
// }

// const testVideo2 = {
//   title: 'test 2'
// }

// встановлюємо прототип до існуючого об'єкта
// testVideo1.__proto__ = videoPrototype;
// testVideo2.__proto__ = videoPrototype;

// testVideo1.test();

// videoPrototype.__proto__ = {

// }

/*
  створіть об'єкти кота та собаки
    вони мають мати імена

  створіть об'єкт-прототип animal
    у нього має бути метод, імітуючий сон

  додайте прототип до існючих об'єктів і змусте котика / песика поспати
*/

const cat = {
  name : 'Cat'
}

const dog = {
  name: 'Dog'
}

const animalPrototype = {
  sleep: function () {
    console.log(this.name + ' is sleeping now ...');
  }
}

cat.__proto__ = animalPrototype;
dog.__proto__ = animalPrototype;

// cat.sleep();
// dog.sleep();