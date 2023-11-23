'use strict';
// let num1 = 2;

// function checkThing(num) {
//   return num;
// }

// const result = checkThing(num1);

// if (result === 1) {
//   // action 1
// } else if (result === 2) {
//   // action 2
// }

// const input = prompt();

// switch (checkThing(input)) {
//   case 1: {
//     // action 1
//     alert(1);
//     break;
//   }
//   case 2: {
//     // action 2
//     alert(2);
//     break;
//   }
//   case null:
//   case '': {
//     // action 3
//     alert(3);
//     break;
//   }
//   default: {
//     alert(4);
//     // else
//   }
// }

// function test() {
//   switch (num1) {
//     case 1: {
//       // action 1
//       return 1;
//     }
//     case 2: {
//       // action 2
//       return 2;
//     }
//   }
// }

//

console.log('for');
// for() {}
for(let i = 0; i < 3; i++ ) {
  // тіло циклу
  console.log('iteration');
  console.log(i);
}

console.log('while');
// while () {}
let i1 = 0;

while (i1 < 3) {
  // тіло циклу
  console.log('iteration');
  console.log(i1);

  i1++;
}


console.log('do while');
// do {} while()
let i2 = 0;
do {
  // тіло циклу
  console.log('iteration');
  console.log(i2);

  i2++;
} while(i2 < 3);

// 

// let a = 0;
// while (true) {
//   // debugger;
//   alert('iteration');

//   if (a++ >= 3) {
//     break;
//     // continue;
//   }
// }

//
function func1 (param1) {
  console.log(this); // window || undefined
  return 'You entered ' + param1;
}

const func2 = function (param1 ) {
  console.log(this);
  return 'You entered ' + param1;
}

const newObj = {
  t: 1,
  t2: false,
  // метод об'єкта (різновид функції)
  func : function (param1) {
    console.log(this); // newObj

    // obj.t++;
    this.t++;

    return 'You entered ' + param1;
  }
}

const newObj2 = {
  func : function (param1) {
    console.log(this); // newObj2

    // newObj2.t++;

    return 'You entered ' + param1;
  }
}

const pager0 = {
  id: 0,
  color: 'black',
  sendMessage: function (messageText, recieverId) {
    // 'Pager 0 send message to pager 1'
    return 'Pager ' + this.id + ' send message ' + messageText + ' to pager ' + recieverId;
  }
}

function Pager (id, color) {
  // console.log(this); // object

  this.id = id;
  this.color = color;

  this.sendMessage = function (messageText, recieverId) {
    // 'Pager 0 send message to pager 1'
    return 'Pager ' + this.id + ' send message ' + messageText + ' to pager ' + recieverId;
  }
}

const pager1 = new Pager(1, 'red');
const pager2 = new Pager(2, 'red');
const pager3 = new Pager(3, 'red');
const pager4 = new Pager(4, 'red');
const pager5 = new Pager(5, 'red');
const pager6 = new Pager(6, 'red');