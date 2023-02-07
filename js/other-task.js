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

