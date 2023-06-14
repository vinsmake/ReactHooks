import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({quote, author}) => {


  const pRef = useRef();
  const [boxSize, setBoxSize] = useState();

  useLayoutEffect(() => {
    const {length} = pRef.current.textContent;
    setBoxSize({length});
  }, [quote]);
  

    return (
      <>
        <h4 ref={pRef}>{quote}</h4>
        <h5>{author}</h5>
        <code>{JSON.stringify(boxSize)}</code>
      </>
    )
}