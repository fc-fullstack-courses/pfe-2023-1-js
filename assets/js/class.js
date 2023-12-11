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

  isAdult () {
    return this.age >= 18;
  }
}

