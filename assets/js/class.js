function OldUser(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
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

class User {
  constructor (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName () {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user3 = new User ('Test', 'User', 5000);
const user4 = new User ('Test', 'User', 5000);