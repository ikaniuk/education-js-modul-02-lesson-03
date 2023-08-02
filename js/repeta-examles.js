/*
 * Посчитать общую сумму покупок в корзине
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1){
//     // console.log(cart[i]);

//     total += cart[i];
// }

// console.log(`Общая сумма покупок = ${total}`);


/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] % 2 !== 0) {
//         continue;
//     }
    
//     total += numbers[i]
// }

// console.log('Сумма всех четных чисел = ', total)

// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         continue;
//     }
//     total += number;
// }

// console.log('Сумма всех четных чисел = ', total)


/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';

// ------------Цикл for-----------------------------------------------
// let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1){
//     if (loginToFind === logins[i]) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
    
// }

// console.log(message);

// -----------------------Цикл for of---------------------------
// let message = `Пользователь ${loginToFind} не найден.`;

// for (const login of logins) {
//     if (loginToFind === login) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
// }

// console.log(message);


// -------------------Тернарный оператор-------------------------
// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     :`Пользователь ${loginToFind} не найден.`

// console.log(message);


/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */
// const numbers = [51, 18, 13, 24, 7, 85, 19];



// -----------for------------------------------
// let smallestNumber = numbers[0]

// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] < smallestNumber) {
//         smallestNumber = numbers[i];
//     }
// }

// console.log('Наименьшее число', smallestNumber)

// ------------For of-------------------------

// let smallestNumber = numbers[0];
// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log('Наименьшее число',smallestNumber);


/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// ----------------------for of-------------------------
// let string = '';

// for (const friend of friends) {
//     string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string);


// const string = friends.join(',');
// console.log(string);


/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     // if (letter === letter.toLowerCase()) {
//     //     invertedString += letter.toUpperCase();
//     // } else {
//     //     invertedString += letter.toLowerCase();
//     // }

//     const isEqual = letter === letter.toLowerCase();

//     invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
    
// }

// console.log(invertedString);


/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// const spliteNormalizedTitle = normalizedTitle.split(' ');
// const slug = spliteNormalizedTitle.join('-');

// console.log(slug);

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);


/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// const numbers = array1.concat(array2);
// let total = 0;

// for (const number of numbers) {
//     total += number;
// }

// console.log(total);;


