import { mainOptions } from "./mainoption.js";
import { questions } from "./Data.js";
import { setCurrentIndex, getCurrentIndex } from "./State.js";

export function navigationbutton() {
  const navbuttons_display = document.getElementById("navigationbutton");
  const finalbutton = [];
  const selected = document.querySelector("input[type=radio]:checked");
  //navigation buttons --> right hand cornor question buttons
  questions.forEach((q, id) => {
    const btn = document.createElement("button"); // here it create buttons for options through js
    btn.innerText = id + 1;

    // btn.name = id.toString();
    // btn.value= questions[id].option[id]
    btn.classList.add("navbtn");
    navbuttons_display.appendChild(btn);

    finalbutton.push(btn);
  });

  return finalbutton;
}

// for navigating  the nav buttons
const btn = navigationbutton();
let currentIndex = 0;
btn.forEach((button, id) => {
  button.addEventListener("click", () => {
    setCurrentIndex(id); // <-- shared state
    mainOptions(id); // render that question
    // (Optional) If you want to restore the previously chosen option here,
    // you can dispatch a custom event and let footer.js handle restoring,
    // or move the restore logic into mainOptions where you have access to answers.
  });
});
export function coloredbtn() {
  btn.forEach((coloredbtn, id) => {
    coloredbtn.addEventListener("click", () => {
      coloredbtn.classList.add("coloredbtn_nav");
    });
  });
}
coloredbtn();
