//armazenar as perguntas
const questions = [
    "Olá, qual é o seu nome?",
    "O que você aprendeu hoje?",
    "O que te aborreceu hoje? O que você poderia ter feito para melhorar?",
    "O que te deixou feliz hoje?",
    "Quantas pessoas você ajudou hoje?",
];

//criar a função para fazer as perguntas
function asker(index = 0) {
    process.stdout.write(questions[index] + " > ")  //precisamos alimentar esse [index] para que as perguntas sejam feitas seguidamente
};

// rodar a função:
asker();

// armazenar as respostas
const answers = [];

// criar um espaço que receba suas respostas
const answerSpace = process.stdin.on("data", (data) => {
    answers.push(data.toString().trim())

    if (answers.length < questions.length) {   //essa condição alimentará o [index] da função asker() afim de que as perguntas prossigam.
        asker(answers.length)
    } else {
        console.clear(answerSpace)
        process.exit()
    };
});

//criar um evento que mostre as respostas ao final das reflexões
process.on("exit", () => {
    console.log(`
        Olá ${answers[0]}, estas foram as suas respostas:

        1ª) ${questions[1]}
            > ${answers[1]}

        2ª) ${questions[2]}
            > ${answers[2]}

        3ª) ${questions[3]}
            > ${answers[3]}

        4ª) ${questions[4]}
            > ${answers[4]}

        Espero que tenha gostado da reflexão. Te espero amanhã!
    `);
});