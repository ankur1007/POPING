import { questions } from "./Data.js";
import { mainOptions } from "../Main.js";
import { navigationbutton } from "./Navigation.js";
let userAnswer = {};
let currentIndex = 0;
let Index = 0;
const btn = navigationbutton();
export function allevents({ newpage, previouspage, clearbtn, tookoption }) {
  //save and next -ankur sharma
  newpage.addEventListener("click", () => {
    const selectedoption = document.querySelector("input[type=radio]:checked");

    tookoption.forEach((button, id) => {
      button.value = questions[currentIndex].option[id];
      // button.checked = userAnswer[currentIndex] === button.value;
    });

    {
      if (selectedoption) {
        userAnswer[currentIndex] = selectedoption.value;
      }
    }

    currentIndex = currentIndex + 1;
    if (currentIndex >= questions.length) {
      currentIndex = 0;
    }
    mainOptions(currentIndex);

    // for navigating  the button
    btn.forEach((button, id) => {
      button.addEventListener("click", () => {
        currentIndex = id;
        mainOptions(currentIndex);
      });
    });

    console.log(userAnswer); //answer array
  });

  //previous page
  previouspage.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = questions.length - 1;
    }
    mainOptions(currentIndex);
  });

  //clear button
  clearbtn.addEventListener("click", () => {
    tookoption.forEach((btn) => {
      btn.disabled = false;
      btn.checked = false;
    });
  });
}
