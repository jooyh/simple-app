import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from "../../../_actions/user_action"
import { withRouter } from "react-router-dom"

function LoginPage(props) {
  const [Id, setId] = useState("")
  const [Password, setPassword] = useState("")
  const dispatch = useDispatch()

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
    dispatch(loginUser(body)).then((response) => {
      console.log(response)
      if (response.payload.code === 0) {
        props.history.push("/")
      } else {
        alert(response.payload.msg)
      }
    })
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

export default withRouter(LoginPage)
