import runGameEngine from '../index.js';
import generateNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2) === 0;

const generateRound = () => {
  const randomNumber = generateNumber(1, 100);
  const questionParity = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, questionParity];
};

const runGame = () => (runGameEngine(description, generateRound));

export default runGame;
