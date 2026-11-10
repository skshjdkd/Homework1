const quiz = [
    {
        question: "Какой цвет неба?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function startQuiz() {
    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const current = quiz[i];

        const message =
            `Вопрос ${i + 1} из ${quiz.length}:\n` +
            `${current.question}\n\n` +
            `${current.options.join("\n")}\n\n` +
            `Введите номер ответа:`;

        const userInput = prompt(message);

        if (Number(userInput) === current.correctAnswer) {
            score++;;
        }
    }

    alert(`Игра окончена!\nПравильных ответов: ${score} из ${quiz.length}`);
}

function searchNumber() {
    const number = Math.floor(Math.random() * 100) + 1;

    const message =
        `Приветствуем Вас на игре "Угадай число от 1 до 100"!\n` +
        `Число уже было загадано. Введите Ваше число:`;

    let numberUser = Number(prompt(message));

    while (numberUser !== number) {
        if (numberUser < number) {
            numberUser = Number(prompt('Ваше число меньше загаданного. Введите новое число:'));
        } else {
            numberUser = Number(prompt('Ваше число больше загаданного. Введите новое число:'));
        }
    }

    alert(`Поздравляю! Вы угадали число! Это было ${number}`);
}

function easyMath() {
    alert('Сейчас будет выведено пару кратких примеров, проверим Ваши знания!'); 

    let number1 = Math.floor((Math.random()*100)+1);
    let number2 = Math.floor((Math.random()*100)+1);

    let answer = Number(prompt(`${number1} + ${number2} = ...`));

    if (answer == (number1 + number2)) {
        alert ('Все верно, идем дальше');
    } else {
        alert ('Неверно');
    }

    while ((number1 < number2)) {
        number1 = Math.floor((Math.random()*100)+1);
        number2 = Math.floor((Math.random()*100)+1);
    }

    answer = Number(prompt(`${number1} - ${number2} = ...`));

    if (answer == (number1 - number2)) {
        alert ('Все верно, идем дальше');
    } else {
        alert ('Неверно');
    }

    number1 = Math.floor((Math.random()*10)+1);
    number2 = Math.floor((Math.random()*10)+1);

    answer = Number(prompt(`${number1} * ${number2} = ...`));

    if (answer == (number1 * number2)) {
        alert ('Все верно, идем дальше');
    } else {
        alert ('Неверно');
    }

    while ((number1 < number2) || (number1 % number2 != 0)) {
        number1 = Math.floor((Math.random()*100)+1);
        number2 = Math.floor((Math.random()*100)+1);
    }

    answer = Number(prompt(`${number1} / ${number2} = ...`));

    if (answer == (number1 / number2)) {
        alert ('Все верно, идем дальше');
    } else {
        alert ('Неверно');
    }
}

function reversedText() {
    let textUser = prompt('Введите текст, который хотите перевернуть:');
    let reversedTextUser = '';

    for (let i = 0; i < textUser.length; i++) {
        reversedTextUser = textUser[i] + reversedTextUser;
    }

    alert(`Ваш перевернутый текст: ${reversedTextUser}`);
}

function rockPaperScissors() {
    const variants = ['камень', 'ножницы', 'бумага'];

    const answerOfBot = variants[Math.floor(Math.random() * 3)];

    let answerOfUser = prompt('Давай сыграем в камень-ножницы-бумага!\nЧто выберешь?');
    answerOfUser = answerOfUser.trim().toLowerCase();

    let result;

    if (answerOfUser === answerOfBot) {
        result = 'Ничья!';
    } else if (
        (answerOfUser === 'камень' && answerOfBot === 'ножницы') ||
        (answerOfUser === 'ножницы' && answerOfBot === 'бумага') ||
        (answerOfUser === 'бумага' && answerOfBot === 'камень')
    ) {
        result = 'Ты победил!';
    } else {
        result = 'Ты проиграл!';
    }

    alert(`Ты выбрал: ${answerOfUser}\nКомпьютер выбрал: ${answerOfBot}\n\n${result}`);
}