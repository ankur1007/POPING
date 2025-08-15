import { questions } from "./Data.js";
export function totalbutton() {
  const navbuttons_display = document.getElementById("navigationbutton");

  questions.map((index, id) => {
    const btn = document.createElement("button");
    const selected = document.querySelector("input[type=radio]:checked");

    btn.innerText = id + 1;
    btn.classList.add("navbtn");
    navbuttons_display.appendChild(btn);

    if (selected) console.log(selected.value);

    if (selected) {
      btn.checked = true;
    } else {
      btn.checked = false;
    }
  });
}
