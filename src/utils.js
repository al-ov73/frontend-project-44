const generateNumber = (minRange, maxRange) => (
  Math.floor(Math.random() * (maxRange - minRange) + minRange)
);

const randomChoice = (arr) => (
  arr[Math.floor(arr.length * Math.random())]
);

export { generateNumber, randomChoice };
