// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// Loops

// let condition = true;

// безкінечний цикл
// while (true) {
//   // тіло циклу
//   alert('Looop is running');
// }

// alert('test');

let count = 0;

// debugger;

while (count < 4) {
  // count = count + 1;
  count++;
  console.log('Iteration');
}

let count2 = 0;

while (true) {
  count2++;
  console.log('Iteration ' + count2);
  if (count2 > 10) {
    debugger;
    // дострокове завершення циклу
    break;
  }
  console.log('test');
}
