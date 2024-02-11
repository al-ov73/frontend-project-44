import readlineSync from 'readline-sync';

const gamesCount = 3;

const runGameEngine = (description, gameFunc) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < gamesCount; i += 1) {
    const [question, rightAnswer] = gameFunc();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer !== rightAnswer) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGameEngine;
