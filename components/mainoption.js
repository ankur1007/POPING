import { questions } from "./Data.js";
export function mainOptions(Index) {
  const placeholder = document.getElementById("questionplaceholder");
  const tookPlaceholder = document.querySelectorAll(".optionhold");
  const tookoption = document.querySelectorAll("input[type=radio]");

  placeholder.innerText = questions[Index].text;

  [...tookPlaceholder].map((span, id) => {
    span.innerText = questions[Index].option[id];
  });

  [...tookoption].forEach((btn, id) => {
    btn.value = questions[Index].option[id];
  });
}
