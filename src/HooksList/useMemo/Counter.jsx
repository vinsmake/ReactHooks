import { memo } from "react";

export const Counter = memo(({value}) => {


  console.log("Something changed");


    return (
      <>
          <span>{value}</span>
      </>
    )
})