// залишкові параметри
const sumOfAnyNumbers = (num1, num2, ...restNumbers) => {
  let result = num1 + num2;

  // debugger;

  for (let i = 0; i < restNumbers.length; i++) {
    result += restNumbers[i];
  }

  return result;
};

const sumOfAnyNumbers2 = (...restNumbers) => {
  let result = 0;

  // debugger;

  for (let i = 0; i < restNumbers.length; i++) {
    result += restNumbers[i];
  }

  return result;
};

const numbers = [50, 15, 987, 6546, 879, 879, 645];
const numbers2 = [-515, -4564, -5654, -65352, -5645];

const allNumbers = [...numbers, 10, ...numbers2];

// const res1 = sumOfAnyNumbers2(numbers[0], numbers[1], numbers[2], numbers[3],..., numbers[6]);

// spread - оператор (оператор розширення) 
const res2 = sumOfAnyNumbers2(100, 100, ...numbers, ...numbers2);
