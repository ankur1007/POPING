export function timer() {
  let time = 3 * 60 * 60; // 3 hours

  // load from sessionStorage if available
  if (sessionStorage.getItem("timeLeft")) {
    time = parseInt(sessionStorage.getItem("timeLeft"), 10);
  } else {
    sessionStorage.setItem("timeLeft", time);
  }

  const displaytimer = document.querySelector(".timer");

  // format helper
  function formatTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let second = seconds % 60;

    return `${hour.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
  }

  function updatetimer() {
    // show immediately once
    let timeLeft = parseInt(sessionStorage.getItem("timeLeft"), 10);
    displaytimer.textContent = formatTime(timeLeft);

    const interval = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(interval);
        // sessionStorage.removeItem("timeLeft");
        // displaytimer.textContent = "00:00:00";
        alert("Time's up!");
      } else {
        timeLeft--;
        sessionStorage.setItem("timeLeft", timeLeft);
        displaytimer.textContent = formatTime(timeLeft);
      }
    }, 1000);
  }

  return { updatetimer };
}
