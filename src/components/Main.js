import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import CreatePost from "./CreatePost";
import ShowPost from "./ShowPost";

import "../styles/Main.scss";

const Main = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:3001/user")
      .then((res) => {
        console.log(res.data);
        if (res.data === "") {
          window.location.href = "http://localhost:3000/login";
        }
        setUser(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="main">
        <Header />
        <Switch>
          <Route path="/posts/create" exact>
            <CreatePost user={user} />
          </Route>
          <Route path="/posts/:id" exact>
            <ShowPost />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
};

export default Main;
