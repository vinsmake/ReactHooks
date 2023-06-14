import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter ] = useState(10);


    const increment = useCallback(
      (incrementValue) => {
        console.log("increment useCallback");
        setCounter( (value) => value + incrementValue );
      },
      [],
    )
    
    


    return (
      <>
          <h1>useCallback Hook: {counter}</h1>

          <ShowIncrement increment={increment}/>
      </>
    )
}