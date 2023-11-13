// Функції

// alert;
// console.log;

// дужки - виклик функції
// вхідні дані для функції переадються у дужки через кому
// вони називаються аргументами функції
// функція може мати будь-яку кількість аргументів
// alert('Hello there', 'sds', 'asd');

// функції після свого виконання повертають результат, 
// який можна зберігти у змінній або використати іншим чином
// let userName = prompt('Введіть ваше ім`я');

// alert( userName );

// Отримати від користувача його ім'я
// Привитатися з ним по імені, наприклад: Привіт, Кирило

// let userName = prompt('Введіть ваше ім`я');

// let greetingText = 'Привіт, ' + userName;

// alert(greetingText);


// Отримати від користувача 2 числа
// вивести на екран їх суму

// v1
// let num1 = prompt('Введіть перше число');
// let num2 = prompt('Введіть друге число');

// alert(+num1 + +num2);


// v2
// let input1 = prompt('Введіть перше число');
// let input2 = prompt('Введіть друге число');

// let num1 = +input1;
// let num2 = +input2;

// alert(num1 + num2);

// v3
// let num1 = +prompt('Введіть перше число');
// let num2 = +prompt('Введіть друге число');

// alert(num1 + num2);

// fool protection version
let num1 = +prompt('Введіть перше число');
let num2 = +prompt('Введіть друге число');

let result = num1 + num2;

if(result === result) {
  alert(result);
}
