function getScore(answers, questions) {
    const questionAnswers = questions.map(question => {
        question.options.filter(option => {
            return option.correct === true;
        })[0].content
    });
    
    const correctAnswers = answers.filter((answer, i) => answer === questionAnswers[i]);

    return correctAnswers.length
}