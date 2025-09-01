import { questions } from "./Data.js";
import { getteranswer } from "./Footer.js";
import { getCurrentIndex } from "./State.js";

export function answer() {
  // const submit = document.getElementById("submit");
  const correctAnswersMap = questions.reduce(
    (acc, currQue) => ({ ...acc, [currQue.id]: currQue.answer }),
    {}
  );
  console.log(correctAnswersMap);
  // finalsubmit.addEventListener("click", () => {
  //   alert("submitted");
  // });
  // const quest = getCurrentIndex;

  yesBtn.addEventListener("click", () => {
    questions.forEach((q, i) => {
      // const selectedanswer = userAnswer[ques.id];
      let score = 0;
      // debugger;
      const answer = getteranswer();

      // const currentQ = questions[getCurrentIndex()];

      // const currQue = questions.find((que) => que.id === q.id);
      if (+answer[q.id] === correctAnswersMap[q.id]) {
        // console.log("correct");
        score++;
      } else {
        // console.log("wrong");
      }
      console.log(score);
    });
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
