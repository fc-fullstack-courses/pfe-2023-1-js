'use strict';
function OldUser(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.alert = age;
}

// const userProto = {
//   getFullName : function () {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// OldUser.prototype = userProto;

function UserProto() {
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// const userProto = new UserProto();

// OldUser.prototype = userProto;

OldUser.prototype = new UserProto();

const user1 = new OldUser('John', 'Doe', 42);

// user1.__proto__ = userProto;
const user2 = new OldUser('John', 'Doe', 42);

// class

// class User {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const user3 = new User('Test', 'User', 5000);
// const user4 = new User('Test', 'User', 5000);

class House {
  // тіло класу
  // завжди в суворому режимі !

  // метод конструктору - аналог старого конструктору
  constructor(numberOfFloors = 1, address = 'CHANGE ME PLZ', style = 'modern') {
    this.numberOfFloors = numberOfFloors;
    this.address = address;
    this.style = style;
  }

  // нижче можна написати методи екземпляру будинку
  getHouseData() {
    return `House data address: ${this.address} floors: ${this.numberOfFloors} architectural style: ${this.style}`;
  }

  // властивість прототипу
  isBuilt = true;
}

const house1 = new House(3, 'Somwhere is Zaporizhzhia');
// const house2 = House(3, 'Somwhere is Zaporizhzhia'); // ERROR !!!

/*
  Створіть клас User
    який має мати насутпні властивості:
      ім'я
      прізвище
      стать
      вік
      зріст

    у екземплярів класу мають бути наступні методи:
      отримати всі дані про користувача рядком
      метод isAdult - який каже чи є конкретний користувач повнолітнім

*/

class User {
  constructor(firstName, lastName, age, isMale, height) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isMale = isMale;
    this.height = height;
  }

  getAllUserData() {
    `User ${this.firstName} ${this.lastName} age: ${this.age} height: ${
      this.height
    } m gender: ${this.isMale ? 'male' : 'female'}`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

/*
  створити клас Product
    у товара має бути
      назва
      ціна
      кількість (на складі)
      чи товар для дорослих

      має бути метод, який поверне вам вартість всього товару на складі
*/

class Product {
  // створення приватного поля / властивості
  #private;
  #price;
  #quantity;
  constructor(name, price, quantity, isForAdult = false) {

    // console.log(this.#private); // value

    if(typeof name !== 'string' || name === '') {
      throw new TypeError ('Назва має бути не пустим рядком');
    }

    // if(typeof price !== 'number' || isNaN(price)) {
    //   throw new TypeError ('Ціна має бути числом')
    // }

    // if(price < 0) {
    //   throw new RangeError('Ціна не може бути негативною');
    // }

    this.name = name;
    // узгодження що напряму таку властивість чіпати не треба
    // this._price = price;

    // це сеттер зараз
    this.price = price;

    this.quantity = quantity;
    this.isForAdult = isForAdult;
  }

  get quantity () {
    return this.#quantity;
  }

  set quantity (newQuantity) {
    if(typeof newQuantity !== 'number' || isNaN(newQuantity)) {
      throw new TypeError ('Кількість має бути числом');
    }

    if(newQuantity < 0) {
      throw new RangeError('Кількість не може бути негативною');
    }

    this.#quantity = newQuantity;
  }

  // безпечно отримуємо ціну
  // getPrice () {
  //   return this._price;
  // }

  // геттер - штучний замінник отримання певної властивості
  get price () {
    return this.#price;
  }

  // безпечно змінюємо ціну
  // setPrice (newPrice) {

  //   if(typeof newPrice !== 'number' || isNaN(newPrice)) {
  //     throw new TypeError ('Ціна має бути числом')
  //   }

  //   if(newPrice < 0) {
  //     throw new RangeError('Ціна не може бути негативною');
  //   }

  //   this._price = newPrice;
  // }

  // сеттер - штучний замінник задавання певної властивості
  set price (newPrice) {
    if(typeof newPrice !== 'number' || isNaN(newPrice)) {
      throw new TypeError ('Ціна має бути числом')
    }

    if(newPrice < 0) {
      throw new RangeError('Ціна не може бути негативною');
    }

    this.#price = newPrice;
  }

  getTotalPrice() {
    // console.log(this.#private); // value
    return this.#price * this.quantity;
  }
}

const prod1 = new Product('Живчик', 36.5, 500, false);

const me = new User('Kyrylo', 'Prepodenko', 15000, true, 1);

me.money = 1000;

// if (me.money >= prod1.getTotalPrice()) {
//   alert('можу купити весь живчик');
// } else {
//   alert('не можу купити весь живчик');
// }

// alert(`Купити весь живчик коштує ${prod1.getTotalPrice()}`);

// let str = `Купити весь живчик коштує ${prod1.getTotalPrice()}`;

// const words = str.split(' ');

// const totalPrice = +words[words.length - 1];

const prod2 = new Product('Original name 1', 137.99, 2000);

// prod2.price = undefined;

// console.log(prod2.getTotalPrice());

// console.log(prod2.#private); // ERROR 