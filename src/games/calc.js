import runGameEngine from '../index.js';
import generateNumber from '../utils.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return `${operator} - unknown operator`;
  }
};

const generateRound = () => {
  const number1 = generateNumber(1, 10);
  const number2 = generateNumber(1, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[generateNumber(-0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(number1, number2, operator);
  const textAnswer = answer.toString();
  return [question, textAnswer];
};

const runGame = () => (runGameEngine(description, generateRound));

export default runGame;
