import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../styles/Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:3001/user")
      .then((res) => {
        if (res.data) {
          window.location.href = "http://localhost:3000/";
        }
        console.log(res.data);
        setUser(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const clickHandler = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:3001/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        window.location.href = "http://localhost:3000/";
      })
      .catch((err) => console.log(err));
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <header>
          <h1>fbb</h1>
        </header>

        <form action="">
          <div className="inputs">
            {console.log(user)}
            {/* <h1>user: {user.username}</h1> */}
            <div>
              <label htmlFor="">username</label>
              <label htmlFor="">password</label>
            </div>
            <div>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" onClick={clickHandler}>
            log in
          </button>
        </form>
        <p>
          if you don't have an account already, you can{" "}
          <Link to="/register">register here</Link>
        </p>
        {/* <Link to="/">main</Link> */}
        <footer>cause peace was never an option</footer>
      </>
    );
  }
};

export default Login;
