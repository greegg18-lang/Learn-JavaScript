

// Обязательная часть выполнения заданий
//Уровень: Легкий

//1. Найти сумму всех элементов массива
//Без метода:
//- Найти сумму всех элементов в массиве let numbers = [1, 2, 3, 4, 5];

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum); 


//С методом (reduce):
//- Найти сумму всех элементов в массиве let numbers = [1, 2, 3, 4, 5];

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(accumulator , current) {
    return accumulator  + current;
}, 0);

console.log(sum);

// 2. Найти максимальный элемент в массиве
// Без метода:
// - Найти максимальный элемент в массиве let numbers = [3, 7, 2, 9, 5];

let numbers = [3, 7, 2, 9, 5];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max);

// С методом (Math.max + spread): (читаем что такое spread оно позволить в max(3, 7, 2, 9, 5) распаковать массив в таком в виде(в нужно в виде для max(3, 7, 2, 9, 5)))
// - Найти максимальный элемент в массиве let numbers = [3, 7, 2, 9, 5];

let numbers = [3, 7, 2, 9, 5];
let max = Math.max(...numbers);

console.log(max);

// 3. Проверить, есть ли элемент в массиве

// Без метода: 
// - Заводим 2 переменные let fruits = ['apple', 'banana', 'orange']; и  let search = 'banana';

// - Если элемент в массиве существует, выводим в консоль текст "Найден элемент", в противном случае " Элемент не найден".

let fruits = ['apple', 'banana', 'orange'];
let search = 'banana';
let found = false;

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === search) {
        found = true;
        break;
    }
}

if (found) {
    console.log("Найден элемент");
} else {
    console.log("Элемент не найден");
}




// С методом (includes):

// - Заводим 2 переменные let fruits = ['apple', 'banana', 'orange']; и let search = 'banana';

// - Если элемент в массиве существует, выводим в консоль текст "Найден элемент", в противном случае " Элемент не найден". 

let fruits = ['apple', 'banana', 'orange'];
let search = 'banana';

if (fruits.includes(search)) {
    console.log("Найден элемент");
} else {
    console.log("Элемент не найден");
}

// 4. Перевернуть массив

// Без метода: 
// - Дан массив let arr = [1, 2, 3, 4, 5]; его необходимо перевернуть [5, 4, 3, 2, 1], перезаписав в новый массив

let arr = [1, 2, 3, 4, 5];
let reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}

console.log(reversedArr);

// С методом (reverse):

// - Дан массив let arr = [1, 2, 3, 4, 5]; его необходимо перевернуть [5, 4, 3, 2, 1], перезаписав в новый массив

let arr = [1, 2, 3, 4, 5];
let reversedArr = arr.slice().reverse();

console.log(reversedArr); 

//Уровень: Средний

//1. Посчитать количество определенного элемента в массиве
//Без метода:
//- Дан массив let numbers = [1, 2, 3, 2, 4, 2, 5]; необходимо подсчитать какое количество элементов двойки(2) в массиве

let numbers = [1, 2, 3, 2, 4, 2, 5];
let target = 2;
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        count++; 
    }
}
console.log(`Количество двоек в массиве: ${count}`);



//С методом (filter + length):
//- Дан массив let numbers = [1, 2, 3, 2, 4, 2, 5]; необходимо подсчитать какое количество элементов двойки(2) в массиве

let numbers = [1, 2, 3, 2, 4, 2, 5];
let target = 2;
let count = numbers.filter(num => num === target).length;

console.log(`Количество двоек в массиве: ${count}`);


//2. Найти среднее значение элементов массива
//Без метода:
//- Дан массив let arr = [10, 20, 30, 40]; необходимо получить его среднеарифметическое  значение;

let arr = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
let average = sum / arr.length;
console.log(`Среднее значение: ${average}`);


//С методом (reduce):
//- Дан массив let arr = [10, 20, 30, 40]; необходимо получить его среднеарифметическое значение;

let arr = [10, 20, 30, 40];
let average = arr.reduce((sum, current) => sum + current, 0) / arr.length;

console.log(`Среднее значение: ${average}`);


//3. Отфильтровать четные числа
//Без метода:
//- Дан массив let arr = [1, 2, 3, 4, 5, 6]; необходимо отфильтровать его в новый массив только с четными числами.

let arr = [1, 2, 3, 4, 5, 6];
let evenNumbers = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
    }
}

console.log(evenNumbers);

//С методом (filter):
//- Дан массив let arr = [1, 2, 3, 4, 5, 6]; необходимо отфильтровать его в новый массив только с четными числами.

let arr = [1, 2, 3, 4, 5, 6];
let evenNumbers = arr.filter(num => num % 2 === 0);

console.log(evenNumbers); 

//4. Удвоить каждый элемент массива
//Без метода:
//- Дан массив let arr = [1, 2, 3]; необходимо создать новый массив и добавить туда текущий массив с удвоенными данными.

let arr = [1, 2, 3];
let doubledArr = [];

for (let i = 0; i < arr.length; i++) {
    doubledArr.push(arr[i] * 2);
}

console.log(doubledArr);


//С методом (map):
//- Дан массив let arr = [1, 2, 3]; необходимо создать новый массив и добавить туда текущий массив с удвоенными данными.

let arr = [1, 2, 3];
let doubledArr = arr.map(num => num * 2);

console.log(doubledArr);