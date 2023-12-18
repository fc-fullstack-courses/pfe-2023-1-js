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
  pop () {
    /*
      Знаходимо останній і передостанній вузол
      зберігаємо в окрімій змінній останній вузол
      передостанньому в next пишемо null
      останньому в prev пишемо null
      записуємо передостанній елемент як новій хвіст
      зменшуємо довжину
      повертаємо збережений видалений вузол
    */

    if(this.length === 0) {
      return undefined;
    }

    
    const deletedNode = this.tail;
    const newLastNode = this.tail.prev;
    
    if(this.length === 1) {
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
}

const list1 = new LinkedList();

list1.push('first');
// list1.push('second');
// list1.push('last');

