import "./styles.css";
import { useState } from "react";
import Choice from "./Choice";

export function correctArray() {
  const trueIndex = parseInt(Math.random() * 4);
  const arr = [false, false, false, false];
  arr[trueIndex] = true;
  return arr;
}
export default function App() {
  const [score, setScore] = useState(0);
  const [value1, setValue1] = useState(parseInt(Math.random() * 15));
  const [value2, setValue2] = useState(parseInt(Math.random() * 15));
  const [anwserArr, setAnwserArr] = useState(correctArray());

  return (
    <div className="App">
      <h1>addition quiz</h1>
      <h2>
        What is {value1} + {value2}
      </h2>
      <Choice
        value1={value1}
        value2={value2}
        setValue1={setValue1}
        setValue2={setValue2}
        score={score}
        setScore={setScore}
        bool={anwserArr[0]}
        setAnwserArr={setAnwserArr}
      />
      <Choice
        value1={value1}
        value2={value2}
        setValue1={setValue1}
        setValue2={setValue2}
        score={score}
        setScore={setScore}
        bool={anwserArr[1]}
        setAnwserArr={setAnwserArr}
      />
      <Choice
        value1={value1}
        value2={value2}
        setValue1={setValue1}
        setValue2={setValue2}
        score={score}
        setScore={setScore}
        bool={anwserArr[2]}
        setAnwserArr={setAnwserArr}
      />
      <Choice
        value={value1}
        value2={value2}
        setValue1={setValue1}
        setValue2={setValue2}
        score={score}
        setScore={setScore}
        bool={anwserArr[3]}
        setAnwserArr={setAnwserArr}
      />

      <h2>score: {score}</h2>
    </div>
  );
}
