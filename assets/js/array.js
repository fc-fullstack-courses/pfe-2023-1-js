// Array
// x5000
// const firstVipUser = 'bestuser1234@gmail.com';
// const secondVipUser = 'kabfdifbdi@outlook.com';
// const thirdVipUser = 'aeonfdeu2343@gmail.com';

const vipEmailsObj = {
  0: 'bestuser1234@gmail.com',
  1: 'aeonfdeu2343@gmail.com',
  2: 'kabfdifbdi@outlook.com',
};

// vipEmails[1];

// Через конструктор
// const vipEmails = new Array('bestuser1234@gmail.com', 'aeonfdeu2343@gmail.com', 'kabfdifbdi@outlook.com');

// літеральне створення массиву
const vipEmails = [
  'bestuser1234@gmail.com',
  'aeonfdeu2343@gmail.com',
  'kabfdifbdi@outlook.com',
  vipEmailsObj,
];

// console.log(typeof vipEmails); // object

// console.log(vipEmailsObj);
console.log(vipEmails);

// відобразити другий елемент у массиві в консолі
console.log(vipEmails[1]);

// додайте 5 елемент до массиву 'almostlastmail@mail.com'
vipEmails[4] = 'almostlastmail@mail.com';
// vipEmails[4000] = 'almostlastmail@mail.com';

// vipEmails.test = 'almostlastmail@mail.com';
