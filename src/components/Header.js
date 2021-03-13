import { useState, uesEffect } from "react";
import { Link } from "react-router-dom";

// import Logout from "./Logout";

import "../styles/Header.scss";
import astronaut from "../svg/astronaut.svg";
import axios from "axios";

const Header = () => {
  const [hidden, setHidden] = useState(true);

  const clickLogout = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/logout")
      .then((res) => {
        console.log(res);
        window.location.href = "http://localhost:3000/login";
      })
      .catch((err) => console.log(err));
  };

  const toggleHidden = (e) => {
    e.preventDefault();
    if (hidden) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  return (
    <div className="header">
      <div>
        <h1>
          <Link to="/">ducky</Link>
        </h1>
        <button className="logo" type="submit" onClick={toggleHidden}>
          <img src={astronaut} alt="user icon" style={{ height: "100%" }} />
        </button>
        {hidden == false ? (
          <div className="dropdown">
            <Link className="profile" >
              profile
            </Link>
            <button className="logout" onClick={clickLogout}>
              logout
            </button>
          </div>
        ) : null }
      </div>
    </div>
  );
};

export default Header;
