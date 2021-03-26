import axios from "axios";
import { useState, useEffect } from "react";
import downArrow from "../svg/down-arrow.svg";

const Downvote = ({ postId, userId, voted }) => {
  const [downvoted, setDownvoted] = useState(false);

  const clickDownvoteHandler = () => {
    axios
      .post(`http://localhost:3001/votes/${postId}`, {
        user: userId,
        upvote: false,
        downvote: true,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    voted.map((post) => {
      if (post.downvote) {
        setDownvoted(true);
      }
      console.log(post.upvote);
    });
  }, []);

  return (
    <img
      className={downvoted ? "voted" : "icon"}
      src={downArrow}
      alt=""
      onClick={clickDownvoteHandler}
    />
  );
};

export default Downvote;
