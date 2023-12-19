/*
  Map - карта, словник, асоціативний масив
*/

const map1 = new Map();

// додавання значень до мапи
map1.set('test', [1,23,4,5]);
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
  console.log(value);
  console.log(key);
  console.log(map);
});
