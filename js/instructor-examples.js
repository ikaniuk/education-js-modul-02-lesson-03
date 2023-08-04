// -Модуль 2. Занятие 3. Массивы-

// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать
// для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggae» в начало массива.

// const genreOfMusic = ['Jazz', 'Blues'];
// console.log(genreOfMusic);

// genreOfMusic.push('Рок-н-ролл');
// console.log(genreOfMusic)
// console.log(genreOfMusic[0]);

// const indexOfLastElement = genreOfMusic.length - 1;
// console.log(genreOfMusic[indexOfLastElement]);

// const deletedGengre = genreOfMusic.splice(0, 1);
// console.log(deletedGengre);
// console.log(genreOfMusic);

// genreOfMusic.unshift('Country', 'Reggae');
// console.log(genreOfMusic);


// Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами,
// значения которых хранятся в переменной values в виде строки.
// Значения гарантированно разделены пробелом.

// const values = '5 5';
// const arr = values.split(' ');
// const side1 = parseFloat(arr[0]);
// const side2 = parseFloat(arr[1]);
// const area = side1 * side2;

// console.log(`Площадь прямоугольника со сторонами ${side1} и ${side2} = ${area}`)


// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for.
// Для каждого элемента массива выведи в консоль строку в
// формате номер_элемента: значение_элемента.Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1){
//     console.log(i + 1, fruits[i]);
// }


// xample 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
// В переменных names и phones хранятся строки имен и телефонных номеров,
// разделенные запятыми.Порядковый номер имен и телефонов в строках указывают на соответствие.
// Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const arrOfNames = names.split(',');
// const arrOfPhones = phones.split(',');

// for (let i = 0; i < arrOfNames.length; i += 1){
//     console.log(`${arrOfNames[i]} - ${arrOfPhones[i]}`);

// }


// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего.
// Результирующая строка не должна начинаться или заканчиваться пробельным символом.
// Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';
// const arr = string.split(' ');
// let newString = '';

// for (let i = 1; i < arr.length - 1; i += 1){
//     console.log(arr[i]);
//     newString += arr[i] + ' ';
// }
// newString = newString.slice(0, newString.length - 1);
// console.log(newString);

