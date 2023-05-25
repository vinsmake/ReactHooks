import { useCounter } from "../../Hooks/useCounter"

export const CustomCounter = () => {

  //we use {} because we're returning an object, if it would be, for example an array, it would be [] instead.
  const { counter, sub, res, sum  } = useCounter();

    return (
      <>
          <h2>Counter App</h2>
          <h3>Using Custom Hook</h3>
          <h4>Counter: {counter}</h4>
          <div>
            <button className="btn error-box" onClick={() => sub(5)}>-1</button>
            <button className="btn warning-box" onClick={res}>Reset</button>
            <button className="btn success-box" onClick={() => sum(5)}>+1</button>
          </div>
      </>
    )
}