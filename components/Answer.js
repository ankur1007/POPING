import { questionsData } from "./Data.js";
import { getteranswer } from "./Footer.js";
import { getCurrentIndex } from "./State.js";
const closeResult = document.getElementById("closeResult");

export const questions =
  JSON.parse(sessionStorage.getItem("questions")) || questionsData;
console.log(questions);

export function answer() {
  // const submit = document.getElementById("submit");
  const correctAnswersMap = questions.reduce(
    (acc, currQue) => ({ ...acc, [currQue.id]: currQue.answer }),
    {}
  );
  console.log(correctAnswersMap);

  yesBtn.addEventListener("click", () => {
    const resultDisplay = document.getElementById("resultdisplay");
    let score = 0;
    const answer = getteranswer();
    console.log(answer);
    questions.forEach((q, i) => {
      // const currQue = questions.find((que) => que.id === q.id);
      debugger;
      if (
        +answer[q.id] === +correctAnswersMap[q.id] ||
        String(answer[q.id]) === String(correctAnswersMap[q.id])
      ) {
        // console.log("correct");
        score++;
      } else {
        // console.log("wrong");
      }
      console.log(score);
    });

    document.getElementById("resultdisplay").classList.remove("hidden");
    // debugger;
    document.getElementById(
      "score"
    ).innerText = `Your Score is ${score} out of ${questions.length}`;

    closeResult.onclick = function () {
      document.getElementById("resultdisplay").classList.add("hidden");
    };
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const alertBox = document.getElementById("customAlert");
  const alertBtn = document.getElementById("alertBtn");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  alertBtn.addEventListener("click", () => {
    alertBox.style.display = "flex";
  });

  yesBtn.addEventListener("click", () => {
    console.log("User clicked Yes");
    alertBox.style.display = "none";
  });

  noBtn.addEventListener("click", () => {
    console.log("User clicked No");
    alertBox.style.display = "none";
  });
});
