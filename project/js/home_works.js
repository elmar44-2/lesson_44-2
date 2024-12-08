document.getElementById("gmail_button").addEventListener("click", function() {
    const emailInput = document.getElementById("gmail_input").value
    const resultDisplay = document.getElementById("gmail_result")

    if (validateGmail(emailInput)) {
        resultDisplay.textContent = "Good:)"
        resultDisplay.style.color = "green"
    } else {
        resultDisplay.textContent = "Error"
        resultDisplay.style.color = "red"
    }
})

function validateGmail(email) {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
    return gmailRegex.test(email)
}

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

const parentSize = parentBlock.offsetWidth
const childSize = childBlock.offsetWidth

let currentCorner = 0
const moveTime = 2000

const corners = [
    { top: 0, left: 0 },
    { top: 0, left: parentSize - childSize },
    { top: parentSize - childBlock.offsetHeight, left: parentSize - childSize },
    { top: parentSize - childBlock.offsetHeight, left: 0 }
]

const moveBlock = () => {
    const corner = corners[currentCorner]
    childBlock.style.transition = `top ${moveTime / 1000}s, left ${moveTime / 1000}s`
    childBlock.style.top = `${corner.top}px`
    childBlock.style.left = `${corner.left}px`

    currentCorner = (currentCorner + 1) % corners.length

    setTimeout(moveBlock, moveTime)
}

moveBlock()

























let count = 0;
let intervalId = null;

const display = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateDisplay() {
    display.textContent = count;
}

startButton.addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            count++;
            updateDisplay();
        }, 1000);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    count = 0;
    updateDisplay();
});