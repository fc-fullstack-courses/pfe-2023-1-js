'use strict';

// console.log(test);

// if()

console.log('Thing 1');

const myFirstError = new Error('You did bad thing');
myFirstError.secret = 'some secred data';

// throw 1;
// throw myFirstError;
throw new Error('Bad stuff');

console.log('Thing 2');

// console.log(myFirstError);
// console.dir(myFirstError);


