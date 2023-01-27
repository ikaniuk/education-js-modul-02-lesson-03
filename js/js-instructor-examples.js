// ===============================================
// -----------------Задачи Александра Репеты-------------------------------------

//  * 1) Посчитать общую сумму покупок в корзине


// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let sum = 0;

// console.log(cart);

// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);
//     sum += cart[i]
    
// }

// console.log('Cуммa покупок в корзине = ', sum);


// let total = 0;

// for (const value of cart) {
//     console.log(value);
//     total += value;
// }

// console.log('Cуммa покупок в корзине = ', total);


// 2) Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14, 54, 28, 105, 70, 92, 17, 120, 12,];
// let total = 0;

// for (const number of numbers) {
    
//     if (number % 2 !== 0) {
//         console.log(number);
//         continue;
//     }

//     console.log('Четное число', number);
    
//     total += number;
// }

// console.log('Сумма всех чётных чисел в массиве =', total);


// 3) Напиши скрипт поиска логина
//  * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
//  * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
//  *
//  * - Сначала через for
//  * - Потом через for...of
//  * - Логика break
//  * - Метод includes() с тернарным оператором

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';


// // -------------Цикл for-------------------------------

// let message = `Пользователь ${loginToFind} не найден.`;
// for (let i = 0; i < logins.length; i += 1){
//     const login = logins[i];

//     console.log('Login: ', login);
   
//     if (loginToFind === login) {
//         message = `Пользователь ${loginToFind}  найден.`;
//         break;
//     }
// }

// console.log(message);


// // -----------------------Цикл for...of------------------------

// let message = `Пользователь ${loginToFind} не найден.`;
// for (const login of logins) {
//     console.log('Login: ', login);

//     if (loginToFind === login) {
//         message = `Пользователь ${loginToFind}  найден.`;
//         break;
//     }
// }
// console.log(message);


// // ------------------- Метод includes() с тернарным оператором ---------------------------

// const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind}  найден.` : `Пользователь ${loginToFind}  не найден.`;

// console.log(message);


// 4) Напиши скрипт поиска самого маленького числа в массиве,
// при условии что числа уникальные (не повторяются).

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// console.log(numbers);

// for (const number of numbers) {
//     // console.log(number);
//     // console.log(`${number} < ${smallestNumber}`, number < smallestNumber);
     
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log('Самое маленькое число:', smallestNumber);


/*
 * 5) Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */



// --------------------- join ------------------------------

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// console.table(friends);

// const string = friends.join(', ');

// console.log(string);


// -------------------- for ---------------------------------------

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//     console.log(friend);
//     string += friend + ', ';
// }

// console.log(string);



/*
 * 6) Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */


// const string = 'qWeRTzxCv';
// console.log(string);
// let invertedString = '';

// const letters = string.split('');
// console.log(letters);

// for (const letter of letters) {
//     // console.log(letter);

    
//     // // -------------------- if else-----------------------

//     // if (letter === letter.toUpperCase()) {
//     //     console.log(`${letter} Эта буква в верхнем регистре`);
//     //     invertedString += letter.toLowerCase();
//     // } else {
//     //     console.log(`${letter} Эта буква в нижнем регистре`)
//     //     invertedString += letter.toUpperCase();
//     // }


//     // // ---------------------Тернарный оператор---------------------------

//     // const isEqual = letter === letter.toLowerCase();

//     // invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log(invertedString);


// //
// /*
//  * 7) Напиши скрипт который считает сумму элементов двух массивов.
//  */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const newArray = array1.concat(array2);
// // console.log(array1);
// // console.log(array2);
// // console.log(newArray);

// for (const number of newArray) {
//     // console.log(number);

//     total += number;
// }

// console.log('Сумма элементов двух массивов =', total);


// ====================================================================

// Модуль 2. Занятие 3. Массивы
// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива.
// Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggae» в начало массива.


// const genres = ['Jazz', 'Blues'];
// console.log(genres);

// genres.push('Рок-н-ролл');
// console.log(genres);
// console.log(genres[0]);
// const lastElemt = genres.length - 1;
// console.log(genres[lastElemt]);

// const firstElement = genres.shift();
// console.log(firstElement);
// console.log(genres);
// genres.unshift('Country', 'Reggae');
// console.log(genres);


// ===========================================================================
// Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых
// хранятся в переменной values в виде строки.Значения гарантированно разделены пробелом.

// const values = '8 11';
// const sides = values.split(' ');
// console.log(sides);
// console.log('S = a * b');
// const a = sides[0];
// const b = sides[1];

// const area = a * b;
// console.log(area);


// // =========================================================================================
// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for.Для каждого элемента массива
// выведи в консоль строку в формате номер_элемента: значение_элемента.
// Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1){
    
//    console.log(`${i + 1}: ${fruits[i]}`);
   
// }


// ==============================================
// Example 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. 
// В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие.Количество имен и 
// телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// // console.log(namesArr);
// // console.log(phonesArr);

// for (let i = 0; i < namesArr.length; i += 1){
//     // console.log(`${i + 1}: ${namesArr[i]}`);
//     // console.log(`${i + 1}: ${phonesArr[i]}`);
//     console.log(namesArr[i], phonesArr[i]);
// } 