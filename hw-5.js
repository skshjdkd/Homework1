// #1
let arr = [1, 5, 4, 10, 0, 3]
for ( let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] == 10) {break;}
}

// #2
console.log(arr.indexOf(4));

// #3
console.log(arr.join(' '));

// #4
const arr1 = [];
const arr2 = [];

for (i=0; i<3; i++) {
    for (i=0; i<3; i++) {
        arr1.push(1);
    }
    arr2.push(arr1);
}

console.log(arr2);

// #5 
const arr3 =[1,1,1];
arr3.push(2,2,2);
console.log(arr3);

// #6
const arr4 = [9, 8, 7, 'a', 6, 5];
arr4.sort();
arr4.pop();
console.log(arr4);

// #7
// let a = Number(prompt('Введите число:'));
// if (arr4.includes(a) ? alert('Угадал') : alert('Не угадал'));

// #8
let arr5 = 'abcdef';
arr5 = arr5.split('');
console.log(arr5);
arr5 = arr5.reverse();
console.log(arr5.join(''));

// #9
const arr6 = [[1, 2, 3], [4, 5, 6]];
const newArr = [...arr6[0], ...arr6[1]];
console.log(newArr);

// #10
const arr7 = [3, 7, 1, 9, 4, 10, 2];

for (let i = 0; i < arr7.length - 1; i++) {
    console.log(arr7[i] + arr7[i + 1]);
}

// #11
const getSquares = (arr) => arr.map(n => n ** 2);
console.log(getSquares([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]

// #12
const getLengths = (arr) => arr.map(word => word.length);
console.log(getLengths(["яблоко", "кот", "программирование"]));

// #13
const getNegatives = (arr) => arr.filter(n => n < 0);
console.log(getNegatives([5, -3, 8, -1, 0, -7]));

// #14
const numbers1 = [];

for (let i = 0; i < 10; i++) {
    numbers1.push(Math.floor(Math.random() * 11)); // заполняет от 0 до 10
}

const evens = [];

for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 === 0) {
        evens.push(numbers1[i]); // только четные числа
    }
}

console.log("Исходный массив:", numbers1);
console.log("Чётные значения:", evens);

// #15
const numbers2 = [];
let sum = 0;

for (let i = 0; i < 6; i++) {
    numbers2.push(Math.floor(Math.random() * 10) + 1); // целые от 1 до 10
}

for (let i = 0; i < numbers2.length; i++) {
    sum += numbers2[i];
}

const average = sum / numbers2.length;
console.log("Среднее арифметическое:", average);