import './App.css';
import {useState} from "react";

const operandVariants = ['+', '-', '*']; // 0 1 2

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getOperand = () => operandVariants[random(0, 2)];
const randomNumber = () => random(0, 144);

const calculate = (n1, n2, opeand) => {
  if(opeand === '+') return n1 + n2;
  if(opeand === '-') return n1 - n2;
  if(opeand === '*') return n1 * n2;
}

function App() {

  const n1Initial = randomNumber();
  const n2Initial = randomNumber();
  const operandInitial = getOperand();

  const [n1, setN1] = useState(n1Initial);
  const [n2, setN2] = useState(n2Initial);
  const [operand, setOperand] = useState(operandInitial);
  const [result, setResult] = useState(calculate(n1Initial, n2Initial, operandInitial));
  const [answer, setAnswer] = useState('');
  const [resolution, setResolution] = useState();
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const shake = () => {
    const n1 = randomNumber();
    const n2 = randomNumber();
    const operand = getOperand();

    setOperand(operand);
    setN1(n1);
    setN2(n2);
    setResult(calculate(n1, n2, operand));
  };

  const check = () => {
    if (answer === result) {
      setResolution('Correct!');
      positiveCounter();
    } else {
      setResolution('Incorrect!');
      negativeCounter();
    }

    shake();
    setAnswer('')
  }

  const positiveCounter = () => {
    setCorrect(correct + 1);
  }

  const negativeCounter = () => {
    setIncorrect(incorrect - 1);
  }

  return (
      <div className="App">

        {n1} {operand} {n2} = <input type={'number'}
                                    value={answer} onChange={e => setAnswer(+e.target.value)}/>
        <button onClick={check}>Check</button>

        <hr/>
        {resolution}
        <button onClick={shake}>Shake</button>

        <hr/>
        Correct answers: {correct} | Incorrect answers: {incorrect}
      </div>
  );
}

export default App;
