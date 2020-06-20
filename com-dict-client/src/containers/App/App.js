import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import './App.css'


import HomePage from "../home/home"
import SignUp from "../signup/signup";
import AddWord from "../addWord/addWord";

class App extends Component {
  render() {
    return (
      <Router>
       <Route exact path="/" component={HomePage} />
       <Route exact path="/signup" component={SignUp} />
       <Route exact path="/add" component={AddWord} />
      </Router>

    );
  }
}

export default App;
