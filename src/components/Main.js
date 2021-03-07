import React, {useEffect, useState} from 'react';
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";

import Header from './Header';
import Footer from './Footer';

import '../styles/Main.scss';

const Main = () => {
  let [user, setUser] = useState({})

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:3001/user")
      .then((res) => {
        console.log(res.data)
        if (res.data === '') {
          window.location.href = "http://localhost:3000/login";
        }
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [])

  const clickHandler = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:3001/logout")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Switch>
        <Route>
          <Header />
          <h2>WELCOME TO THE MAIN PAGE</h2>

          <h4>Welcome back {user.username}</h4>
          <Link to="/register">register</Link>
          <button onClick={clickHandler}>log out</button>
          <Footer />
        </Route>
      </Switch>
    </>
  );
};

export default Main;
