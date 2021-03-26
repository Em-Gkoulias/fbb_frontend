import { useEffect, useState } from "react";
import axios from "axios";
import upArrow from "../svg/up-arrow.svg";

const Upvote = ({postId, userId, voted}) => {
  const [upvoted, setUpvoted] = useState(false);

  const clickUpvoteHandler = () => {
    axios
      .post(`http://localhost:3001/votes/${postId}`, {
        user: userId,
        upvote: true,
        downvote: false,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    voted.map((post) => {
      if (post.upvote) {
        setUpvoted(true);
      }
      console.log(post.upvote)
    })
  }, [])

  return (
    <img
      className={upvoted ? 'voted' : 'icon'}
      src={upArrow}
      alt=""
      onClick={clickUpvoteHandler}
    />
  );
};

export default Upvote;
