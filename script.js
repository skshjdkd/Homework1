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