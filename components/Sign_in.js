import { readyForExam, user } from "./Instruction.js";
import {  stopTimer } from "./timer.js";
export function create_signin() {
  const userName = document.getElementById("username");
  const password = document.getElementById("password");
  const cancelBtn = document.getElementById("cancelBtn");
  const login = document.getElementById("loginBtn");
  const Admin = document.getElementById("admin");
  const createnewaccount = document.getElementById("signupBtn");
  const HeaderSignup = document.getElementById("HeaderSignup");

  HeaderSignup.addEventListener("click", () => {
    const loggedin = sessionStorage.getItem("loggedin") === "true";
    if (loggedin) {
      const confirmleave = confirm("do you want to quit?");
      if (!confirmleave) {
        (e) => {
          e.preventDefault();
        };
        return;
      } else {
        document.getElementById("authModal").classList.remove("hidden");
        // pausedTimer();
      }
    } else {
      document.getElementById("authModal").classList.remove("hidden");
      stopTimer();
    }
  });

  Admin.addEventListener("click", (e) => {
    e.preventDefault();
    if (userName.value === "ankur" && password.value === "123") {
      localStorage.setItem(
        "adminCredentials",
        JSON.stringify({ userName: userName.value, password: password.value })
      );
      // alert("Admin Sign in successful! Please Add the Questions.");
      document.getElementById("adminQuestions").classList.remove("hidden");
      document.getElementById("authModal").classList.add("hidden");
    } else {
      alert("Invalid credentials. Please try again.");
      document.getElementById("adminQuestions").classList.add("hidden");
    }
  });

  cancelBtn.onclick = function () {
    document.getElementById("authModal").classList.add("hidden");
  };

  login.addEventListener("click", (e) => {
    e.preventDefault();

    const newuser = JSON.parse(localStorage.getItem("user")) || [];
    const findUser = newuser.find(
      (u) =>
        (userName.value == u.userName || userName.value == u.email) &&
        password.value == u.password
    );
    if (findUser) {
      const loggedin = sessionStorage.getItem("loggedin") === "true";
      if (!loggedin) {
        readyForExam();
      } else {
        document.getElementById("authModal").classList.add("hidden");
        document.getElementById("customAlert").classList.add("hidden");
        document.getElementById("adminQuestions").classList.add("hidden");
        document.getElementById("InstructionPage").classList.add("hidden");
        document.getElementById("readyForExam").classList.add("hidden");
        document.getElementById("startexam").classList.add("hidden");
        user();
      }
    } else {
      alert("invalid user credentials");
    }
  });

  createnewaccount.addEventListener("click", () => {
    document.getElementById("newUser").classList.remove("hidden");
  });

  return { userName, password };
}
