
// №1
let password = "пароль";
let passwordUser = prompt ('Введите пароль:');
if (password == passwordUser) {
    alert ('Пароль введен верно')
} else {
    alert ('Пароль введен неправильно')
}

// №2
let c = prompt ('Введите значение переменной С:');
if (( c > 0 ) && ( c < 10 )) {
    alert ('Верно')
} else {
    alert ('Неверно')
}

// №3
let d = prompt ('Введите значение переменной D: ');
let e = prompt ('Введите значение переменной E: ');
if (( d > 100 ) || ( e > 100)) {
    alert ('Верно')
} else {
    alert ('Неверно')
}

// №4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number ( a ) + Number ( b ) );

// №5
let monthNumber = prompt ('Введите номер месяца: ');
switch (monthNumber) {
    case '1':
        alert ('Зима');
        break;
    case '2':
        alert ('Зима');
        break;
    case '3':
        alert ('Весна');
        break;
    case '4':
        alert ('Весна');
        break;
    case '5':
        alert ('Весна');
        break;
    case '6':
        alert ('Лето');
        break;
    case '7':
        alert ('Лето');
        break;
    case '8':
        alert ('Лето');
        break;
    case '9':
        alert ('Осень');
        break;
    case '10':
        alert ('Осень');
        break;
    case '11':
        alert ('Осень');
        break;
    case '12':
        alert ('Зима');
        break;
    default:
        break;
}

// Доп задания 
let o = prompt ('Пожалуйста, введите любое число: ');
alert ( o == Number ? "Это число" : "NaN");
alert ( (o % 2) == 0 ? "Число четное" : "Число нечетное");
