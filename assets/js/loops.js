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

// let count2 = 0;

// while (true) {
//   count2++;
//   console.log('Iteration ' + count2);
//   if (count2 > 10) {
//     debugger;
//     // дострокове завершення циклу
//     break;
//   }
//   console.log('test');
// }

/*
  зробити цикл, під час виконання якого у консоль будуть виводитися цілі парні числа до 10
  0,2,4,6,8,10
*/

let counter = 0;

// while(counter <= 10) {
//   console.log('iteration');
//   if(counter % 2 === 0) console.log(counter);
//   counter++;
// }
// debugger;

while(counter <= 10) {
  if(counter % 2 !== 0) {
    counter++;
    // дострокове завершення поточної ітерації (кола)
    continue;
  }

  console.log(counter);

  counter++;
}

// while(counter <= 10) {
//   console.log('iteration');
//   console.log(counter);
//   counter += 2;
// }