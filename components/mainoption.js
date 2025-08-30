import { questions } from "./Data.js";
import { getCurrentIndex, nextIndex } from "./State.js";
export function mainOptions(Index) {
  const placeholder = document.getElementById("questionplaceholder");
  const tookPlaceholder = document.querySelectorAll("label > span:last-child");
  const tookoption = document.querySelectorAll("input[type=radio]");

  placeholder.innerText = questions[Index].text;

  tookPlaceholder.forEach(
    (span, id) => (span.innerText = questions[Index].option[id])
  );
  // [...tookPlaceholder].map((span, id) => {
  //   // span.innerText = `${getCurrentIndex}`;
  //   span.innerText = questions[Index].option[id];
  // });

  [...tookoption].forEach((btn, id) => {
    btn.value = questions[Index].option[id];
  });
}

export function quesNo() {
  // debugger;
  const questionno = document.getElementById("question_number");
  questionno.innerText = `Question No.${getCurrentIndex() + 1}`;
}
quesNo();
