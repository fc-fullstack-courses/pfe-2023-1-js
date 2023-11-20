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
  action1 : function () {
    console.log('something');
  }
};

// 
let toyCar = {
  color: 'yellow',
  brand: 'Honda',
  model: 'S2000',
  fuelTank : 30,
  drive: function() {
    alert('car id driving')
  }
}

let me = {
  name: 'Kyrylo',
  height: 1.70,
  speak: function () {
    alert('bla bla bla');
  }
}

// Створення об'єктів
let hamster1 = {}; // літеральний, часто
let hamster2 = Object(); // рідко
let hamster3 = new Object(); // відносно часто для об'єктів з певною стуктурою

let hamster = {
  color: 'black',
  breed: 'Jungar',
  // gender: 'male',
  // назви з декількох слів прийнято писати в кемелКейсі
  isMale : true,
  nickname: 'Bobick',
  age: 3
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
  brand : 'Nokia',
  model: '3310 Max',
  price: 9999.99,
  color: 'black',
  isOn: true,
  operator: null,
  call : function () {
    console.log('calling ...')
  }
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

  return 'Телефон ' + phoneObject.brand + ' ' + phoneObject.model + ' коштує ' + phoneObject.price + ' гривень';
}

