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

const brainPrime = () => {
  const startQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const question = Math.floor(Math.random() * 99) + 1;
  let textAnswer = 'no';
  if (isPrime(question) === true) {
    textAnswer = 'yes';
  }
  return [startQuestion, question, textAnswer];
};

export default brainPrime;
