import runGameEngine from '../index.js';
import generateNumber from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return true;
  }
  for (let i = 2; i <= (number / 2); i += 1) {
    if ((number % i) === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const question = generateNumber(1, 100);
  const textAnswer = (isPrime(question) ? 'yes' : 'no');
  return [question, textAnswer];
};

const runGame = () => (runGameEngine(description, generateRound));

export default runGame;
