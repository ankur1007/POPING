import { questions } from "./Data.js";
import { mainOptions } from "../Main.js";
let emptyArray = [];
let currentIndex = 0;
let Index = 0;

export function allevents({ newpage, previouspage, clearbtn, tookoption }) {
  
  //save and next
  
  newpage.addEventListener("click", () => {
    
    currentIndex = currentIndex + 1;
    if (currentIndex >= questions.length) {
      currentIndex = 0;
    }
    
    
    const selected = document.querySelector("input[type=radio]:checked");

    tookoption.forEach(
      (button, id) => (button.value = questions[currentIndex].option[id])
    );
    if (selected) {
      emptyArray.splice(0, 0, selected.value);
    }

    
    console.log(emptyArray);
    
    tookoption.forEach((btnOption, option) => {
      btnOption.checked = false;
      btnOption.disabled = false;
    });

    // tookoption.forEach((save) => {
    //   const values = save.value;
    //   fetching.push(values);
    // });
    // let fetch = selected.textContent;
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
