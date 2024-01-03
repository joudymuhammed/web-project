function count() {
    const questions = [
        "Q1",
        "Q2",
        "Q3",
        "Q4",
        "Q5"
    ];

    let yesCount = 0;

    questions.forEach(questionId =>
     {
        const selectedValue = document.querySelector(`input[name=${questionId}]:checked`);
        if (selectedValue) {
            if (selectedValue.value === 'yes')
            {
                yesCount++;
            }
        }
    });

    alert(`Thank you for your feed back!
    you answered Yes: ${yesCount} times`);
}

