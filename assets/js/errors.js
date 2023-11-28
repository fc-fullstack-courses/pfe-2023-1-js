'use strict';

// console.log(test);

// if()

const myFirstError = new Error('You did bad thing');
myFirstError.secret = 'some secred data';

// throw 1;
// throw myFirstError;
// throw new Error('Bad stuff');



// console.log(myFirstError);
// console.dir(myFirstError);


const getSumOfTwoNumbers = function (num1, num2) {
  // додавання точки зупинки для дебаггера
  // debugger;

  if (num1 !== num1 || typeof num1 !== 'number') {
    throw new TypeError('num1 must be number');
  }

  if (num2 !== num2 || typeof num2 !== 'number') {
    throw new TypeError('num2 must be number');
  }

  let result = num1 + num2;

  return result;
};

// try ... catch
try {
  // місце для виконання потенційно небезпечного коду

  console.log('Thing 1');

  // const res1 = getSumOfTwoNumbers(5,5);
  const res1 = getSumOfTwoNumbers(5,'sadsafsda');

  console.log('Thing 2');
} catch (error) {
  // блок обробки помилок
  console.log('catch');
  console.log(error);
} finally {
  // блок коду який буде виконано у будь-якому випадку
  console.log('finally');
}

console.log('after all');
