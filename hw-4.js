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
  const input = prompt('Введите число:');

  if (input === null || input.trim() === '' || isNaN(Number(input))) {
    return 'Переданный параметр не является числом';
  }

  const n = Number(input);

  return `${n} в кубе равняется ${n ** 3}`;
}

// #7
const circle1 = {
    radius: prompt('Введите радиус первого круга: '),

    getArea() {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: prompt('Введите радиус второго круга: '),

    getArea() {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

// Проверка всех заданий
console.log(minNumber(7,9));
console.log(isEven(7));
a = squart(7); // тут присваивается к переменной а значение квадрата и выводится число в консоле.лог
console.log(a); // тут печатается значение переменной -> переменной задано значение
correctAge(prompt("Сколько вам лет?"));
isCorrect(3,4);
isCorrect(3,'ds');
console.log(cube());
console.log("circle1 площадь:", circle1.getArea());
console.log("circle1 периметр:", circle1.getPerimeter());
console.log("circle2 площадь:", circle2.getArea());
console.log("circle2 периметр:", circle2.getPerimeter());