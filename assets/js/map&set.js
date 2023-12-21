/*
  Map - карта, словник, асоціативний масив
*/

const map1 = new Map();

// додавання значень до мапи
map1.set('test', [1, 23, 4, 5]);
map1.set(123, 'number');
map1.set('123', 'test 1');
map1.set(123, 'something else');
map1.set([10, 3430, 'why'], 'also works');

const arr = [10, 3430, 'why'];
map1.set(arr, 'what about this');
map1.set(arr, 'what about this 123214234423');

// отримання значень
const value1 = map1.get('test');
const value2 = map1.get('adsddfdgfdsa');

// перевірка існування запису
const isInMap1 = map1.has('test'); // true
const isInMap2 = map1.has('adsddfdgfdsa'); // false

// видалення одного запису
map1.delete(arr);

// видалення всього
// map1.clear();

// forEach як масив
map1.forEach(function (value, key, map) {
  // console.log(value);
  // console.log(key);
  // console.log(map);
});

/*
  створимо перекладач 
  функція яка приймає рядок на одній мові і повертає його "переклад" на іншій
*/

const vocabulary = new Map();

vocabulary.set('cat', 'кіт');
vocabulary.set('gray', 'сірий');
vocabulary.set('mouse', 'миша');
vocabulary.set('hunted', 'полював');
vocabulary.set('vase', 'ваза');
vocabulary.set('broken', 'розбитий');
vocabulary.set('but', 'але');
vocabulary.set('pickaxe', 'кірка');
vocabulary.set('with', 'з допомогою');

const testString = 'Cat hunted mouse but broke pickaxe with vase';
const testString2 = 'le Gato huntedo mousedo broke pickaxe with vase';

function translate(str, vocab = vocabulary) {
  const lowerCaseStr = str.toLowerCase();

  const words = lowerCaseStr.split(' ');

  const translatedWords = [];

  for (const word of words) {
    // 1 отримати українську версію
    // 2 покласти її в масив translatedWords
    // 3 якщо української версії не існує то покласти у масив англійську
    if (vocab.has(word)) {
      const translatedWord = vocab.get(word);
      translatedWords.push(translatedWord);
    } else {
      translatedWords.push(word);
    }
  }

  const translatedString = translatedWords.join(' ');

  return translatedString;
}

const translate2 = (str, vocab = vocabulary) =>
  str
    .toLowerCase()
    .split(' ')
    .map((word) => (vocab.has(word) ? vocab.get(word) : word))
    .join(' ');

/*
  ви маєте рядок з текстом
  створити мапу яка буде містити дані про те скільки у рядку яких символів

  'Test string' t - 2 рази, T - 1

  * ви маєте ігнорувати символи які не є буквами (коми, пробіли ...)

*/

const testStr = 'test string';

function createLettersMap(str, ignoredLetters = [' ', ',', '!', '?', '.']) {
  const lettersMap = new Map();

  for (const letter of str) {
    if (!ignoredLetters.includes(letter)) {
      if (lettersMap.has(letter)) {
        lettersMap.set(letter, lettersMap.get(letter) + 1);
      } else {
        lettersMap.set(letter, 1);
      }
    }
  }

  return lettersMap;
}

// Set - множина
// колекція, яка тримає в середені себе унікальні дані

const set = new Set();

// додавання
set.add(1);

set.add('asdsadsa');
set.add(null);
set.add(1);

set.add({});
set.add({});

// перевірка наявності
const hasSet1 = set.has(1); // true
const hasSet0 = set.has(0); // false

// видалення одного значення
set.delete(null);

// видалити всі значення
set.clear();

// створення непустого сету
const categories = new Set([
  'food',
  'phones',
  'tablets',
  'notebooks',
  'books',
  'food',
]);

const uniqueCategories = [...categories];

/*
  створити 2 масиви з іменами, але в обох масивах хоча б одне ім'я має повторюватися
  за допомогою сету отримати масив з усіма унікальними іменами
*/

const names1 = ['John', 'Jane', 'Taras', 'Test', 'name'];
const names2 = ['Alex', 'Petro', 'Pavlo', 'Test', 'John', 'Null'];

const namesSet = new Set([...names1, ...names2]);
const uniqueNames = [...namesSet];

const uniqueNames2 = [...new Set([...names1, ...names2])];

// for (const name of namesSet) {
//   if(name === 'Alex') {
//     alert('Alex in set')
//   }
// }

namesSet.forEach((elem, index, set) => {
  // console.log(`elem is ${elem}`);
  // console.log(`index is ${index}`); // === elem
  // console.log(`set is ${set}`);
});

// дає ітератор,якій містить всі ключи мапи
// map1.keys()
for (const key of map1.keys()) {
  // console.log(key);
}

// дає ітератор,якій містить всі значення мапи
// map1.values()
for (const value of map1.values()) {
  // console.log(value);
}

// map1.entries() -
for (const entry of map1.entries()) {
  // console.log(entry); // приклад tuple (кортеж) - масив з чітко визначиним роіміром 
  // // і чітко визначиним роіменням даних у них
  // const key = entry[0];
  // const value = entry[1];
}

// map1 === map1.entries()
for (const entry of map1) {
  console.log(entry);
}

// заповнена мапа

const notEmptyMap = new Map([
  ['key1', 'value1'], // кортежи пар ключ - значення
  ['key2', 'value2'],
  ['key3', 'value3'],
]);

const map2 = new Map([...notEmptyMap, ['my 1', true]]);

// у сетів ключі замінюються значеннями
for (const key of namesSet.keys()) {
  console.log(key);
}

for(const entry of namesSet.entries()) {
  console.log(entry);
}
