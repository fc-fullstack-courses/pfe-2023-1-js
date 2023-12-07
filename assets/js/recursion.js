function countdown(number) {
  debugger;
  console.log(number);

  if (number > 1) {
    // рекурсивний випадок
    countdown(number - 1);
  }

  return undefined; // базовий випадок
}

/*
5
4
3
2
1
*/

const logRange = (min, max) => {
  if (min > max) {
    throw new RangeError('Min must not be bigger than max');
  }

  console.log(min);

  if (min < max) {
    logRange(min + 1, max);
  }
};

// const loopLogRange = (min, max) => {
//   if (min > max) {
//     throw new RangeError('Min must not be bigger than max');
//   }

//   for(let i = min; i <= max; i++) {
//     console.log(i);
//   }
// }

/*
від 5 до 10
5
6
7
8
9
10
*/

const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
    right: {
      value: 5,
      left: {
        value: 7,
      },
      right: {
        value: 8,
      },
    },
  },
  right: {
    value: 3,
    right: {
      value: 6,
      left: {
        value: 9,
      },
    },
  },
};

function reduceTree(treeObj) {
  // debugger;
  let total = treeObj.value;

  if (treeObj.left) {
    total += reduceTree(treeObj.left);
  }

  if (treeObj.right) {
    total += reduceTree(treeObj.right);
  }

  return total;
}

/*
  зробити рекурсивну функцію зведення числа у ступінь
    toPower(2,3) -> 8;
  Не використовувати цикли, **, Math.pow();
*/

function toPower(number, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp === 1) {
    return number;
  }

  if (exp > 1) {
    return number * toPower(number, exp - 1);
  } 

  if(exp < 0) {
    return 1 / (number * toPower(number, Math.abs(exp) - 1 ));
  }
}

/*
  зробіть рекурсивну функцію знаходження факрторіалу числа
  !4 = 1 * 2 * 3 * 4 = 24
*/
