
class Basic {
  test () {
    console.log('basic test');
  }
}

class Other extends Basic {
  test () {
    console.log('basic test');
  }
}

class Advanced extends Basic {
  test() {} // BAD

  get value () {
    return 10;
  }
}

const adv = new Advanced();

const symbolKey = Symbol('key3');

const obj = {
  key1: 'value 1',
  key2: 'value 2',
  [symbolKey]: 'value 3 IMPORTANT',
}

console.log(obj);

for(const key in obj) {
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



