export function timer() {
  let time = 3 * 60 * 60; // 3 hours
  let ispaused = false;

  // load from sessionStorage if available
  if (sessionStorage.getItem("timeLeft")) {
    time = parseInt(sessionStorage.getItem("timeLeft"), 10);
  } else {
    sessionStorage.setItem("timeLeft", time);
  }

  // const displaytimer = document.querySelector(".timer");
  const displaytimer = document.getElementById("displayTimer");

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

    const interval = setInterval(() => {
      if (!ispaused) {
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
      }
    }, 1000);

    const toggleBtn = document.getElementById("toggleButton");
    const toggleIcon = toggleBtn.querySelector("i");
    toggleBtn.addEventListener("click", () => {
      ispaused = !ispaused;

      if (ispaused) {
        toggleIcon.classList.replace("fa-pause-circle", "fa-play-circle");
      } else {
        toggleIcon.classList.replace("fa-play-circle", "fa-pause-circle");
      }
    });
  }

  return { updatetimer };
}
