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
  constructor(name, price, quantity, isForAdult) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.isForAdult = isForAdult;
  }

  getTotalPrice() {
    return this.price * this.quantity;
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