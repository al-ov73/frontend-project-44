import readlineSync from 'readline-sync';

const brainEven = () => {
  const startQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomNumber = Math.floor(Math.random() * 100);

  let questionParity = 'no';
  if ((randomNumber % 2) === 0) {
    questionParity = 'yes';
  };
  return [startQuestion, randomNumber, questionParity];
};


export default brainEven;
