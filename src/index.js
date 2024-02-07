import readlineSync from 'readline-sync';

const gamesNumbers = 3;

const gameEngine = (gameFunc) => {
  const startVars = gameFunc();
  const startQuestion = startVars[0];
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  console.log(startQuestion);

  let count = 0;
  while (count < gamesNumbers) {
    const vars = gameFunc();
    const question = vars[1];
    const rightAnswer = vars[2];

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === rightAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
