import { Link } from "react-router-dom";

import "../styles/Register.scss";

const Register = (params) => {
  return (
    <>
      <header>
        <h1>fbb</h1>
      </header>
      <form action="">
        <div className="inputs">
          <div>
            <label htmlFor="">username</label>
            <label htmlFor="">email</label>
            <label htmlFor="">password</label>
            <label htmlFor="">confirm password</label>
          </div>
          <div>
            <input type="text" name="" id="" />
            <input type="text" />
            <input type="text" />
            <input type="text" name="" id="" />
          </div>
        </div>
        <button type="submit">log in</button>
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
