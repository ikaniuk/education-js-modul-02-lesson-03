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
//             console.log(values[i])
//         }
//     }   
// }
