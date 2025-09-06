import { timer } from "./timer.js";

export function startexam() {
  const startexams = document.getElementById("startexam");

  startexams.addEventListener("click", () => {
    // location.reload();
    timer().updatetimer();
    document.getElementById("InstructionPage").classList.add("hidden");
  });

  return startexams;
}

const readyExamYes = document.getElementById("yes");
export function readyForExam() {
  document.getElementById("readyForExam").classList.remove("hidden");
  readyExamYes.addEventListener("click", () => {
    startexam();
    document.getElementById("InstructionPage").classList.remove("hidden");
    document.getElementById("readyForExam").classList.add("hidden");
  });
}
