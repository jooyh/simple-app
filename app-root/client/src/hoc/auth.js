import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { auth } from "../_actions/user_action"

export default function (SpecificComponent, option, adminRoute = null) {
  /**
   * option
   *
   * null  => anyone
   * true  => only did login
   * false => only did not login
   *
   * adminRoute
   *
   * true => only admin
   *
   */

  function AuthenticationCheck(props) {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log("TEST....", response.payload.result)
        if (!response.payload.result) {
          //로그인 하지 않은 상태
          if (option) {
            alert("로그인 후 이용해 주세요")
            props.history.push("/login")
          }
        } else {
          //로그인 한 상태
          if (adminRoute && response.payload.result.admType !== "S") {
            props.history.push("/")
          } else {
            if (option === false) {
              props.history.push("/")
            }
          }
        }
      })
    }, [])

    return <SpecificComponent />
  }

  return AuthenticationCheck
}
