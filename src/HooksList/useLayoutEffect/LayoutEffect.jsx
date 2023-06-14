import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import { Quote, LoadingQuote } from "../examples";


export const LayoutEffect = () => {


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
            isLoading ? 
            <LoadingQuote/>
            /* else() */
            :<Quote quote={quote} author={author}/>
        }

        {/* button will not work if isLoading */}
        <button disabled={isLoading} onClick={() => sum(1)} className="btn warning-box">Next Quote</button>
      </>
    )
}