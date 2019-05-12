

class Quiz {
    constructor (name) {
        this.name = name;
    }

    getQuestions () {
        // ***write missing code
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
                // ***write missing code
                // return text
               
            }

            function addLabel() {
                // ***write missing code          
                // return label
            }

            function addOptions() {
                var openSelect = `<select id="answer-select">`
                var closeSelect = `</select">`
                var options = "";
            
               // ***write missing code
               // loop over questions and append option elements to options var

                return openSelect + options + closeSelect;
            }
          
            addQuiz();   
        })
    }
    calculateScore() {
        // ***write missing code
        // return score
    }
}

// ***write missing code
// instantiate quiz with name

// ***write missing code
// render quiz

// ***write missing code
// get score in button listener
// add confetti


