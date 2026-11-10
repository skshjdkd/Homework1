// #1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log(people.sort((a, b) => a.age - b.age));

// #2
function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, ruleFunction) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filter([3, -4, 1, 9], isPositive));

const persons = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];
console.log(filter(persons, isMale));

// #3
let count = 0;
const timerId = setInterval(() => {
    count++;
    console.log(new Date());
    if (count === 10) {
        clearInterval(timerId);
        console.log('30 секунд прошло');
    }
}, 3000);

// #4
function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

// #5
function delayForSecondWithLog(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000);
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecondWithLog(() => sayHi('Глеб'));