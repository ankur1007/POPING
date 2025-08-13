import { questions } from "../Data.js";
const place = document.querySelector(".placeholder");
export function question() {
  let Index = 0;

  place.innerText = questions.map(() => questions[Index].text);
}
