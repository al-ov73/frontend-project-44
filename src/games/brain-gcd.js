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

const brainGcd = () => {
  const startQuestion = 'Find the greatest common divisor of given numbers.';
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber);

  const textAnswer = answer.toString();
  return [startQuestion, question, textAnswer];
};

export default brainGcd;
