import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import LandigPage from "./components/views/LandingPage/LandigPage"
import LoginPage from "./components/views/LoginPage/LoginPage"
import RegistPage from "./components/views/RegistPage/RegistPage"
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandigPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/regist" component={RegistPage} />
        </Switch>
      </div>
    </Router>
  )
}
export default App
