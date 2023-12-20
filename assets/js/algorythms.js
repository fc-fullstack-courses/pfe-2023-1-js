// набір послідовності дій

/*
  вивести в консоль числа від 1 до 10

  створити змінну числа яка дорівнює 1
  зробити цикл який буде поступово збільшувати число до 10
  у тілі циклу показувати поточне значення змінної
*/
// for(let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// швидкість алгоритму вімірюватимемо в операціях (вхідних даних)
/*
  y = x - лінійна функція
  y = x ^ 2 - квадратична функція
  y = log x - логарифмічна
  y = 2 ^ x - експоненціальна
  y = x! - факторіал
*/

// яка з функцій зростає швидше?
/*
  y = x^2 + 200x + 151 - швидша
  y = 2^x + 382 - повільніша

  // x = 10
  100 + 2000 + 151 = 2251
  1024 + 382 = 1106

  x = 1_000_000
  1 * 10^12 + 2 * 10 ^8 + 151
  9.9 * 10^301029 + 382

  x = Infinity
  Infinity ^ 2
  2 ^ Infinity 
*/

/*
  x -> n (вхідні дані)
  y = x  -> O(n)
  y = x^5 -> O(n^5)
  y = log x -> O(log n)

  y = x^2 + x -> O(n^2 + n) -> O(n^2)
*/

// O(n) - лінійна складність

const nums1 = [1, 5, -10, 7, 863];

function linearSearch(arr, value) {
  /*
    пройти по масиву циклом
    порівняти кожен елемент з value
    якщо збігається то повертаємо індекс цього елементу
    якщо в масіви такого елементу не було повертаємо -1
  */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
}

linearSearch(nums1, 5); // 1
linearSearch(nums1, 7); // 3
linearSearch(nums1, 500); // -1

// O(1) - константна складність
const strs1 = ['test', 'text', 'str', 'asdsd'];
// console.log(strs1[2]); // str

// O(n^2) - квадратична складність
function bubbleSort(array) {
  /*
    проходимося по масиву і порівнюємо 2 значення
    якщо 1 значення більше ніж 2 то міняємо їх місяціми у масиві
    повторюємо ці дії поки масив не буде повністю відсортованим (по зростанню)
  */
 // зовнішній цикл запускається n разів
  for (let i = 0; i < array.length; i++) {
    // внутрішній цикл запускається n * n разів
    for (let j = 1; j < array.length; j++) {
      let value1 = array[j - 1];
      let value2 = array[j];

      if (value1 > value2) {
        array[j - 1] = value2;
        array[j] = value1;
      }

      // for(let n = 0 ; n < array.length;n++) {
      //   // ... O(n^3)
      // }
    }
  }

  // for(let i = 0; i < array.length; i++) {
  //  O(n+n) -> O (2n) -> O(n) 
  // }

  return array;
}


bubbleSort([5, 2, 3, 4, 1]);

// O(log n) - логарифмічна складність

const sortedArr = [1,2,5,8,12,20,35,50,125,512];

function binarySearch (arr, value) {
  debugger;
  /*
    знайти початковий, кінцевий та середній індекс ВІДСОРТОВАНОГО масиву
    поки не знайдемо число пробуємо наступне:
      порівнюємо середній елемент масиву з value
        якщо співпадає
        якщо ні то відкидаємо половину масиву і змінюємо початок / кінець і середину
  */
  let start = 0;
  let end = arr.length - 1;

  let middle = Math.round((start + end) / 2);

  while(true) {
    if(arr[middle] === value) {
      return middle;
    }

    if(arr[middle] > value) {
      end = middle;
      middle = Math.floor((start + end) / 2);
    }

    if(arr[middle] < value) {
      start = middle;
      middle = Math.ceil((start + end) / 2);
    }
  }
}

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
