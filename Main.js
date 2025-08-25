// import { questions } from "./components/Data.js";
import { allevents } from "./components/Footer.js";
import { timer } from "./components/timer.js";
import { answer } from "./components/Answer.js";
import { mainOptions } from "./components/mainoption.js";
import { navigationbutton } from "./components/Navigation.js";

const tookoption = document.querySelectorAll("input[type=radio]");
const newpage = document.getElementById("next");
const clearbtn = document.getElementById("clearbutton");
const previouspage = document.getElementById("previous");

// options buttons-A,b,c,d
tookoption.forEach((button) =>
  button.addEventListener("click", () => {
    // console.log(button.id);
    tookoption.forEach((otherbutton) => {
      if (otherbutton !== button) {
        // otherbutton.disabled = true;
      }
    });
  })
);

//options(a,b,c,d ) + question placeholding  function

allevents({ newpage, previouspage, clearbtn, tookoption });

const my_time = timer();
setInterval(my_time.updatetimer, 1000);
answer();
// navigationbutton();
mainOptions(0);
