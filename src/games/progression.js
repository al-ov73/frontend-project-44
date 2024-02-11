import runGameEngine from '../index.js';
import { generateNumber } from '../utils.js';

const minRange = 5;
const maxRange = 12;
const description = 'What number is missing in the progression?';

const generateProgression = (first, step, length) => {
  const result = [];
  for (let i = 0; i <= length; i += 1) {
    const number = first + (step * (i + 1));
    result.push(number);
  }
  return result;
};

const brainProgression = () => {
  const firstNumber = generateNumber(1, 20);
  const step = generateNumber(1, 10);
  const length = generateNumber(minRange, maxRange);
  const randomIndex = generateNumber(0, (length - 1));

  const progression = generateProgression(firstNumber, step, length);
  const answer = progression[randomIndex].toString();
  progression[randomIndex] = '..';

  const question = progression.join(', ').trim();
  return [question, answer];
};

const runGame = () => (runGameEngine(description, brainProgression));

export default runGame;
