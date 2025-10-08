let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0; 
let userGuess;

alert('Я загадал число от 1 до 100. Попробуй угадать!');
while (true) {
    userGuess = +prompt('Введите вашу догадку (от 1 до 100):');
    attempts++;
    if (userGuess > secretNumber) {
        alert('Моё число меньше! Попробуйте еще раз.');
    } else if (userGuess < secretNumber) {
        alert('Моё число больше! Попробуйте еще раз.');
    } else {
        break;
    }
}
    console.log(`Поздравляю! Вы угадали число ${secretNumber}`);
    console.log(`Количество попыток: ${attempts}`);