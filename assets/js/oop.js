class Post {}

class User {
  constructor(login, password, email) {
    this.login = login;
    this.password = password;
    this.email = email;
    this.isBanned = false;
  }

  createPost(text) {
    // if(this.isBanned) {
    //   throw new Error('Banned user cant post');
    // }

    const newPost = new Post(text);
  }

  deletePost(post) {
    console.log('my post deleted');
  }
}

const user1 = new User('user1234', '1234test', 'user@gmail.com');

// class Moderator {
//   constructor(login, password, email, permissions) {
//     this.login = login;
//     this.password = password;
//     this.email = email;
//     this.permissions = permissions;
//   }

//   createPost (text) {
//     const newPost = new Post(text);
//   }

//   deletePost (post) {
//     console.log('any post deleted');
//   }
// }

// Успадкування
class Moderator extends User {
  constructor(login, password, email, permissions) {
    // це посилання на конструктор батьківського класу
    // (тут User)
    super(login, password, email);
    this.permissions = permissions;
  }

  createSubForum(name) {
    console.log(`subforum ${name} created`);
  }
}

/*
  створити клас Admin
    адмін має мати можливість банити користувачів

    у кожного користувача має бути властивість isBanned

*/

class Admin extends Moderator {
  constructor(login, password, email, permissions) {
    super(login, password, email, permissions);
  }

  ban(user) {
    user.isBanned = true;

    return user;
  }

  // unBan(user) {
  //   user.isBanned = false;
  //   return user;
  // }
}

const moder1 = new Moderator('moder1', '12345moder', 'moder@gmail.com', []);

const admin = new Admin('tyran12345', 'admin', 'admin1@gmail.com', []);

/*
  створити клас Риби
    у риба має бути ім'я (прізвисько)
    тип харчування (хижа / не хижа / всеядна)
    її стан (жива / не зовсім жива)

    риба має мати можливість пливти (достатьно консоль лога)

  створити клас Акула яка буде рибою

    акула має можливість полювати на інших риб, 
    вважайте що акула може полювати тількі на риб

*/

class Fish {
  constructor(nickname, ration, isAlive) {
    this.nickname = nickname;
    this.ration = ration;
    this.isAlive = isAlive;
  }

  swim() {
    console.log(`${this.nickname} is swimming`);
  }

  static isFish(fish) {
    return fish instanceof Fish;
  }
}

class Shark extends Fish {
  constructor(nickname, isAlive) {
    super(nickname, 'carnivore', isAlive); //  new Fish();
  }

  hunt(fish) {
    if (!Fish.isFish(fish)) {
      throw new TypeError('Акула має їсти тільки рибу');
    }

    fish.isAlive = false;
    console.log(`${this.nickname} has eaten ${fish.nickname}`);
  }

  static isShark(shark) {
    return shark instanceof Shark;
  }
}

const fish1 = new Fish('Nemo', 'herbivore', true);
const shark1 = new Shark('White', true);

// абстракція - виділення найважливіших частин реалізації

// class Product {
//   // товар магазину
//   constructor(name, price, quantity, weight, height, width) {

//   }
// }

// інкапсуляція - приховання даних / методів для приховування складності реалізації

class ElectronicDevice {
  #isOn;
  constructor(name) {
    this.name = name;
    this.isOn = false;
  }

  // індикатор
  get isOn() {
    return this.#isOn;
  }

  set isOn(newState) {
    if (typeof newState !== 'boolean') {
      throw new TypeError();
    }

    this.#isOn = newState;
  }

  // кнопка ввімкнення
  startDevice() {
    this.isOn = true;
  }

  stopDevice() {
    this.isOn = false;
  }
}

const device1 = new ElectronicDevice('raspberry PI');

// поліморфізм - можливість методів успадкованих класів по різному працювати
// у порівнянні з бітьківськими методами

class Figure {
  constructor(name) {
    this.name = name;
  }

  getArea() {
    console.log('розрахунок площі фігури');
  }

  static isFigure(fig) {
    return fig instanceof Figure;
  }
}

const fig1 = new Figure('щось страшне');

class Rectangle extends Figure {
  constructor(a, b, name = 'прямокутник') {
    super(name);
    this.a = a;
    this.b = b;
  }

  getArea() {
    console.log('розрахунок площі прямокутника');
    return this.a * this.b;
  }
}

const rect1 = new Rectangle(5, 10);

class Square extends Rectangle {
  constructor(a) {
    super(a, a, 'квадрат');

    delete this.b;
  }

  getArea() {
    console.log('розрахунок площі квадрата');
    return this.a * this.a;
  }
}

const square1 = new Square(7);

function getFigureArea(figureObj) {
  if (Figure.isFigure(figureObj)) {
    const res = figureObj.getArea();

    return res;
  }

  throw new TypeError('Not a figure');
}

