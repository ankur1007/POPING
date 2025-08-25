import { questions } from "./Data.js";
import { getteranswer } from "./Footer.js";
import { getCurrentIndex } from "./State.js";

export function answer() {
  const submit = document.getElementById("submit");
  const correctAnswersMap = questions.reduce(
    (acc, currQue) => ({ ...acc, [currQue.id]: currQue.answer }),
    {}
  );
  console.log(correctAnswersMap);

  // const quest = getCurrentIndex;
  submit.addEventListener("click", () => {
    questions.forEach((q, i) => {
      // const selectedanswer = userAnswer[ques.id];
      // let score = 0;
      // debugger;
      const answer = getteranswer();
      // debugger;
      // const currentQ = questions[getCurrentIndex()];
      debugger;
      const currQue = questions.find((que) => que.id === q.id);
      if (+answer[q.id] === correctAnswersMap[q.id]) {
        console.log("correct");
        // score++;
      } else {
        console.log("wrong");
      }
    });
  });
}
