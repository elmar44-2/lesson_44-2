console.log("lesson 5")

function test() {
}

console.log(typeof test);

let $counter = document.getElementById("counter");
// $counter.innerText = "hello";
// let textStyles = {
//     color: "orenge",
//     border: "15px",
//     padding: "15px 45px",
//     marginBottom: "20px",
// };
//
// Object.assign($counter.style, textStyles);

// $counter.style.color = "orange";
// $counter.style.border = "15px dashed red";
// $counter.style.padding = "15px 45px";
// $counter.style.marginBottom = "20px";


let $decreaseButton = document.querySelector("#decrease");
let $resetButton = document.querySelector(".buttons #reset");
let $increaseButton = document.querySelector(".buttons button:nth-child(3)");


function increaseCounter() {
    let counter = Number($counter.innerText);
    counter++;
    $counter.innerText = counter;
    setCounterColor();
}

$increaseButton.addEventListener("click", increaseCounter);


let resetCounter = function (){
    $counter.innerText = 0;
    setCounterColor();
}
$resetButton.addEventListener("click", resetCounter);


$decreaseButton.onclick = function () {
    let counter = Number($counter.innerText);
    counter--;
    $counter.innerText = counter;
    setCounterColor();
}

function setCounterColor () {
    let counter = $counter.textContent;
    let color;
    if (counter > 0){
        color = "green";
    } else if (counter < 0){
        color = "red";
    } else {
        color = "cyan";
    }
    $counter.style.color = color;
}
