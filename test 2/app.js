const extractNumbers = (str) => {
    return str.match(/\d+/g).map(Number);
}
console.log(extractNumbers("a1fg5hj6"));
// 2
const fibonacci = (n, a = 0, b = 1) => {
    if (a > 144) return;
    console.log(a);
    setTimeout(() => fibonacci(n - 1, b, a + b), 1000);
};
fibonacci(144);
// 3
const fetchProductTitles = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const products = await response.json();
        products.forEach(product => {
            console.log(product.title);
        });
    } catch (error) {
        console.error('Ошибка при запросе данных:', error);
    }
};
fetchProductTitles();
// 4
const container = document.querySelector('div');

container.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'button') {
        const color = event.target.textContent.toLowerCase();
        document.body.style.backgroundColor = color;
    }
});
// 5
function toggleBlock() {
    const box = document.getElementById('box');
    const currentDisplay = window.getComputedStyle(box).display;

    if (currentDisplay === 'none') {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', toggleBlock);
});
// 6
let count = 0;
const counterElement = document.getElementById('counter');
const intervalId = setInterval(function() {
    counterElement.textContent = count;
    if (count === 100) {
        clearInterval(intervalId);
    }
}, 1);
// 7
const mockData = {
    name: "John Doe",
    age: 30,
    job: "Developer",
    hobbies: ["coding", "reading", "gaming"]
};
async function fetchData() {
    try {
        const response = new Response(JSON.stringify(mockData), {status: 200, statusText: "OK"});
        const data = await response.json();
        console.log("Received data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', fetchData);