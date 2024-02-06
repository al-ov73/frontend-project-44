import readlineSync from 'readline-sync';

const randomChoice = (arr) => {
    return arr[Math.floor(arr.length * Math.random())];
};

const brainEven = () => {
  const startQuestion = 'What is the result of the expression?';
  const firstNumber = Math.floor(Math.random() * 10);
  const secondNumber = Math.floor(Math.random() * 10);
  const actionList = ['+', '-', '*'];
  const action = randomChoice(actionList);
  const question = `${firstNumber} ${action} ${secondNumber}`;
  let answer;
  if (action === '+') {
    answer = firstNumber + secondNumber;
  } else if (action === '-') {
    answer = firstNumber - secondNumber;
  } else {
    answer = firstNumber * secondNumber;
  }
  const textAnswer = answer.toString();
  return [startQuestion, question, textAnswer];
};


export default brainEven;
