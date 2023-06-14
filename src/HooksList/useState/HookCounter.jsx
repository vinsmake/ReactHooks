import { useState } from "react";

export const HookCounter = () => {


    const [Counter, setCounter ] = useState({
      counterSum: 1,
      counterMul: 1,
      counterPor: 1
    });

    const {counterSum, counterMul, counterPor: counterPor} = Counter;

    return (
      <>
          <h2>Counter App</h2>
          <h3>Using useState Hook</h3>
          <h4>Summation: {counterSum}</h4>
          <h4>Multiply: {counterMul}</h4>
          <h4>150 Percent: {counterPor}</h4>
          <div>
            <button className="btn error-box" onClick={()=> setCounter({

            counterSum: counterSum -1,
            counterMul: counterMul /2,
            counterPor: counterPor / 1.5


            })}>-</button>

            <button className="btn warning-box" onClick={()=> setCounter({

            counterSum: 1,
            counterMul: 1,
            counterPor: 1

            })}>Reset</button>

            <button className="btn success-box" onClick={()=> setCounter({
              
            counterSum: counterSum +1,
            counterMul: counterMul *2,
            counterPor: counterPor * 1.5

            })}>+</button>
          </div>

      </>
    )
}