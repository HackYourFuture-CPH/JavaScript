

class Quiz {
    constructor (name) {
        this.name = name;
    }

    getQuestions () {
        // return promise
    }

    renderQuestions (questionsArray) {
        questionsArray.forEach(question => {

            function addQuiz() {
                var node = document.createElement("LI");               
                node.innerHTML = addText();
                node.innerHTML += addLabel();
                node.innerHTML += addOptions();
                document.querySelector('ul').appendChild(node); 
            }

            function addText() {
               // return text
            }

            function addLabel() {          
                // return label
            }

            function addOptions() {
                var openSelect = `<select id="answer-select">`
                var closeSelect = `</select">`
                var options = "";

               // loop over answers and append option elements to options var

                return openSelect + options + closeSelect;
            }
          
            addQuiz();   
        })
    }
    calculateScore() {
        // return score
    }
}

// instantiate quiz with name

// render quiz

// get store in button listener


