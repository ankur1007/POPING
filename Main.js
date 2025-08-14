import { questions } from "./components/Data.js";
import { allevents } from "./components/Footer.js";
// import { question } from "./components/MainQuestion.js";
// import { totalbutton } from "./components/navigation.js";

const tookoption = document.querySelectorAll("input[type=radio]");
const newpage = document.getElementById("next");
const clearbtn = document.getElementById("clearbutton");
const previouspage = document.getElementById("previous");

// options buttons-A,b,c,d
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

//options function-a,b,c,d
export function page(Index) {
  const placeholder = document.getElementById("placeholder");
  const tookPlaceholder = document.querySelectorAll(".optionhold");

  placeholder.innerText = questions[Index].text;

  [...tookPlaceholder].map((span, id) => {
    span.innerText = questions[Index].option[id];
  });
}

allevents({ newpage, previouspage, clearbtn, tookoption });
page(0);
