// ---------------------Task-01--------------------------------------------------
// Задание:
// Напишите сценарий, который найдет минимальное, максимальное значения массива,
// а также выведет сумму всех элементов массива.

// const values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];

// let smallesNumber = values[0];
// let biggerNumber = values[0];
// let total = 0;

// for (const value of values) {
//     console.log(value);
    
//     if (value < smallesNumber) {
//         smallesNumber = value;
//     }

//     if (value > biggerNumber) {
//         biggerNumber = value;
//     }

//     total += value;
// }

// console.log('минимальное значение', smallesNumber);
// console.log('максимальное значение', biggerNumber);
// console.log('сумма всех элементов', total);


// -----------------------------Task-02---------------------------------

// Задание:
// Поменяйте сценарий таким образом, чтобы обход данных массива происходил с
// помощью цикла for...of

// let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
// let max = Number.MIN_VALUE;

// for (let index = 0; index < values.length; index++) {
//     const element = values[index];
//     if(element > max){
//         max = element;
//     }
// }

// console.log("Максимальное значение массива - " + max);

// =======================for...of======================================
// const values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
// let biggerNumber = values[0];

// for (const value of values) {
//     console.log(value);
//     if (value > biggerNumber) {
//         biggerNumber = value;
//     }
// }
// console.log('Максимальное значение массива -', biggerNumber);


// ---------------------Task-03--------------------------------------

// Задание:
// Напишите сценарий, который найдет в массиве все отрицательные значения и заменить
// их на значения 0.
// После этого выведет на экран все элементы массива.

// const values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];

// for (let i = 0; i < values.length; i += 1){
//     // console.log(values[i]);
//     if (values[i] < 0) {
//         values[i] = 0;
//     }
//     console.log(values[i]);
// }


// -------------------Task-04--------------------------------------
// Задание:
// Дано массив. Создайте на основе значений этого массива два новых массива.
// В один массив поместите все четные значения, а во второй все нечетные.
// Выведите на экран значения, которые вошли в первый массив и во второй массив.

// const values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
// const honestNumber = [];
// const oddNumber = [];

// for (let i = 0; i < values.length; i += 1){
//     // console.log(values[i]);

//     if(values[i] % 2 === 0){
//         console.log(`Четные числа`, values[i]);
//         honestNumber.push(values[i]);
//     } else{
//         console.log(`Нчетные числа`, values[i]);
//         oddNumber.push(values[i]);
//     }
// }

// console.log(honestNumber);
// console.log(oddNumber);


// --------------------------Task-05---------------------------
// Задание:
// Найдите первый положительный элемент массива и выведите его на экран.

// const values = [-1, -5, -6, -3, -10, -5, 3, 4, -1, -8, 1, -10, 3];

// for (const value of values) {
//     // console.log(value);
//     if (value > 0) {
//         console.log(value);
//         break;
//     }
// }


// -------------------------Task-06-----------------------

// Задание:
// Дано массив.Поменяйте элемент с максимальным значением местами с элементом с
// минимальным значением.

// const values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0];

// let maxNumber = values[0];
// let minNumber = values[0];
// let maxElementIndex;
// let minElementindex;

// for (let i = 0; i < values.length; i += 1){
//     console.log(values[i])
//     if (values[i] > maxNumber) {
//         maxNumber = values[i];
//         maxElementIndex = [i]; // запоминаем индекс максимального значения
//     }

//     if (values[i] < minNumber) {
//         minNumber = values[i];
//         minElementindex = [i]; // запоминаем индекс минимального значения
//     }
// }

// // меняем значения местами, используя индексы, которые запомнили ранее
// values[maxElementIndex] = minNumber;
// values[minElementindex] = maxNumber;

// console.log('----------------------------------------')

// for (const value of values) {
//     console.log(value);
// }


// -------------------------Task-07---------------------

// Задание:
// Дано массив. Найдите среднее арифметическое для значений этого массива.
// Выведите на экран только те элементы, которые больше этого среднего арифметического
// значения

// let values = [10, 20, 48, 6, 11, 9, 125, 1, 8, 0, 3, 255, 77, 11, 170, 4, 28];
// let sum = 0;

// console.log(values);

// for (const value of values) {
//     sum += value;
// }

// const avarage = Math.floor(sum / values.length);
// console.log('Среднее арифметическое =', avarage);

// for (const value of values) {
//     if (value > avarage) {
//         console.log(value);
//     }
// }


