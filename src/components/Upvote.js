import { useEffect, useState } from "react";
import axios from "axios";
import upArrow from "../svg/up-arrow.svg";

const Upvote = ({
  postId,
  userId,
  voted,
  upvoted,
  downvoted,
  voteId,
}) => {
  const [isVoted, setIsVoted] = useState(voted);
  const [isUpvoted, setIsUpvoted] = useState(upvoted);
  const [votesId, setVotesId] = useState(voteId);

  const clickUpvoteHandler = (e) => {
    e.preventDefault();
    // console.log(votesId)

    // first we check if the comment is voted
    if (isVoted) {
      // since it is, we need to find if it is upvoted, or downvoted

      // if the post is already upvoted then we delete the vote
      if (isUpvoted) {
        axios
          .delete(`http://localhost:3001/votes/${voteId}/${postId}`)
          .then((res) => {
            console.log(res.data);
            setIsUpvoted(false);
            setIsVoted(false);
          })
          .catch((err) => console.log(err));
      } else {
        // since the post is not upvoted, that means it is downvoted. so we need to patch the vote
        axios
          .patch(`http://localhost:3001/votes/${voteId}`, {
            upvoted: true,
            downvoted: false,
          })
          .then((res) => {
            console.log(res.data);
            setIsUpvoted(true);
            // setIsVoted(true);
          })
          .catch((err) => console.log(err));
      }
    } else {
      // since it is not voted at all, we need to post a new vote
      axios
        .post("http://localhost:3001/votes", {
          post: postId,
          user: userId,
          upvote: true,
          downvote: false,
        })
        .then((res) => {
          console.log(res.data);
          setIsUpvoted(true);
          setIsVoted(true);
          setVotesId(res.data._id);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    console.log(isUpvoted)
  }, [])

  return (
    <img
      className={isUpvoted ? "voted" : "icon"}
      src={upArrow}
      alt=""
      onClick={clickUpvoteHandler}
    />
  );
};

export default Upvote;
