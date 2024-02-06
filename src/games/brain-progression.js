const minRange = 5;
const maxRange = 12;

const brainEven = () => {
  const startQuestion = 'What number is missing in the progression?';
  const firstNumber = Math.floor(Math.random() * 20);
  const step = Math.floor(Math.random() * 10);
  const listLength = Math.floor(Math.random() * (maxRange - minRange) + minRange);
  const randomIndex = Math.floor(Math.random() * listLength);

  let numbersList = '';
  let textAnswer;

  for (let i = 0; i <= listLength; i += 1) {
    const number = firstNumber + (step * (i + 1));
    if (i === randomIndex) {
      textAnswer = number.toString();
      numbersList = `${numbersList} ...`;
    } else {
      numbersList = `${numbersList} ${number}`;
    }
  }
  const question = numbersList.trim();
  return [startQuestion, question, textAnswer];
};

export default brainEven;
