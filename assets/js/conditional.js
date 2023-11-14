// if ... else

let expression = 5 < 0;

if (expression) {
  //
  console.log("щось");
  console.log("щось2");
}

let expression1 = false;

if (expression1) console.log("щось");

console.log("test");

let userName = "";

if (userName) {
  // коли ім'я приводиться до істини
  console.log("Hello " + userName);
} else {
  // у всіх інших випадках
  console.log("Hello Guest");
}

let directorUserName = "Bohdan";
let managerName = "Inna";
let userName2 = "Kyrylo";

debugger;

if (userName2 === directorUserName) {

  // вітаємось шановливо якщо ім'я співпадає з директором
  console.log("Good day " + userName2);
} else if (userName2 === managerName) {
  // особливо вітаємося з менеджером
  console.log("Greetings " + userName2);
} else if (userName2) {
  // коли ім'я приводиться до істини
  console.log("Hello " + userName2);
} else {
  // у всіх інших випадках
  console.log("Hello Guest");
}

// if (!userName) {
//   console.log("Hello Guest");
// }
