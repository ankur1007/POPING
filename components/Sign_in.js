import { readyForExam } from "./Instruction.js";
export function create_signin() {
  const userName = document.getElementById("username");
  const password = document.getElementById("password");
  const cancelBtn = document.getElementById("cancelBtn");
  const login = document.getElementById("loginBtn");

  document.getElementById("admin").addEventListener("click", () => {
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

  // document.getElementById("admin").onclick = function () {
  //   document.getElementById("adminQuestions").classList.remove("hidden");
  //   document.getElementById("authModal").classList.add("hidden");
  // };

  login.addEventListener("click", () => {
    document.getElementById("authModal").classList.add("hidden");
    readyForExam();
  });

  return { userName, password };
}
