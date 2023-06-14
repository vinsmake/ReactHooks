import { useRef } from "react"

export const FocusScreen = () => {


const inputRef = useRef();
const btnClick = () => {
    inputRef.current.select();
}

    return (
      <>
        <h1>Focus Screen with useRef</h1>
        {/* ref={inputRef} sends the element to the useRef's inputRef variable */}
        <input
        ref={inputRef}
        className="form--input"
        type="text"
        placeholder="Write your name"
        ></input>

        <button
        className="btn warning-box"
        onClick={btnClick}
        >Set Focus</button>
      </>
    )
}

