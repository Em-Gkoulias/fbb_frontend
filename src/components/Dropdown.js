import { Link } from 'react-router-dom';

const Dropdown = () => {
  return (
    <div className="dropdown">
      <Link className="profile">profile</Link>
      <button className="logout" onClick={clickLogout}>
        logout
      </button>
    </div>
  );
}

export default Dropdown;