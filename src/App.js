import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import axios from 'axios'

import Login from "./components/Login";
import Register from "./components/Register";
import Main from './components/Main';
// import Header from "./components/Header";
// import Footer from "./components/Footer";

import "./App.scss";

function App() {

  // let [user, setUsers] = useState({});

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/user")
  //     .then((res) => {
  //       console.log(res.data);
  //       if (res.data === "") {
  //         window.location.href = "http://localhost:3000/login";
  //       } else {
  //         setUsers(res.data);
  //         window.location.href = "http://localhost:3000/";
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
