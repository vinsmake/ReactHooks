import { useEffect, useState } from "react";
import { Message } from "./Message";


export const HookForm = () => {


  const [formState, setFormState ] = useState({
    username: 'vinsmake',
    email: "ps.enrique.e@gmail.com"
  });

  const {username, email} = formState;


  const onInputChange = ({target}) => {
    const {name, value} = target
    setFormState({
      //we destructure formState to mantain the form values
      ...formState,
      //then, we change what is bein modofied in name to the value propierty (This could mean: name=username/email value=vinsmake/vinsmake@mail.com)
      [name]: value
    })
  }


  useEffect(() => {
    console.log("useEffect called");
  }, [formState]);
  

    return (
      <>
          <h2>Form</h2>
          <h3>Using useEffect Hook</h3>
          <div className="form">
            <input
              type="text"
              className="form--input"
              placeholder="Username"
              name="username"
              value={username}
              onChange={onInputChange}
              ></input>

            <input
              type="email"
              className="form--input"
              placeholder="username@mail.com"
              name="email"
              value={email}
              onChange={onInputChange}
              ></input>
          </div>

          {/* If (username === vinsmake ) {<Message/>} */}
          {
          (username === 'vinsmake') && <Message></Message>
          }
      </>
    )
}