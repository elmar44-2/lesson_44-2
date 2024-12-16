// task 1
const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/;
    return regExp.test(str);
}

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));
console.log(containsOnlyDigits(""));
console.log(containsOnlyDigits(" 123 "));

// task 2
const printEverySecond = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
}

printEverySecond();

// task 3
const count = () => {
    let i = 1; // Начальное значение
    const interval = setInterval(() => {
        console.log(i); // Вывод числа
        if (i === 10) { // Проверка на завершение
            clearInterval(interval); // Остановка интервала
        }
        i++; // Увеличение значения
    }, 1000); // Интервал в 1 секунду
}

count();

// task 4
const block = document.createElement('div');
block.style.width = '150px';
block.style.height = '150px';
block.style.border = '1px solid #000';
block.style.display = 'flex';
block.style.justifyContent = 'center';
block.style.alignItems = 'center';
block.style.cursor = 'pointer';
block.textContent = 'Click me';

document.body.appendChild(block);

block.addEventListener('click', () => {
    if (block.classList.contains('active')) {
        block.classList.remove('active');
        block.style.backgroundColor = '';
    } else {
        block.classList.add('active');
        block.style.backgroundColor = 'lightblue';
    }
});