// -------------------------Task-08-------------------------------
// Задание:
// Дан массив целых чисел.Проверьте есть ли в нем одинаковые элементы.
// Если есть выведите их на экран.

// let values = [10, 20, 4, 6, 11, 9, 125, 10, 8, 0, 3, 5, 89, 12, 46, 77, 3];

// for (let i = 0; i < values.length; i += 1){
//     for (let j = i + 1; j < values.length; j += 1){
//         if (values[i] === values[j]) {
//             console.log(values[i]);
//             break;
//         }
//     }
// }


// ------------------Array Mathods------------------------------------------------
// -------------------Task-01---------------------------------------------
// Задание:
// Попросите у пользователя ввести название города. Удалите этот город из элементов массива.
// Если города нет в массиве, сообщите об этом пользователю.
// Выведите массив на экран после удаления элементов.

// let cities = ["London", "Paris", "Berlin", "Rome", "Budapest", "Lisbon", "Madrid", "Amsterdam"];

// const userCity = prompt('Введите название города');
// const hasCity = cities.includes(userCity);
// const indexOfUserCity = cities.indexOf(userCity);

// if (hasCity) {
//     cities.splice(indexOfUserCity, 1);
//     console.log(cities);
// } else if (!userCity) {
//     console.log('отменено пользователем!')
// } else {
//     console.log('Такого города нет')
// }




// ====================================================================
// -------------Найти и вывести простые числа до 100----------------
// const maxNumber = 100;
// i:
// for (let i = 2; i <= maxNumber; i += 1){
//     for (let j = 2; j < i; j += 1){
//         if (i % j === 0) {
//             continue i;
//         }
//     }
//     console.log('Простое число', i);
// }
// ---------------------------
// const arr = [];
// for (let i = 2; i <= 100; i += 1){
//     let count = 0;
//     for (let j = 1; j <= 100; j += 1){
//         if (i % j === 0) {
//             count += 1;
//         }        
//     }
//     // console.log(count);
//     if (count == 2) { 
//         arr.push(i)
//     }
// }

// console.log(arr);

// =======================================================================


// --------------Task-02---------------
// Задание:
// Напишите сценарий, который будет запрашивать у пользователя значения,
// до тех пор, пока тот не введет значение stop
// Все введенные значения, если они являются числом, должны быть добавлены в массив.
// После того, как пользователь ввел значение стоп, посчитайте сумму всех значений,
// которые находятся в массиве.

// let userInput;
// let sum = 0;

// const values = [];

// do {
//     userInput = prompt('Введите значение');
//     if (!isNaN(userInput)) {
//         values.push(userInput);
//     }
// } while (userInput !== 'stop');

// console.log(values);

// for (const value of values) {
//     sum += Number(value);
// }

// console.log('Сумма всех значений в массиве =',sum);


// -------------------------Task-03-----------------------------
// Задание:
// Перепишите сценарий и воспользуйтесь одним из методов, изученных в уроке.Поменяйте код так,
// чтобы сохранить его поведение.
        
// let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
// let oddValues = [];
// let evenValues = [];
// let oddValuesPosition = 0;
// let evenValuesPosition = 0;

// for (let value of values){
//     if (value % 2 == 0){
//         evenValues[evenValuesPosition] = value;
//         evenValuesPosition++;
//     }else{
//         oddValues[oddValuesPosition] = value;
//         oddValuesPosition++;
//     }
// }

// console.log("Нечетные значения");
// for (let oddVal of oddValues){
//     console.log(oddVal);
// }

// console.log("Четные значения");
// for (let evenVal of evenValues){
//     console.log(evenVal);
// }

// -------------------------------------------------------------------

// let values = [10, 20, 5, 7, 11, 8, 125, 4, 5, 7, 222, 1];

// const oddValues = [];
// const evenValues = [];

// for (const value of values) {
    
//     if (value % 2 === 0) {
//         evenValues.push(value);
//     } else {
//         oddValues.push(value);
//     }
// }

// console.log('Четные');
// for (const evenVal of evenValues) {
//     console.log(evenVal)
// }
// console.log('не четные');
// for (const oddVal of oddValues) {
//     console.log(oddVal);
// }


// ---------------Task-04----------------------------
// Задание:
// Найдите все значения в массиве меньше 0 и удалите их.

// let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];
// // let indexOfMinNumber;

// for (let i = 0; i < values.length; i += 1){
//     if (values[i] < 0) {
//         // indexOfMinNumber = [i];
//         values.splice(i, 1);
//     }
// }

// console.log(values);
// for (const value of values) {
//     console.log(value);
// }


