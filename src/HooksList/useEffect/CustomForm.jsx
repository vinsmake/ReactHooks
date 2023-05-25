import { useEffect, useState } from "react";
import { useForm } from "../../Hooks/useForm";



export const CustomForm = () => {

  const {onInputChange, onResetForm, username, email, password} = useForm(
    {
      username: '',
      email: '',
      password: ''
    } 
  );

    return (
      <>
          <h2>Form</h2>
          <h3>Using Custom Hook</h3>
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
              placeholder="user@gmail.com"
              name="email"
              value={email}
              onChange={onInputChange}
              ></input>

            <input
              type="password"
              className="form--input"
              placeholder="password"
              name="password"
              value={password}
              onChange={onInputChange}
              ></input>

              <button
              className="btn warning-box" onClick={onResetForm}
              >Reset</button>
          </div>

      </>
    )
}