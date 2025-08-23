import { questions } from "./Data.js";
import { userAnswer } from "./Footer.js";
import { getCurrentIndex } from "./State.js";

export function answer() {
  questions.forEach((ques) => {
    const selected_answer = userAnswer[ques.id];

    if (selected_answer === ques.answer) {
      return console.log("correct");
    } else {
      console.log("wrong");
    }
    //   userAnswer[getCurrentIndex] = button.value;
    //   });
  });
}
