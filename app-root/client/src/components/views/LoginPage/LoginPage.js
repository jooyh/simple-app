import React, { useState } from "react"
import Axios from "axios"
import { useDispatch } from "react-redux"
import { loginUser } from "../../../_actions/user_action"

export default function LoginPage() {
  const [Id, setId] = useState("")
  const [Password, setPassword] = useState("")
  const dispatch = useDispatch

  const onEmailHanler = (event) => {
    setId(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    let body = {
      admId: Id,
      admPw: Password,
    }
    dispatch(loginUser(body))
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={onSubmitHandler}>
        <label>ID</label>
        <input type="text" value={Id} onChange={onEmailHanler}></input>
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler}></input>
        <br></br>
        <button>Login</button>
      </form>
    </div>
  )
}
