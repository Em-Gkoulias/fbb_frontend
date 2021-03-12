import React, {useEffect, useState} from 'react';
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import CreatePost from './CreatePost';
import ShowPost from './ShowPost';

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
        window.location.href = "http://localhost:3000/login";
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path="/posts/:id">
          <ShowPost />
        </Route>
        <Route path="/posts/create">
          <CreatePost user={user} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default Main;
