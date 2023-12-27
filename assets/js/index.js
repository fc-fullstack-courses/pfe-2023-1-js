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

  let middleIndex = Math.floor(arr.length / 2);

  // розбиваємо масив на 2 підмасиви приблизно навпіл
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  // рекурсивна частина
  const leftSortedArr = mergeSort(leftArr);
  const rightSortedArr = mergeSort(rightArr);

  return merge(leftSortedArr, rightSortedArr);
}

// for (const key of Object.entries(obj)) {
// }

// const map1 = new Map([
//   ['key1', { test: true }],
//   ['key2', 'testwdsasdsafd'],
//   ['key3', { ajdnsja: null }],
// ]);

// map1

// const obj232 = {
//   test: null
// }

const btn = document.querySelector('#btn');

// btn.addEventListener('click', (e) => {
//   console.log('clicked');
// });

// const clickEvent = new MouseEvent('click');
// btn.dispatchEvent(clickEvent);

const form = document.getElementById('form');
const section = document.getElementById('section');

function targetDifferenceHandler (e) {
  console.log('------------------------------');
  console.log('target is:');
  console.log(e.target);
  console.log('==============================');
  console.log('currentTarget is:');
  console.log(e.currentTarget);
  console.log('------------------------------');
}

btn.addEventListener('click', targetDifferenceHandler);
form.addEventListener('click', targetDifferenceHandler);
section.addEventListener('click', targetDifferenceHandler);

// btn.addEventListener('click', targetDifferenceHandler);
btn.addEventListener('click', (e) => {
  e.stopPropagation();
});

btn.addEventListener('click', (e) => {
  // e.stopImmediatePropagation();
});

btn.addEventListener('click', (e) => {
  console.log('other btn method');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

btn.setAttribute('title', 'title set with setAttribute');

const title = btn.getAttribute('title');

const attrNode = document.createAttribute('style');
attrNode.value = 'border-radius: 5px; padding: 15px 20px; border: 1px solid black;';

btn.setAttributeNode(attrNode);

const titleNode = btn.getAttributeNode('title');

btn.setAttribute('data-color', 'red');
btn.setAttribute('data-background-color', 'red');
