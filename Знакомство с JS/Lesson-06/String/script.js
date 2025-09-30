let str1 = ('JavaScript is AWESOME');
console.log(str1 .toUpperCase());

let str2 = ('2024-07-30');
let year = str2.slice(0, 4);
let month = str2.slice(5, 7);
let day = str2.slice(8, 10);
console.log(`Год: "${year}"`);
console.log(`Месяц: "${month}"`); 
console.log(`День: "${day}"`);

let str3 = ('Я люблю JavaScript!. Я люблю это дело');
str3 = str3.replace("JavaScript", "программирование");
str3 = str3.replaceAll("люблю", "обожаю");
console.log(str3);

let str4 =("яблоки,груши,виноград");
str4 = str4. replaceAll(',', " | ");
console.log(str4 .toLocaleUpperCase());

let str5 =("example@mail.com");
console.log(`Содержит символ @ -`, str5.includes("@"));
console.log(`Заканчивается на .com -`, str5.endsWith(".com"));

let str6 =("1234567812345678")
let cardbegin = str6.slice(0, 4);
let cardfinish = str6.slice(-4);
let hidencard = `${cardbegin} **** **** ${cardfinish}`;
console.log(hidencard);

let str7 =("Hello World!")
console.log(`Длина строки: ${str7.length}`);
let firstletter = str7[0];
console.log(`Первый символ: "${firstletter}"`);
let lastletter = str7.at(-1);
console.log(`Последний символ: "${lastletter}"`);
let middleletter = str7.at(6);
console.log(`Средний символ: "${middleletter}"`);