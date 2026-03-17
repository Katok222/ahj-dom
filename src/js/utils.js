export function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

export function getNextIndex(max, currentIndex) {
  let next = getRandomIndex(max);

  while (next === currentIndex) {
    next = getRandomIndex(max);
  }

  return next;
}
