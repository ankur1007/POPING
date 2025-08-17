export function timer() {
  let time = 3 * 60 * 60;
  let isrunning = false;
  const displaytimer = document.querySelector(".timer");
  function secondsformat() {
    let hour = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let second = Math.floor(time % 60);

    return `${hour.toString().padStart(2, "0")}: ${minutes
      .toString()
      .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
  }

  function updatetimer() {
    if (time <= 10) {
      displaytimer.textContent = secondsformat();
      isrunning = false;
    }
    
    time--;
  
    return time;
  }
  displaytimer.textContent = secondsformat(time);
  return { updatetimer, secondsformat };
}
