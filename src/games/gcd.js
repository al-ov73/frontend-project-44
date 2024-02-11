import runGameEngine from '../index.js';
import { generateNumber } from '../utils.js';

const getGcd = (firstNumber, secondNumber) => {
  let x = Math.abs(firstNumber);
  let y = Math.abs(secondNumber);
  while (y) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};

const description = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const firstNumber = generateNumber(1, 100);
  const secondNumber = generateNumber(1, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber);

  const textAnswer = answer.toString();
  return [question, textAnswer];
};

const runGame = () => (runGameEngine(description, brainGcd));

export default runGame;

