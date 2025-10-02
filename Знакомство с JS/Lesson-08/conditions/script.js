// 1. Проверка возраста
let age = prompt('Введите Ваш возраст', '');

if (age < 18) {
    alert('Доступ запрещен')
} else if (age => 18) {
    alert('Доступ разрешен') 
};

// 2.Чётное или нечётное
let number  = prompt('Введите любое число', '');
let result = number % 2 === 0 ? "четное" : "нечетное";
console.log(`Число ${result}`);

// 3. Калькулятор
let number1 = Number(prompt('Введите любое число', ''));
let number2 = Number(prompt('Введите любое число', ''));
let action = prompt('Выберете действие + - * /', '');
let resultact; 

switch (action) {
    case '+':
        resultact = number1 + number2;
        break;
    case '-':
        resultact = number1 - number2;
        break;
    case '*':
        resultact = number1 * number2;
        break;
    case '/':
        resultact = number1 / number2;1
        break;    
};
alert (`${number1} ${action} ${number2} = ${resultact}`); 

// 4. Проверка длины строки
let string = prompt('Введите любую фразу', '');
let resultstring;

if (string.length > 10) {
    resultstring = string.slice(0, 5) + '*'.repeat(string.length - 5);
} else {
    resultstring = string.toLocaleUpperCase();
}

console.log(resultstring); 

// 5. Определение времени суток
let hour = prompt('Который сейчас ЧАС (от 0 до 23)', '');
let time

if (hour >= 0 && hour <= 5) {
    time = "Ночь";
} else if (hour >= 6 && hour <= 1) {
    time = "Утро";
} else if (hour >= 12 && hour <= 17) {
    time = "День18";
} else if (hour >= 18 && hour <= 23) {
    time = "Вечер";
} 

console.log(time); 

// 6. Проверка e-mail
let email = prompt('Введите Ваш EMAIL', '');

if (email.includes('@') && email.includes('.')) {
    alert("Верный формат");
} else {
    alert("Ошибка!")
}

// 7. Палиндром (базовый)
let word = prompt('Введите любое слово', '');
const isPalindrome = word === word.split('').reverse().join('');
console.log(isPalindrome);