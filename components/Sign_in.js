import { userAnswer } from "./Footer.js";
import { readyForExam } from "./Instruction.js";
export function create_signin() {
  const userName = document.getElementById("username");
  const password = document.getElementById("password");
  const cancelBtn = document.getElementById("cancelBtn");
  const login = document.getElementById("loginBtn");
  const Admin = document.getElementById("admin");
  const createnewaccount = document.getElementById("signupBtn");

  // async function Questions() {
  //   const dummyQuestion = await fetch(
  //     "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
  //   );
  //   const data = await dummyQuestion.json();
  //   console.log(data);
  // }
  // Questions();

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

  // document.getElementById("admin").onclick = function () {
  //   document.getElementById("adminQuestions").classList.remove("hidden");
  //   document.getElementById("authModal").classList.add("hidden");
  // };
  // debugger;
  login.addEventListener("click", (e) => {
    e.preventDefault();

    const newuser = JSON.parse(localStorage.getItem("user"));
    const findUser = newuser.find(
      (u) =>
        (userName.value == u.userName || userName.value == u.email) &&
        password.value == u.password
    );
    if (findUser) {
      readyForExam();
    } else {
      alert("invalid user credentials");
    }
  });

  createnewaccount.addEventListener("click", () => {
    document.getElementById("newUser").classList.remove("hidden");
  });

  return { userName, password };
}
