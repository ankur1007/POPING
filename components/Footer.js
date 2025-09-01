import { questions } from "./Data.js";
import { mainOptions } from "./mainoption.js";
import { coloredBtn } from "./Navigation.js";
import { quesNo } from "./mainoption.js";
import { btn } from "./Navigation.js";
import { removeColoredBorderoptions } from "./mainoption.js";
import {
  getCurrentIndex,
  setCurrentIndex,
  nextIndex,
  prevIndex,
} from "./State.js";
import { finalbutton } from "./Navigation.js";
export let userAnswer = {};

let Index = 0;
// const btn = navigationbutton();

export function allevents({
  newpage,
  previouspage,
  clearbtn,
  tookoption,
  markedQuestion,
}) {
  //save and next -ankur sharma

  newpage.addEventListener("click", () => {
    const selectedoption = document.querySelector("input[type=radio]:checked");

    const idx = getCurrentIndex();
    // debugger;
    if (selectedoption) {
      const qid = questions[idx].id; // jus destructure
      userAnswer[qid] = selectedoption.value;
      finalbutton[idx].className =
        "bg-green-600 text-white rounded py-1 w-6 click ";

      // console.log(userAnswer);
    }
    // debugger;

    const newIdx = nextIndex(questions.length);
    const qidNext = questions[newIdx].id;
    // debugger;
    [...tookoption].forEach((button) => {
      button.checked = userAnswer[qidNext] === button.value;
    });
    console.log(userAnswer); //answer array

    function loadnewpage() {
      return mainOptions(newIdx);
    }
    loadnewpage();

    quesNo();

    tookoption.forEach((opt) => {
      opt.checked = userAnswer[questions[getCurrentIndex()].id] === opt.value;
    });
    // coloredBtn(newIdx);
    btn[newIdx].click();

    removeColoredBorderoptions();
  });

  //previous page
  previouspage.addEventListener("click", () => {
    const newIdx = prevIndex(questions.length);
    mainOptions(newIdx);
    quesNo();
    const qid = questions[newIdx].id;
    tookoption.forEach((button, id) => {
      button.checked = userAnswer[qid] === button.value;
    });
  });

  //clear button
  markedQuestion.addEventListener("click", () => {
    tookoption.forEach((button) => {
      finalbutton[getCurrentIndex()].className =
        "bg-purple-500 text-white rounded py-1 w-6 click ";
    });
  });

  clearbtn.addEventListener("click", () => {
    tookoption.forEach((btn) => {
      btn.disabled = false;
      btn.checked = false;
      
    });
    finalbutton[getCurrentIndex()].className =
        "bg-red-600  text-white rounded py-1 w-6 click ";
    removeColoredBorderoptions();
  });
}

export function getteranswer() {
  return userAnswer;
}
