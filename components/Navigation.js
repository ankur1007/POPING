import { questions } from "./Data.js";
export function navigationbutton() {
  const navbuttons_display = document.getElementById("navigationbutton");
  const finalbutton = [];
  const selected = document.querySelector("input[type=radio]:checked");
  //navigation buttons --> right hand cornor question buttons
  questions.forEach((q, id) => {
    const btn = document.createElement("button"); // here it create buttons for options through js
    btn.innerText = id + 1;

    btn.name = id.toString();

    btn.classList.add("navbtn");
    navbuttons_display.appendChild(btn);

    finalbutton.push(btn);

    btn.addEventListener("click", () => {});
  });

  return finalbutton;
}