/*
  створити клас Animal
    кожна тварика має ім'я та тип (назва виду (кіт, пес...))
    кожна тварина має вміти рухатись і "розмовляти" (ретюрнів рядків вистачіть)

  Успадкувати від тварини класи Snake (змія) і Eagle (орел)
    і орли і змії мають рухатися і "розмовляти" по своєму

  slither
*/

// class Animal {
//   constructor(species, nickname) {
//     this.species = species;
//     this.nickname = nickname;
//   }

//   move() {
//     return `${this.nickname} is moving`;
//   }

//   speak() {
//     return `${this.nickname} is making noices`;
//   }
// }

// const animal1 = new Animal('cat', 'Pushok');

// class Snake extends Animal {
//   constructor(nickname) {
//     super('snake', nickname);
//   }

//   move() {
//     return `${this.nickname} is slithering`;
//   }

//   speak() {
//     return `${this.nickname} is hissing`;
//   }
// }

// class Eagle extends Animal {
//   constructor(nickname) {
//     super('eagle', nickname);
//   }

//   move() {
//     return `${this.nickname} is flying`;
//   }

//   speak() {
//     return `${this.nickname} is skreeching`;
//   }
// }

// const snake = new Snake('Baslilisk');
// const eagle = new Eagle('Baldie');

/*
    SOLID

    Single-responsibility principle - принцип єдиної відповідальності
    Open-closed principle - принцип відкритості / закритості
    Liskov substitution principle - "правильне успадкування". 
    Interface segregation principle - принцип розділів інтерфейсу
    Dependency inversion principle - принцип інверсії залежностей
*/

// Single-responsibility principle - принцип єдиної відповідальності
function sum(...numbers) {
  // console.log('user created');
  return numbers.reduce((acc, num) => (acc += num));
}

function isNormalNumber(num) {
  if (typeof num !== 'number' || isNaN(num)) {
    throw new TypeError('num must be number');
  }
}

isNormalNumber(5);

// Open-closed principle - принцип відкритості / закритості
function calcLetters(str, letters = ['1', '2', '3', '4', '5', '6']) {
  const lowerCasedStr = str.toLowerCase();

  let result = 0;

  for (let i = 0; i < lowerCasedStr.length; i++) {
    let letter = lowerCasedStr[i];
    if (letters.includes(letter)) {
      result++;
    }
  }

  return result;
}

// Liskov substitution principle - маэте зробити так, щоб на місце екземпляру дочірного класу можна
// було підставити еказмпаля батьківського класу без проблем з виконанням коду.

class Animal {
  constructor(species, nickname) {
    this.species = species;
    this.nickname = nickname;
  }

  move() {
    return `${this.nickname} is moving`;
  }

  speak() {
    return `${this.nickname} is making noices`;
  }
}

class Snake extends Animal {
  constructor(nickname) {
    super('snake', nickname);
  }

  #slither() {
    return `${this.nickname} is slithering`;
  }

  move() {
    return this.#slither();
  }

  speak() {
    return `${this.nickname} is hissing`;
  }
}

class Eagle extends Animal {
  constructor(nickname) {
    super('eagle', nickname);
  }

  move() {
    return `${this.nickname} is flying`;
  }

  speak() {
    return `${this.nickname} is skreeching`;
  }
}

const animal1 = new Animal('cat', 'Pushok');
const snake = new Snake('Baslilisk');
const eagle = new Eagle('Baldie');

const tamer = {
  name: 'John',
  trainMoving: function (animal) {
    return animal.move();
  },
};

//Interface segregation principle - створюйте методи та власитівості тількі тоді коли це потрібно
// щоб не успадкувати зайві речі (змія не вміє літати)

// Dependency inversion principle - не залежити від деталей реалізації (не допускати хардкода)

// Don't repeat yourself (DRY) - уникайте написання коду який працює однаково але відрізняється
// вхідними даними
// Keep it simple stupid KISS - краще написати код, який буде зрозуміліший усім ніж якось
// таким чином що потім ніхно не розуміє як це працює

function toRandomCase(str) {
  const lettersArr = str.split('');

  const newLettersArr = lettersArr.map(function (letter) {
    // if(Math.random() > 0.5) {
    //   return letter.toUpperCase();
    // } else {
    //   return letter.toLowerCase();
    // }

    const newLetter =
      Math.random() > 0.5 ? letter.toUpperCase() : letter.toLowerCase();
    return newLetter;
  });

  const resultStr = newLettersArr.join('');
  return resultStr;
}

const toRandomCase2 = (str) =>
  str
    .split('')
    .map((letter) =>
      Math.random() > 0.5 ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join('');

// const toRandomCase2 = (str) =>
//   str
//     .split('')
//     .map((letter) =>
//       Math.random() > 0.5 ? letter.toUpperCase() : letter.toLowerCase()
//     )
//     .join('');
