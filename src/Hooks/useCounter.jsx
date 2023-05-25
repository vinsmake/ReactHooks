import { useState } from "react";


export const useCounter = (myInitialValue = 0) => {

    const [counter, setCounter ] = useState(myInitialValue);

    const sub = (value) => {
        setCounter(counter - value)
    }

    const res = () => {
        setCounter(myInitialValue)
    }

    const sum = (value) => {
        setCounter(counter + value)
    }

    return {
        counter,
        sub,
        res,
        sum
    }
}