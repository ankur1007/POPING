import { timer } from "./timer.js";

const $ = (id) => document.getElementById(id);
const profile = document.querySelector(".profile");
const userName = $("username");

export function user() {
  timer().updatetimer();
  profile.textContent = userName.value || "Guest";
}
export function startexam() {
  const startexams = document.getElementById("startexam");
  startexams.onclick = () => {
    // location.reload();
    user();
    document.getElementById("InstructionPage").classList.add("hidden");

    sessionStorage.setItem("loggedin", "true");
  };

  return startexams;
}

export function readyForExam() {
  const readyExamYes = document.getElementById("yesReady");
  const readyExamNo = document.getElementById("notReady");

  document.getElementById("authModal").classList.add("hidden");
  document.getElementById("readyForExam").classList.remove("hidden");

  readyExamYes.onclick = () => {
    const loginsession = sessionStorage.getItem("loggedin") === "true";
    if (loginsession) {
      document.getElementById("InstructionPage").classList.add("hidden");
      document.getElementById("readyForExam").classList.add("hidden");
      timer().updatetimer();
      profile.textContent = userName.value || "Guest";

      enableLeaveWarning();
    } else {
      startexam();
      document.getElementById("InstructionPage").classList.remove("hidden");
      document.getElementById("readyForExam").classList.add("hidden");
      enableLeaveWarning();
    }
  };
  readyExamNo.addEventListener("click", () => {
    document.getElementById("readyForExam").classList.add("hidden");
    document.getElementById("authModal").classList.remove("hidden");
  });
}

export function leaveWarning(event) {
  // Standard way to trigger confirmation
  event.preventDefault();
  event.returnValue = "";
}

export function disableLeaveWarning() {
  return window.removeEventListener("beforeunload", leaveWarning);
}
export function enableLeaveWarning() {
  return window.addEventListener("beforeunload", leaveWarning);
}
