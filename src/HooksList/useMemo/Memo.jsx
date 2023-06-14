import { useState } from "react";
import { useCounter } from "../../Hooks/useCounter"
import { Counter } from "./Counter";

export const Memo = () => {


    const {counter, sum} = useCounter(1);
    const [show, setShow ] = useState(true);


    return (
      <>
          <h1>Counter with Memo Hook</h1>
          <p>You can se a console log with "something changed" every time the component re-renders. If the component doesn't change, it doesn't renders again</p>
          <h4>Counter: 
          <Counter value={counter}></Counter>
          </h4>
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