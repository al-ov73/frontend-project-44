import readlineSync from 'readline-sync';

const get_gcd = (x, y) => {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

const brainGcd = () => {
  const startQuestion = 'Find the greatest common divisor of given numbers.';
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = get_gcd(firstNumber, secondNumber);

  const textAnswer = answer.toString();
  return [startQuestion, question, textAnswer];
};


export default brainGcd;
