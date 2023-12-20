class Basic {
  test() {
    console.log('basic test');
  }
}

class Other extends Basic {
  test() {
    console.log('basic test');
  }
}

class Advanced extends Basic {
  test() {} // BAD

  get value() {
    return 10;
  }
}

const adv = new Advanced();

const symbolKey = Symbol('key3');

const obj = {
  key1: 'value 1',
  key2: 'value 2',
  [symbolKey]: 'value 3 IMPORTANT',
};

console.log(obj);

for (const key in obj) {
  console.log(key);
  obj[key] = 'something new';
}

console.log(obj);

// Immediatly Invoked Functon Expression
// функція яку ви створили і одразу запустили
// по факту одноразова
(function (data) {
  console.log('function executed');
})(213232);

// (function ($){
//     let counter = 1;
//     $("#increment").click(function () {
//       $(this).text("Number of clicks: " + counter++);
//     })
// })(jQuery)

// O(N * log N)
// сортування злиттям

const arr = [654, 98, 321, -50056, 0, 1, 5];

/*
  загальний алгоритм:
    1 ділимо масив навпіл доти, доки не отримаємо багато (N) масивів розміром 1 або 0

    2 зливаємо в один масив 2 існуючих відсортованих масиви, по черзі порівнюючи елементи в них
*/

// допоміжня функція для 2 кроку
function merge(leftArr, rightArr) {
  // debugger;
  // 1. створимо відсортований масив
  let sortedArr = [];

  // 2. ходимо по масивам leftArr і rightArr поки в них є елементи
  // на кожній ітерації знаходимо найменший елемент з цих масівів і вставляємо його в sortedArr
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      const smallestNum = leftArr.shift();
      sortedArr.push(smallestNum);
    } else {
      const smallestNum = rightArr.shift();
      sortedArr.push(smallestNum);
    }
  }

  // 3 створюємо результуючий масив у який кладемо спочатку все з sortedArr
  // потім все що залишилось у leftArr і rightArr
  const resultArr = [...sortedArr, ...leftArr, ...rightArr];
  return resultArr;
}

function mergeSort(arr = []) {
  // debugger;
  // базовий випадок
  if (arr.length <= 1) return arr;

  let middleIndex = Math.floor (arr.length / 2);

  // розбиваємо масив на 2 підмасиви приблизно навпіл
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  // рекурсивна частина
  const leftSortedArr = mergeSort(leftArr);
  const rightSortedArr = mergeSort(rightArr);

  return merge(leftSortedArr, rightSortedArr);
}
