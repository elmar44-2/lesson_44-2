let geeksStudent = {
  name: "Elmar",
  surname: "Alybekov",
  telegramUserName: "@djdividi",
  age: "18",
  phone: "+996704513539",
  course: null,
};

let phoneBook = {
  Mom: "555555555",
  Papa: "77777777",
  Sister: "888888888",
  Boss: "9999999999",
};

console.log("Call Mom...", phoneBook.Mom);
console.log("Call Papa...", phoneBook["Papa"]);


let points = [10, 9, 8, 7, 8, 10, 0, 0];
console.log(points.length);
console.log("1st HW", points[0]);
let total = 0;
// total += points[0];
// total += points[1];
// total += points[2];
// total += points[3];

// loops
for (let point of points){
  // code
  total += point;
}

console.log("Total:", total);
let operations = [25000, -4000, -500, -3000, -7000, -700, -1000];

let incomes = 0;
let expenses = 0;

for (let oper of operations){
  if(oper > 0){
    incomes += oper;
  } else {
    expenses += Math.abs(oper);
  }
}

console.log("Доходов:", incomes, "Расходов", expenses)
