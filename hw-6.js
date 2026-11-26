// #1
let str = 'js';
console.log(str.toUpperCase());

// #2
function filterByStart(arr, start) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().startsWith(start.toLowerCase())) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filterByStart(['Apple', 'apricot', 'banana', 'Avocado'], 'ap'));

// #3
let num = 32.58884;
console.log(Math.floor(num)); // до меньшего целого
console.log(Math.ceil(num));  // до большего целого
console.log(Math.round(num)); // до ближайшего целого

// #4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// #5
function randomOneToTen() {
    let random = Math.floor(Math.random() * 10) + 1;
    console.log(random);
}
randomOneToTen();

// #6
function randomArray(n) {
    let result = [];
    let length = Math.floor(n / 2);
    for (let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * (n + 1)));
    }
    return result;
}
console.log(randomArray(10));

// #7
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInRange(5, 15));

// #8
console.log(new Date());

// #9
let currentDate = new Date();
let futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log(futureDate);

// #10
function formatDate(date) {
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let days = ['воскресенье', 'понедельник', 'вторник', 'среда',
                'четверг', 'пятница', 'суббота'];

    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let weekDay = days[date.getDay()];

    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${weekDay}.\nВремя: ${hours}:${minutes}:${seconds}`;
}
console.log(formatDate(new Date()));