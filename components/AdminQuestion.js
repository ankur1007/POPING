import { getQuestions } from "./Answer.js";
import { mainOptions } from "./mainoption.js";

export function QuestionFunctionality() {
  const cancel = document.getElementById("cancel");
  const save = document.getElementById("save");
  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  const option3 = document.getElementById("option3");
  const option4 = document.getElementById("option4");
  const answerInput = document.getElementById("answerInput");
  const questionInput = document.getElementById("questionInput").value;

  cancel.addEventListener("click", () => {
    const questions = getQuestions();
    if (questions.length > 0) {
      document.getElementById("adminQuestions").classList.add("hidden");
      mainOptions(0);
    } else {
      alert("No questions available. Please add questions.");
    }
  });

  save.addEventListener("click", () => {
    let questions = JSON.parse(sessionStorage.getItem("questions")) || [];

    if (
      option1.value === "" ||
      option2.value === "" ||
      option3.value === "" ||
      option4.value === "" ||
      answerInput.value === ""
    ) {
      alert("Please fill all options and answer fields.");
      return;
    }

    const newQuestion = {
      id: questions.length,
      text: document.getElementById("questionInput").value,
      answer: document.getElementById("answerInput").value,
      option: [
        document.getElementById("option1").value,
        document.getElementById("option2").value,
        document.getElementById("option3").value,
        document.getElementById("option4").value,
      ],
    };

    // copied options
    const copied = newQuestion.option.map((opt, i) => {
      return newQuestion.option.indexOf(opt) !== i;
    });
    if (copied.includes(true)) {
      alert("Duplicate options. Please enter unique options.");
      return;
    }

    if (!newQuestion.option.includes(answerInput.value)) {
      alert("Answer should be match from options");
      return;
    }

    questions.push(newQuestion);

    sessionStorage.setItem("questions", JSON.stringify(questions));
    // debugger;
    const added = document.getElementById("added");
    added.innerText = ` ✔️ Question no. ${
      newQuestion.id + 1
    } Added Successfully!`;

    document.getElementById("FormQuestionNo").innerText = ` Question No. ${
      newQuestion.id + 2
    } `;

    //clear all values after saving
    document.getElementById("questionInput").value = "";
    document.getElementById("option1").value = "";
    document.getElementById("option2").value = "";
    document.getElementById("option3").value = "";
    document.getElementById("option4").value = "";
    document.getElementById("answerInput").value = "";
  });
}
