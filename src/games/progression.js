import runGameEngine from '../index.js';
import generateNumber from '../utils.js';

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

const generateRound = () => {
  const firstNumber = generateNumber(1, 20);
  const step = generateNumber(1, 10);
  const length = generateNumber(minRange, maxRange);

  const progression = generateProgression(firstNumber, step, length);
  const hiddenIndex = generateNumber(0, (progression.length - 1));
  const answer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';

  const question = progression.join(' ').trim();
  return [question, answer];
};

const runGame = () => (runGameEngine(description, generateRound));

export default runGame;
