import { useEffect } from "react"

export const Message = () => {


  useEffect(() => {
    console.log('Message writed');
  
    return () => {
      console.log('Message deleted');
    }
  }, [])
  

    return (
      <>
          <h3>User already exist</h3>
      </>
    )
}