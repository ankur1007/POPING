import { questions } from "./Data.js";
import { mainOptions } from "./mainoption.js";
import { coloredbtn } from "./Navigation.js";
import {
  getCurrentIndex,
  setCurrentIndex,
  nextIndex,
  prevIndex,
} from "./State.js";
export let userAnswer = {};

let Index = 0;
// const btn = navigationbutton();

export function allevents({ newpage, previouspage, clearbtn, tookoption }) {
  //save and next -ankur sharma

  newpage.addEventListener("click", () => {
    const selectedoption = document.querySelector("input[type=radio]:checked");

    const idx = getCurrentIndex();

    if (selectedoption) {
      const qid = questions[idx].id; // jus destructure
      userAnswer[qid] = selectedoption.value;
    }

    const newIdx = nextIndex(questions.length);
    const qidNext = questions[newIdx].id;

    tookoption.forEach((button) => {
      button.checked = userAnswer[qidNext] === button.value;
    });
    console.log(userAnswer); //answer array

    function loadnewpage() {
      return mainOptions(newIdx);
    }
    loadnewpage();
  });
  coloredbtn();

  //previous page
  previouspage.addEventListener("click", () => {
    const newIdx = prevIndex(questions.length);
    mainOptions(newIdx);

    const qid = questions[newIdx].id;
    // tookoption.forEach((button, id) => {
    //   button.checked = userAnswer[qid] === button.value;
    // });
  });

  //clear button
  clearbtn.addEventListener("click", () => {
    tookoption.forEach((btn) => {
      btn.disabled = false;
      btn.checked = false;
    });
  });
}

