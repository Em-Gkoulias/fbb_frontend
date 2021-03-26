import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../styles/Register.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    // axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:3001/user")
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          window.location.href = "http://localhost:3000/";
        }
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:3001/users", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        window.location.href = "http://localhost:3000/login";
      })
      .catch((err) => {
        console.log(err);
        // window.location.href = "http://localhost:3000/register";
      });
  };

  return (
    <>
      <header>
        <h1>fbb</h1>
      </header>
      <form onSubmit={submitHandler}>
        <div className="inputs">
          <div>
            <label htmlFor="">username</label>
            <label htmlFor="">email</label>
            <label htmlFor="">password</label>
            <label htmlFor="">confirm password</label>
          </div>
          <div>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
            />
          </div>
        </div>
        <button type="submit">
          sign in
        </button>
      </form>
      <p>
        if you have an account already, then <Link to="/login">click here</Link>{" "}
        to login
      </p>
      <footer>cause peace was never an option</footer>
    </>
  );
};

export default Register;
