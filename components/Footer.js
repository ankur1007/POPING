import { questions } from "./Data.js";
import { page } from "../Main.js";
export function allevents({ newpage, previouspage, clearbtn, tookoption }) {
  let currentIndex = 0;
  let Index = 0;

  newpage.addEventListener("click", () => {
    currentIndex = currentIndex + 1;
    if (currentIndex >= questions.length) {
      currentIndex = 0;
    }
    page(currentIndex);

    console.log("clicked");

    tookoption.forEach((btnOption) => {
      btnOption.checked = false;
      btnOption.disabled = false;
    });
  });

  previouspage.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = questions.length - 1;
    }
    page(currentIndex);
  });

  clearbtn.addEventListener("click", () => {
    debugger;
    tookoption.forEach((btn) => {
      btn.disabled = false;
      btn.checked = false;
    });
  });
}
