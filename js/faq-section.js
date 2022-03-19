const group = document.getElementsByClassName("group");
const questionDiv = document.getElementsByClassName("question-div");
const questions = document.getElementsByClassName("question");
const answers = document.getElementsByClassName("answer");
console.log(answers)
for (let i = 0; i < questionDiv.length; i++) {
    questionDiv[i].addEventListener("click", displayName);
}


function displayName() {
    let answer = this.parentNode.getElementsByClassName("answer")[0];
    let question = this.getElementsByClassName("question")[0];

    // If we are clicking the question that already has the "selected" class,
    // we remove it
    if (alreadySelected(question)) {
        // Remove font-weight bold to the question and add the standard padding
        question.classList.remove("selected");


        // Remove the answer
        answer.classList.add("remove-answer");
        setTimeout(() => {
            answer.classList.remove("remove-answer");
            question.parentNode.style.paddingBottom = "19px";
            answer.classList.remove("display-answer");
        }, 400);

    }
        // In the other case, we remove all the "selected" class and we add it
    // to the clicked one
    else {
        for (let i = 0; i < questions.length; i++) {

            if (alreadySelected(questions[i])) {
                questions[i].classList.remove("selected");

                // Remove the answer

                answers[i].classList.add("remove-answer");
                setTimeout(() => {
                    answers[i].classList.remove("remove-answer");
                    questions[i].parentNode.style.paddingBottom = "19px";
                    answers[i].classList.remove("display-answer");
                }, 400);


            }
            // Remove font-weight bold to questions and add the standard padding

        }
        // Add font-weight bold to the question and remove the standard padding
        question.classList.add("selected");
        question.parentNode.style.paddingBottom = "0px";

        // Display the answer
        answer.classList.add("display-answer");
    }
}

// Return -true- if the question we clicked is already displayed (had "selected" class)
// -false- if not
function alreadySelected(question) {
    if (question.classList.contains("selected"))
        return true;
    return false;
}