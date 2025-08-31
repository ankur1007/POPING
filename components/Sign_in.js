export function create_signin() {
  const userName = document.getElementById("username");
  const password = document.getElementById("password");

  document.getElementById("signupBtn").addEventListener("click", () => {
    if (userName && password) {
      localStorage.setItem(
        "user",
        JSON.stringify({ userName: userName.value, password: password.value })
      );
      alert("Sign up successful! Please sign in.");
    }
    onclick = function () {
      document.getElementById("authModal").classList.add("hidden");
    };
  });
  return { userName, password };
}
