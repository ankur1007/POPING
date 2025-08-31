import { mainOptions } from "./mainoption.js";
import { questions } from "./Data.js";
import { setCurrentIndex, getCurrentIndex } from "./State.js";
import { quesNo } from "./mainoption.js";
import { allevents } from "./Footer.js";

export const finalbutton = [];
const selected = document.querySelectorAll("input[type=radio]:checked");
export function navigationbutton() {
  const navbuttons_display = document.getElementById("navigationbutton");
  //navigation buttons --> right hand cornor question buttons
  questions.forEach((q, id) => {
    const btn = document.createElement("button"); // here it create buttons for options through js
    btn.innerText = id + 1;

    if (id === 0) {
      btn.className =
        "bg-red-600 text-white  text-[10px] rounded py-1 w-6 click";
    } else {
      btn.className =
        "text-black bg-gray-400 text-[10px] rounded btn-sm py-1 w-6 click ";
    }
    navbuttons_display.appendChild(btn);

    finalbutton.push(btn);
  });

  return finalbutton;
}
// for navigating  the nav buttons
export const btn = navigationbutton();

// let currentIndex = 0;
btn.forEach((button, id) => {
  button.addEventListener("click", () => {
    setCurrentIndex(id); // <-- shared state
    mainOptions(id); // render that question
    quesNo();
    tookoption.forEach((opt) => {
      opt.checked = userAnswer[questions[getCurrentIndex()].id] === opt.value;
    });
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
// allevents(markedQuestion);
