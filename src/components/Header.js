import { Link } from 'react-router-dom';

import '../styles/Header.scss';
import astronaut from "../svg/astronaut.svg";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/">ducky</Link>
      </h1>
      <img src={astronaut} alt="user icon" style={{ height: "50px" }} />
    </div>
  );
};

export default Header;
