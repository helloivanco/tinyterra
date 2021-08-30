export function randomNumber() {
  return (Math.floor(Math.random() * (900 - 100) + 100) / 100).toFixed(2);
}

export function randomChangeType() {
  return Math.random() < 0.6 ? 'increase' : 'decrease';
}
