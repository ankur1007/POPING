import { questions } from "./Answer.js";
import { getCurrentIndex, nextIndex } from "./State.js";
export function mainOptions(Index) {
  const placeholder = document.getElementById("questionplaceholder");
  const tookPlaceholder = document.querySelectorAll("label > span:last-child");
  const tookoption = document.querySelectorAll("input[type=radio]");

  placeholder.innerText = questions[Index].text;

  tookPlaceholder.forEach(
    (span, id) => (span.innerText = questions[Index].option[id])
  );

  [...tookoption].forEach((btn, id) => {
    btn.value = questions[Index].option[id];
    btn.parentElement.classList = "p-1 border border-white-200 ";
  });

  tookoption.forEach((btn) => {
    btn.addEventListener("click", () => {
      [...tookoption].forEach((option) => {
        if (option.checked) {
          option.parentElement.classList.remove(
            "border",
            "border-red-300",
            "border"
          );
          option.parentElement.classList.add(
            "border",
            "border-green-300",
            "border",
            "rounded",
            "p-1"
          );
        } else {
          option.parentElement.classList.remove(
            "border",
            "border-green-300",
            "border"
          );
          option.parentElement.classList.add(
            "border",
            "border-red-300",
            "border",
            "rounded",
            "p-1"
          );
        }
      });
    });
  });
}
export function quesNo() {
  // debugger;
  const questionno = document.getElementById("question_number");
  questionno.innerText = `Question No.${getCurrentIndex() + 1}`;
}

export function removeColoredBorderoptions() {
  const tookoption = document.querySelectorAll("input[type=radio]");
  tookoption.forEach((option) => {
    option.parentElement.classList.remove(
      "border",
      "border-green-300",
      "border-red-300",
      "rounded",
      "p-1"
    );
    option.parentElement.classList.add("p-1", "border", "border-white-200");
  });
}

quesNo();
