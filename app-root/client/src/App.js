import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import LandigPage from "./components/views/LandingPage/LandigPage"
import LoginPage from "./components/views/LoginPage/LoginPage"
import RegistPage from "./components/views/RegistPage/RegistPage"
import Auth from "./hoc/auth"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandigPage, true)} />
          <Route path="/login" component={Auth(LoginPage, false)} />
          <Route path="/regist" component={Auth(RegistPage, false)} />
        </Switch>
      </div>
    </Router>
  )
}
export default App
