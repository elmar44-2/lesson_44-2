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


const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');


let position = 0;
const parentWidth = parentBlock.offsetWidth;
const childWidth = childBlock.offsetWidth;
const speed = 5;

function moveBlock() {
    if (position + childWidth < parentWidth) {
        position += speed;
        childBlock.style.left = `${position}px`;
        requestAnimationFrame(moveBlock);
    }
}
moveBlock();


