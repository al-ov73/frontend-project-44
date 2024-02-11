import runGameEngine from '../index.js';
import { generateNumber, randomChoice } from '../utils.js';

const description = 'What is the result of the expression?';

const calculateResult = (number1, number2, action) => {
  switch (action) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return 'unknown operator';
  }
};

const brainCalc = () => {
  const number1 = generateNumber(1, 10);
  const number2 = generateNumber(1, 10);
  const operators = ['+', '-', '*'];
  const action = randomChoice(operators);
  const question = `${number1} ${action} ${number2}`;
  const answer = calculateResult(number1, number2, action);
  const textAnswer = answer.toString();
  return [question, textAnswer];
};

const runGame = () => (runGameEngine(description, brainCalc));

export default runGame;
