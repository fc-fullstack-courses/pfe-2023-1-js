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
