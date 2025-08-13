import { questions } from "../Data.js";
import { question } from "./Question.js";
const tookoption = document.querySelectorAll("input[type=radio]");
const clearbtn = document.getElementById("clearbutton");
const newpage = document.getElementById("next");
const previouspage = document.getElementById("previous");

tookoption.forEach((button) =>
  button.addEventListener("click", () => {
    console.log(button.id);
    tookoption.forEach((otherbutton) => {
      if (otherbutton !== button) {
        otherbutton.disabled = true;
      }
    });
  })
);

clearbtn.addEventListener("click", () => {
  tookoption.forEach((btn) => {
    btn.disabled = false;
    btn.checked = false;
  });
});

let currentIndex = 0;

function page(index) {
  const tookPlaceholder = document.querySelectorAll(".placehold");
  [...tookPlaceholder].map((span, id) => {
    span.innerText = questions[currentIndex].option[id];
  });
}
page();

newpage.addEventListener("click", () => {
  currentIndex = currentIndex + 1;
  if (currentIndex >= questions.length) {
    currentIndex = 0;
  }
  page(currentIndex);
});

previouspage.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = questions.length;
  }
  page(currentIndex);
});
question();
