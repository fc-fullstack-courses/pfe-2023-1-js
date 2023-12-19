class ListNode {
  #data;
  #prev;
  #next;
  constructor(data) {
    this.data = data;

    // посилання на інші вузли null || ListNode
    this.prev = null;
    this.next = null;
  }

  get data() {
    return this.#data;
  }

  set data(newData) {
    this.#data = newData;
  }

  get prev() {
    return this.#prev;
  }

  get next() {
    return this.#next;
  }

  set prev(node) {
    if (!(node === null || ListNode.isListNode(node))) {
      throw new TypeError('Invalid node type');
    }

    this.#prev = node;
  }

  set next(node) {
    if (!(node === null || ListNode.isListNode(node))) {
      throw new TypeError('Invalid node type');
    }

    this.#next = node;
  }

  static isListNode(node) {
    return node instanceof ListNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // перший вузол в списку
    this.tail = null; // останній вузол в списку
    this.length = 0;
  }

  // вставка даних у кінець списку
  push(data) {
    /*
      1. створюємо новий вузол с даними
      2. якщо список пустий то встановлюємо цей вузол як хвіст і голову одначсно
        якщо він не пустий:
          у старорого хвоста встановлюємо новий вузол у поле next
          у нового вузла записуємо попередній хвіст у поле prev
          робимо новий вузол хвостом списку
      збільшуємо довжину списку
    */
    const newNode = new ListNode(data);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this.length;
  }

  // видалення даних з кінця списку
  pop() {
    /*
      Знаходимо останній і передостанній вузол
      зберігаємо в окрімій змінній останній вузол
      передостанньому в next пишемо null
      останньому в prev пишемо null
      записуємо передостанній елемент як новій хвіст
      зменшуємо довжину
      повертаємо збережений видалений вузол
    */

    if (this.length === 0) {
      return undefined;
    }

    const deletedNode = this.tail;
    const newLastNode = this.tail.prev;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      newLastNode.next = null;
      this.tail.prev = null;
      this.tail = newLastNode;
    }

    this.length--;

    return deletedNode;
  }

  // вставка даних у початок
  unshift(data) {
    /*
      створюємо вузол нового елементу
      якщо список пустий то встановлюємо головою і хвостом списку наш вузол
      якщо не пустий то:
        встановлюємо новому елементу голову списка як наступний елемент (next)
        голові встановлюємо новий вузол попереднім значенням (prev)
        перезаписуємо голову в списку на новий вузол
			збільшужмо довжину списку
			повертаємо довжину списку
    */
    const newNode = new ListNode(data);

    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    return ++this.length;
  }

  // видалення першого елементу списку
  shift() {
    /*
			якщо список пустий то нічого не робимо
			якщо він не пустий то:
        знаходимо перший і наступний після нього елементи
        видаляємо у другого елементу значення попереднього (prev) елементу
        змінюємо голову списка на другий елемент
        зменшуємо довжину
			повертаємо видалений елемент
    */
    if(this.length === 0) {
      return undefined;
    }

    const firstNode = this.head;
    const newFirstNode = this.head.next;

    newFirstNode.prev = null;
    this.head = newFirstNode;
    this.length--;

    return firstNode;
  }
}

const list1 = new LinkedList();

list1.push('first');
// list1.push('second');
// list1.push('last');

// Symbol - унікальний незмінний тип даних. Використовується в об'єктах, не можна створювати через new

const sym1 = Symbol('cat');
const sym2 = Symbol('cat');

// const objSymb = new Symbol(); // ERROR

console.log(sym1 === sym2); // false
console.log(sym1 === sym1); // true

const obj = {
  test: 'property 1',
  text: 'secret'
};

const symbolKey = Symbol('key in object');

// obj.symbolKey = 'prop 2';

// вставка символа ключаем після створення об'єкта
obj[symbolKey] = 'prop 2';

const obj2 = {
  [symbolKey]: 'prop2',
  [Symbol('find me if you can')]: 'secret'
}


console.log(obj[symbolKey]);

// Object.getOwnPropertySymbols приймає об'єкт з символами
// повератє масив елементами якого є ці символи
const symbolsInObj2 = Object.getOwnPropertySymbols(obj2);


// iterator

// iterables - об'єкти / діні у яких є ітератор
/*
  є у:
    массивів
    рядок
    Map (не метод масиву!)
    Set 
    arguments
    ...
*/
const arr = [50,5,false];

// отримаємо екземпляр ітреатора масиву
// це об'єкт з методом next який повертає об'єкт
// з 2 властивостями
// done - чи закінчився обхід
// value - поточний елемент
const iter = arr[Symbol.iterator]();
const iter2 = arr[Symbol.iterator]();
