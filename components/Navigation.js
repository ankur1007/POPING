import { mainOptions, quesNo } from "./mainoption.js";
import { questions } from "./Answer.js";
import { setCurrentIndex, getCurrentIndex } from "./State.js";
import { selectedbtn } from "./SharedButtonFunctionality.js";
import { reviewStatus, userAnswer } from "./Footer.js";

export const btn = [];

const tookoption = document.querySelectorAll("input[type=radio]");
export function navigationbutton() {
  const navbuttons_display = document.getElementById("navigationbutton");
  //navigation buttons --> right hand cornor question buttons
  questions.forEach((q, id) => {
    const button = document.createElement("button"); // here it create buttons for options through js
    button.innerText = id + 1;

    // Add classes for styling
    // debugger;
    if (id === 0) {
      button.className =
        "bg-red-600 text-white  text-[10px] rounded py-1 w-6 click";
    } else {
      const prior = (button.className =
        "text-black bg-gray-400 text-[10px] rounded btn-sm py-1 w-6 click ");
    }
    // elseif (prior)

    navbuttons_display.appendChild(button);

    btn.push(button);
    // prior();
    // debugger;
  });

  return { btn };
}
// for navigating  the nav buttons

navigationbutton();
// let currentIndex = 0;
// debugger;

export function updateButtonColors() {
  setTimeout(() => {
    btn.forEach((button, id) => {
      const qid = questions[id].id;
      // debugger;
      if (userAnswer[qid]) {
        // answered → green
        button.className = "bg-green-600 text-white rounded py-1 w-6 click";
      }

      // highlight current question red
      if (id === getCurrentIndex()) {
        button.className
          ? "bg-green-600 text-white rounded py-1 w-6 click"
          : "bg-red-600 text-white rounded py-1 w-6 click";
      }

      if (reviewStatus[qid]) {
        // debugger;
        button.className = "bg-purple-600 text-white rounded py-1 w-6 click";
      }
    });
  }, 0);
}

function answerChecked() {
  tookoption.forEach((opt) => {
    opt.checked = userAnswer[questions[getCurrentIndex()].id] === opt.value;
  });
}

btn.forEach((button, id) => {
  button.addEventListener("click", () => {
    setCurrentIndex(id); // <-- shared state
    mainOptions(id); // render that question
    quesNo();

    updateButtonColors();
    answerChecked();
  });
});

export function coloredBtn() {
  btn.forEach((colorbtn, id) => {
    colorbtn.addEventListener("click", () => {
      colorbtn.className = "bg-red-600 text-white rounded py-1 w-6 click ";
    });
  });
}

coloredBtn();
quesNo();
