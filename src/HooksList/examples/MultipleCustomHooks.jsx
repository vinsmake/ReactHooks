import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch"

export const MultipleCustomHooks = () => {


  const {counter, sum} =  useCounter(1);

    const { data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

    /* !!data mean "if data have a valor" && "then" data[0] take the 0 element of the array */
    const {author, quote} = !!data && data[0];



    
    
      
    
    
    

    return (
      <>
          <h1>Breaking Bad Quotes Api</h1>
          <hr/>
          {
            /* if is loading () */
            isLoading ? (
                <h4 className="success-box">loading...</h4>
            )
            /* else() */
            : (
            <>
                <h4>{quote}</h4>
                <h5>{author}</h5>
            </>
            )
        }
        {/* button will not work if isLoading */}
        <button disabled={isLoading} onClick={() => sum(1)} className="btn warning-box">Next Quote</button>
      </>
    )
}