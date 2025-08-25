import { questions } from "./Data.js";
import { getCurrentIndex, nextIndex } from "./State.js";
export function mainOptions(Index) {
  const placeholder = document.getElementById("questionplaceholder");
  const tookPlaceholder = document.querySelectorAll(".optionhold");
  const tookoption = document.querySelectorAll("input[type=radio]");

  placeholder.innerText = questions[Index].text;

  [...tookPlaceholder].map((span, id) => {
    // span.innerText = `${getCurrentIndex}`;
    span.innerText = questions[Index].option[id];
  });

  [...tookoption].forEach((btn, id) => {
    btn.value = questions[Index].option[id];
  });
}

export function quesno() {
  // debugger;
  const questionno = document.getElementById("question_number");
  questionno.innerText = `Q.${getCurrentIndex() + 1}`;
}
quesno();
