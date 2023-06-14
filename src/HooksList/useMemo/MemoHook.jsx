import { useMemo, useState } from "react";
import { useCounter } from "../../Hooks/useCounter"
import { Counter } from "./Counter";


const heavyStuff = (iterationNumber = 10) => {
  for (let index = 0; index < iterationNumber; index++){
    console.log('Iterando');
  }

  return `${iterationNumber} iteraciones realizadas`;

}

export const MemoHook = () => {


    const {counter, sum} = useCounter(10);
    const [show, setShow ] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);


    return (
      <>
          <h1>Counter with Custom Memo</h1>
          <p>You can se a console log with "something changed" every time the component re-renders. If the component doesn't change, it doesn't renders again</p>
          <h4>Counter: 
          <Counter value={counter}></Counter>
          </h4>
          <h4>{memorizedValue}</h4>
          <button
          className="btn warning-box"
          onClick={() => sum(1)}>
            +1
          </button>

          <button
          className="btn warning-box"
          onClick={() => setShow(!show)}
          >
          any change? {JSON.stringify(show)}
          </button>
      </>
    )
}