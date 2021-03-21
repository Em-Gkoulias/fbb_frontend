import { useState, useEffect } from "react";
import axios from "axios";

import '../styles/Comment.scss';

const Comment = ({ text, userId }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${userId}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data.username);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="comment">
      <h4>{user}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Comment;
