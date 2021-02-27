import { Link } from "react-router-dom";

import "../styles/Login.scss";

const Login = (params) => {
  return (
    <>
      <header>
        <h1>fbb</h1>
      </header>
      <form action="">
        <div className="inputs">
          <div>
            <label htmlFor="">email</label>
            <label htmlFor="">password</label>
          </div>
          <div>
            <input type="text" />
            <input type="text" />
          </div>
        </div>
        <button type="submit">log in</button>
      </form>
      <p>
        if you don't have an account already, you can{" "}
        <Link to="/register">register here</Link>
      </p>
      <footer>cause peace was never an option</footer>
    </>
  );
};

export default Login;
