// Objects

// приклад акаунта користувача
// BAD
let login1 = 'Admin';
let password1 = '@#4ds45t4!sssd';
let email1 = 'admin@gmail.com';

// приклад об'єкта
let object = {
  // властивості об'єкта
  // властивість складається з ключа (назва властивості)
  // і значення 
  key: 'value',
  key2: 'value2',
  key3: 500,
  // метод - властивість об'єкта, значененя якої убде функцією
  action1 : function () {
    console.log('something');
  }
};

// 
let toyCar = {
  color: 'yellow',
  brand: 'Honda',
  model: 'S2000',
  fuelTank : 30,
  drive: function() {
    alert('car id driving')
  }
}

let me = {
  name: 'Kyrylo',
  height: 1.70,
  speak: function () {
    alert('bla bla bla');
  }
}
