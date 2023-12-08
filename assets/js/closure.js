let value = 'test value';

function test1() {
  // debugger;
  console.log(`Value in test1: ${value}`); // test value

  if (true) {
    let value = NaN;
    console.log(`Value in test1 if: ${value}`); // NaN
  }
}

function test2() {
  let value = 500;

  console.log(`Value in test2: ${value}`); // 500

  test1(); // test value
}

function wrapper() {
  let value = null;
  console.log(`Value in wrapper: ${value}`); // null

  function test3() {
    debugger;
    console.log(`Value in test3: ${value}`); // null, value знаходится у замиканні
  }

  test3();
}

/*
counter(); -> 1
counter(); -> 2
counter(); -> 3
*/
// let i = 0;

// function counter () {
//   i++;
//   return i;
// }

// function createCounter() {
//   let i = 0;

//   const increment = function () {
//     return ++i;
//   }

//   return increment;
// }

// лічільники будуть різні
// const increment1 = createCounter();
// const increment2 = createCounter();


function createCounter() {
  let i = 0;

  const increment = function () {
    return ++i;
  }

  const decrement = function () {
    return --i;
  }

  return {
    increment,
    decrement
  }
}

const obj = createCounter();
