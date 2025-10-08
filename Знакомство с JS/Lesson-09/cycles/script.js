// 1. Вывод чисел от 1 до N
// - Попросите пользователя ввести любое число N через prompt и выведите все числа от 1 до N в консоль.

let number1 = +prompt('Введите любое число', '');
for (let i = 1; i <= number1; i++) {
    console.log(i)
}

// 2. Сумма чисел от 1 до N
// - Запросите число N и вычислите сумму всех чисел от 1 до N и результат выведите в консоль.

let N = +prompt('Введите любое число', '');
let sum = 0;
for (let i = 1; i <= N; i++) {
    sum = sum + i;
    console.log(`${sum}`)
}

//3. Четные числа
// Выведите все четные числа от 0 до 100 в консоль.

for (let i = 2; i <= 100; i +=2){
    if (i % 2 === 0)
        console.log(i);
}

//4. До первого четного числа
//- Запрашивайте числа через prompt, пока не будет введенное число пользователем не будет четным.

let number4 = +prompt('Введите любое число');
while (number4 % 2 !== 0) {
    number4 = +prompt('Это не четное число. Введите еще раз');
}
alert(`Поздравляю вы ввели четное число ${number4}`);

//5. Среднее арифметическое
//- Запрашивайте числа у пользователя пока он не введет слово "стоп", затем выведите их среднее арифметическое.

let sum5 = 0;
let count5 = 0; // Счетчик введенных чисел
while (true) {
    let input = prompt('Введите число (для остановки введите "стоп")');
    if (input === 'стоп') break;
    let number5 = +input;
        sum5 += number5;
        count5++;
}
    let average = sum5 / count5;
    alert(`Среднее арифметическое: ${average}`);

//6. Максимальное число
//- Запрашивайте числа у пользователя пока он не введет слово "стоп", затем выведите максимальное число из введенных.

let maxnumber = null;
while (true) {
    input6 = prompt('Введите число (для остановки введите "стоп"');
    if (input6 === 'стоп') break;
    let number6 = +input6;

    if (number6 === number6) {
        if (maxnumber === null || number6 > maxnumber) {
            maxnumber = number6;
        }
    }
}
alert(`Максимальное из введенных чисел: ${maxnumber}`);

//7. Перевернутая строка
//- Запросите строку и выведите ее в обратном порядке (например, "hello" → "olleh"). Методы строк не используем

let input7 = prompt('Введите слово для переворота');
let reverseinput7 = '';
for (let i = input7.length - 1; i >= 0; i--) {
    reverseinput7 += input7[i]
}
alert(`Перевернутое слово ${reverseinput7}`)

//8. Подсчет гласных
//- Посчитайте количество гласных букв (a, e, i, o, u) в введенной строке Пользователем, например "Hello world".

let str8 = prompt('Введите фразу для подсчета глассных IN ENGLISH:');
let count8 = 0;
if (str8 !== null) {
    for (let i = 0; i < str8.length; i++) {
        let char8 = str8[i];
        if (char8 === 'a' || char8 === 'e' || char8 === 'i' || char8 === 'o' || char8 === 'u' || char8 === 'A' || char8 === 'E' || char8 === 'I' || char8 === 'O' || char8 === 'U') {
        count8++;
        }
    }
    alert(`Гласных букв: ${count8}`);
}

//9. Замена символов
//-Замените все буквы 'a' в строке на '!' и выведите результат. За пример слова, берите любое где есть бука "A" / 'a'

let inputString = prompt('Введите строку с буквами "a":');
if (inputString !== null) {
    let resultString = '';
    for (let i = 0; i < inputString.length; i++) {
        let currentChar = inputString[i];
        if (currentChar === 'a' || currentChar === 'A') {
            resultString += '!'; 
        } else {
            resultString += currentChar; 
        }
    }
    alert('Результат замены: ' + resultString);
} 
