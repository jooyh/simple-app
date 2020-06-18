import React, { useEffect } from "react"
import Axios from "axios"
import { withRouter } from "react-router-dom"

export default withRouter(LandigPage)

function LandigPage(props) {
  // useEffect(() => {
  //   axios
  //     .post("/admin/loginProc", { admId: "admin", admPw: "1234" })
  //     .then((res) => console.log(res.data))
  //   axios.get("/admin/login").then((res) => console.log(res.data))
  // }, [])

  const logoutHanler = () => {
    Axios.get("/admin/logoutTemp").then((response) => {
      if (response.data.code === 0) {
        props.history.push("/login")
      } else {
        alert(response.data.msg)
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
      <h2> 시작 페이지 </h2>
      <button onClick={logoutHanler}>로그아웃</button>
    </div>
  )
}
