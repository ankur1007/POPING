// common state for all

let currentIndex = 0;
// debugger;    

export function getCurrentIndex() {       ///behind the scene
  return currentIndex;
}

export function setCurrentIndex(i) {
  currentIndex = i;
  return currentIndex;
}

export function nextIndex(total) {
  currentIndex = (currentIndex + 1) % total;
  return currentIndex;
}

export function prevIndex(total) {
  currentIndex = (currentIndex - 1 + total) % total;
  return currentIndex;
}

let colored_state = 0;

export function getcoloredstate() {
  return colored_state;
}
export function setcoloredstate() {
  colored_state = colored_state + 1;
}
