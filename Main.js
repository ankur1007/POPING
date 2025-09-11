import { allevents } from "./components/Footer.js";
import { timer } from "./components/timer.js";
import { answer } from "./components/Answer.js";
import { mainOptions } from "./components/mainoption.js";
import { create_signin } from "./components/Sign_in.js";
import { QuestionFunctionality } from "./components/AdminQuestion.js";
import { newuser } from "./components/newUser.js";
import { apiQuestions } from "./components/apiQuestions.js";

const tookoption = document.querySelectorAll("input[type=radio]");
const newpage = document.getElementById("next");
const clearbtn = document.getElementById("clearbutton");
const previouspage = document.getElementById("previous");
const markedQuestion = document.getElementById("markedQuestion");

// options buttons-A,b,c,d
tookoption.forEach((button) =>
  button.addEventListener("click", () => {
    // console.log(button.id);
    tookoption.forEach((otherbutton) => {
      if (otherbutton !== button) {
        // otherbutton.disabled = true;
      }
    });
  })
);
// debugger;
// if (sessionStorage.getItem("loggedin") === "true") {
//   document.getElementById("authModal").classList.add("hidden");
//   document.getElementById("customAlert").classList.add("hidden");
//   document.getElementById("adminQuestions").classList.add("hidden");
//   document.getElementById("InstructionPage").classList.add("hidden");
//   document.getElementById("readyForExam").classList.add("hidden");
//     document.getElementById("startexam").classList.add("hidden");

// }

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    // Close all modals if open
    document.getElementById("authModal").classList.add("hidden");
    document.getElementById("customAlert").classList.add("hidden");
    document.getElementById("adminQuestions").classList.add("hidden");
  }
});

//options(a,b,c,d ) + question placeholding  function
setTimeout(() => {
  allevents({ newpage, previouspage, clearbtn, tookoption, markedQuestion });
  answer();
  QuestionFunctionality();
  mainOptions(0);
}, 2000);

create_signin();
newuser();
apiQuestions();
