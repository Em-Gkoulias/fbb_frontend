import '../styles/Header.scss';
import astronaut from "../svg/astronaut.svg";

const Header = (params) => {
  return (
    <div className="header">
      <h1>ducky</h1>
      <img src={astronaut} alt="user icon" style={{ height: "40px" }} />
    </div>
  );
};

export default Header;
