// #1
function minNumber(x,y) {
    if (x > y) {return y;}
    if (x == y) {return x;}
    else {return x;}
}

// #2
function isEven(x) {
    if (x % 2 == 0) {return 'Число четное';}
    else {return 'Число нечетное';}
}

// #3
function squart(x) {
    return (console.log(x**2), x**2);
}

// #4
function correctAge(x) {
    x = Number (x);

    if (x < 0) {return(console.log('Вы ввели неправильное значение'));}
    if ( (x >= 0) && (x <=12) ) {return(console.log('Привет, друг!'));}
    else {return(console.log('Добро пожаловать!'));}
}

// #5
function isCorrect(a,b) {
    const x = Number(a);
    const y = Number(b);

    if (isNaN(x) || isNaN(y)) {return(console.log('Одно или оба значения не являются числом'));}
    else {return console.log(x*y);}
}
// #6
function cube() {
  const n = Number(prompt('Введите число:'));

  if (input === null || input.trim() === '' || isNaN(n)) {
    return 'Переданный параметр не является числом';
  }

  return `${n} в кубе равняется ${n ** 3}`;
}
// #7
function cubeOf(value) {
  const n = Number(value);

  if (value === null || String(value).trim() === '' || isNaN(n)) {
    return 'Переданный параметр не является числом';
  }

  return `${n} в кубе равняется ${n ** 3}`;
}

function cube() {
  return cubeOf(prompt('Введите число:'));
}

// Проверка всех заданий
console.log(minNumber(7,9));
console.log(isEven(7));
a = squart(7); // тут присваивается к переменной а значение квадрата и выводится число в консоле.лог
console.log(a); // тут печатается значение переменной -> переменной задано значение
correctAge(prompt("Сколько вам лет?"));
isCorrect(3,4);
isCorrect(3,'ds');
console.log(cube());
// Проверка для чисел от 0 до 10
for (let i = 0; i <= 10; i++) {
  console.log(cubeOf(i));
}