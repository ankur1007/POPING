// common state for all

let currentIndex = 0;

export function getCurrentIndex() {
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
