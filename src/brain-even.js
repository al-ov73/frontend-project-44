import readlineSync from 'readline-sync';

const gamesNumbers = 3;

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let count = 0;
  while (count < gamesNumbers) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answerParity = readlineSync.question('Your answer: ');

    let questionParity = 'no';
    if ((randomNumber % 2) === 0) {
      questionParity = 'yes';
    }

    if (questionParity === answerParity) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${answerParity} is wrong answer ;(. Correct answer was ${questionParity}.`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
