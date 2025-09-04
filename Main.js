// import { questions } from "./components/Data.js";
import { allevents } from "./components/Footer.js";
import { timer } from "./components/timer.js";
import { answer } from "./components/Answer.js";
import { mainOptions } from "./components/mainoption.js";
import { navigationbutton } from "./components/Navigation.js";
import { create_signin } from "./components/Sign_in.js";
import { QuestionFunctionality } from "./components/AdminQuestion.js";

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

HeaderSignup.onclick = function () {
  document.getElementById("authModal").classList.remove("hidden");
};

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    // Close all modals if open
    document.getElementById("authModal").classList.add("hidden");
    document.getElementById("customAlert").classList.add("hidden");
    document.getElementById("adminQuestions").classList.add("hidden");
  }
});

//options(a,b,c,d ) + question placeholding  function

allevents({ newpage, previouspage, clearbtn, tookoption, markedQuestion });

// const my_time = timer();
// setInterval(my_time.updatetimer, 1000);
answer();
// navigationbutton();
mainOptions(0);
// import { timer } from "./timer.js";

timer().updatetimer();
create_signin();
QuestionFunctionality();
