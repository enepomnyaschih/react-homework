export function defer(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

export function compare(x, y) {
  return (x > y) ? 1 : (x < y) ? -1 : 0;
};
