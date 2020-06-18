import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { registUser } from "../../../_actions/user_action"
import { withRouter } from "react-router-dom"

function RegistPage(props) {
  const dispatch = useDispatch()
  const [Id, setId] = useState("")
  const [Password, setPassword] = useState("")
  const [Email, setEmail] = useState("")
  const [Name, setName] = useState("")
  const [ConfPassword, setConfPassword] = useState("")

  const onEmailHanler = (event) => {
    setEmail(event.currentTarget.value)
  }
  const onNameHanler = (event) => {
    setName(event.currentTarget.value)
  }
  const onIdHanler = (event) => {
    setId(event.currentTarget.value)
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }
  const onConfPasswordHandler = (event) => {
    setConfPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()

    if (Password !== ConfPassword) {
      return alert("비밀번호와 비밀번호 확인은 동일해야 합니다.")
    }

    let body = {
      admId: Id,
      admPw: Password,
      admEmail: Email,
      admName: Name,
    }
    dispatch(registUser(body)).then((response) => {
      console.log(response)
      if (response.payload.code === 0) {
        props.history.push("/login")
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
        <input type="text" value={Id} onChange={onIdHanler}></input>
        <label>E-Mail</label>
        <input type="email" value={Email} onChange={onEmailHanler}></input>
        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHanler}></input>
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler}></input>
        <label>Confirm Password</label>
        <input type="password" value={ConfPassword} onChange={onConfPasswordHandler}></input>
        <br></br>
        <button>회원가입</button>
      </form>
    </div>
  )
}

export default withRouter(RegistPage)
