const userName = document.getElementById("newUsername");
const email = document.getElementById("newEmail");
const password = document.getElementById("passWord");
const confirmPasword = document.getElementById("passwordtext");
const newAccount = document.getElementById("newAccount");
const back = document.querySelectorAll(".back");

export function newuser() {
  newAccount.addEventListener("click", (e) => {
    e.preventDefault();
    //  validation
    if (
      !userName.value ||
      !email.value ||
      !password.value ||
      !confirmPasword.value
    ) {
      alert("please fill all required fields");
      return;
    }

    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailpattern.test(email.value)) {
      alert("enter the valid email");
      return;
    }

    //  valid password
    if (password.value !== confirmPasword.value) {
      alert("password mismatch");
      return;
    }
    const user = JSON.parse(localStorage.getItem("user")) || [];

    const emailexist = user.some((u) => u.email === email.value);
    if (emailexist) {
      alert("email already registered");
      return;
    }

    const newUser = {
      username: userName.value,
      email: email.value,
      password: password.value,
      confirmpassword: confirmPasword.value,
    };

    user.push(newUser);

    localStorage.setItem("user", JSON.stringify(user));

    userName.value = "";
    email.value = "";
    password.value = "";
    confirmPasword.value = "";
  });
  back.forEach(
    (btn) =>
      (btn.onclick = function () {
        document.getElementById("newUser").classList.add("hidden");
      })
  );
}
