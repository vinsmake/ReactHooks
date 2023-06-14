import { memo } from "react";

export const ShowIncrement = memo(({increment}) => {

    console.log("Me he vuelto a generar");
    
    return (
      <>
          <button
          className="btn warning-box"
          onClick={() => {
            increment(3);
          }}
          >
            Increment
          </button>
      </>
    )
})