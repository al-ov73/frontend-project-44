const generateNumber = (minRange, maxRange) => (
  Math.round(Math.random() * (maxRange - minRange) + minRange)
);

export default generateNumber;
