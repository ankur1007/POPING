import { timer } from "./timer.js";

export function startexam() {
  const startexams = document.getElementById("startexam");
  const userName = document.getElementById("username");

  startexams.addEventListener("click", () => {
    // location.reload();
    timer().updatetimer();
    document.getElementById("InstructionPage").classList.add("hidden");
    debugger;
    const profile = document.querySelector(".profile");
    profile.textContent = userName.value;
  });

  return startexams;
}

const readyExamYes = document.getElementById("yesReady");
const readyExamNo = document.getElementById("notReady");

export function readyForExam() {
  document.getElementById("authModal").classList.add("hidden");
  document.getElementById("readyForExam").classList.remove("hidden");
  readyExamYes.addEventListener("click", () => {
    startexam();
    document.getElementById("InstructionPage").classList.remove("hidden");
    document.getElementById("readyForExam").classList.add("hidden");
  });
  readyExamNo.addEventListener("click", () => {
    document.getElementById("readyForExam").classList.add("hidden");
    document.getElementById("authModal").classList.remove("hidden");
  });
}
