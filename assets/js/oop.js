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
  constructor (name) {
    this.name = name;
    this.isOn = false;
  }

  // індикатор
  get isOn () {
    return this.#isOn;
  }

  set isOn (newState) {
    if (typeof newState !== 'boolean') {
      throw new TypeError();
    }

    this.#isOn = newState;
  }

  // кнопка ввімкнення
  startDevice () {  
    this.isOn = true;
  }

  stopDevice () {
    this.isOn = false;
  }
  
}

const device1 = new ElectronicDevice('raspberry PI');
