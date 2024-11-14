function printSpliter() {
    console.log("---------------------------------");
}
console.log("lesson_4");

let students = ["Alina", "Pavel", "Azat"];
// index                 0              1               2

let studentsAsObject = {
    0: "Alina",
    1: "Pavel",
    2: "Azat",
    length: 3
}

console.log("First student:", students[0]);
console.log("I have " + students.length + " students");

console.log(typeof students)
console.log(students)

let carInfo = {
    brand: "BMW",
    model: "X5",
    engine: 5000,
    color: "black",
    allowShadows: true
}

printSpliter();
console.log("My car is " + carInfo.brand + " " + carInfo["model"])


function printSpliter() {
    console.log("-".repeat(15));
}


function getMean(numbers = []) {
    let sum = 0;
    for(let num of numbers){
        sum += num;
    }
    let mean = sum / numbers.length;
    if (isNaN(mean)) return 0;


    return mean;
}



function getFromRange(start, end) {
    let result = [];
    if (end > start) {
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
    }else {
        for (let i = start; i >= end; i--) {
            result.push(i);
        }
    }
    return result;
}



function reversString(text){
    let newText = "";
    for(let i = text.length - 1; i >=0; i--){
    newText += text [i];
    }
    return newText
}