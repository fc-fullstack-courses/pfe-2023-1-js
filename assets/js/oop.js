class Post {}

class User {
  constructor(login, password, email) {
    this.login = login;
    this.password = password;
    this.email = email;
    this.isBanned = false;
  }

  createPost(text) {
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
