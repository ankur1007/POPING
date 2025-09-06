import { questions } from "./Answer.js";
import {
  quesNo,
  removeColoredBorderoptions,
  mainOptions,
} from "./mainoption.js";
import { btn, updateButtonColors } from "./Navigation.js";
import {
  getCurrentIndex,
  setCurrentIndex,
  nextIndex,
  prevIndex,
} from "./State.js";

export let userAnswer = {};
export let reviewStatus = {};
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
      // btn[idx].className = "bg-green-600 text-white rounded py-1 w-6 click ";

      // console.log(userAnswer);
    }
    // debugger;

    const newIdx = nextIndex(questions.length);
    mainOptions(newIdx); // render that question

    const qidNext = questions[newIdx].id;
    // debugger;

    // [...tookoption].forEach((button) => {
    //   button.checked = userAnswer[qidNext] === button.value;
    // });

    console.log(userAnswer); //answer array

    quesNo(); // question number

    tookoption.forEach((opt) => {
      opt.checked = userAnswer[questions[getCurrentIndex()].id] === opt.value;
    });
    // coloredBtn(newIdx);
    // debugger;

    btn[newIdx].click(); //trigger navigationbutton

    removeColoredBorderoptions();
    updateButtonColors();
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
    //  const qid = questions[getCurrentIndex()].id;
    // reviewStatus[qid] = true;
   
      updateButtonColors();
   
  });
  //marked

  markedQuestion.addEventListener("click", () => {
    const qid = questions[getCurrentIndex()].id;
    reviewStatus[qid] = true;
    updateButtonColors();

    // tookoption.forEach((button) => {
    //   btn[getCurrentIndex()].className =
    //     "bg-purple-500 text-white rounded py-1 w-6 click ";
    // });
  });

  //clear button
  clearbtn.addEventListener("click", (id = 0) => {
    tookoption.forEach((btn) => {
      btn.disabled = false;
      btn.checked = false;
    });
    btn[getCurrentIndex()].className =
      "bg-red-600  text-white rounded py-1 w-6 click ";
    removeColoredBorderoptions();

    delete userAnswer[questions[getCurrentIndex()].id];
  });
}

export function getteranswer() {
  return userAnswer;
}
