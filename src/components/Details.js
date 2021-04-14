import { useEffect, useState } from "react";
import upArrow from "../svg/up-arrow.svg";
import downArrow from "../svg/down-arrow.svg";
import comment from "../svg/comment.svg";
import axios from "axios";

const Details = ({ postId, userId, postVotes }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [voted, setVoted] = useState(false);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [voteId, setVoteId] = useState("");

  const handleUpvoteClick = (e) => {
    e.preventDefault();

    if (voted) {
      if (upvoted) {
        axios
          .delete(`http://localhost:3001/votes/${voteId}/${postId}`)
          .then((res) => {
            console.log(res.data);
            setVoted(false);
            setUpvoted(false);
          })
          .catch((err) => console.log(err));
      } else {
        axios
          .patch(`http://localhost:3001/votes/${voteId}`, {
            upvote: true,
            downvote: false,
          })
          .then((res) => {
            console.log(res.data);
            setUpvoted(true);
            setDownvoted(false);
            // setIsVoted(true);
          })
          .catch((err) => console.log(err));
      }
    } else {
      axios
        .post("http://localhost:3001/votes", {
          post: postId,
          user: userId,
          upvote: true,
          downvote: false,
        })
        .then((res) => {
          console.log(res.data);
          setVoted(true);
          setUpvoted(true);
          // setDownvoted(false);
          setVoteId(res.data._id);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleDownvoteClick = (e) => {
    e.preventDefault();

    if (voted) {
      if (downvoted) {
        axios
          .delete(`http://localhost:3001/votes/${voteId}/${postId}`)
          .then((res) => {
            console.log(res.data);
            setVoted(false);
            setDownvoted(false);
          })
          .catch((err) => console.log(err));
      } else {
        axios
          .patch(`http://localhost:3001/votes/${voteId}`, {
            upvote: false,
            downvote: true,
          })
          .then((res) => {
            console.log(res.data);
            setDownvoted(true);
            setUpvoted(false);
            // setIsVoted(true);
          })
          .catch((err) => console.log(err));
      }
    } else {
      axios
        .post("http://localhost:3001/votes", {
          post: postId,
          user: userId,
          upvote: false,
          downvote: true,
        })
        .then((res) => {
          console.log(res.data);
          setVoted(true);
          setDownvoted(true);
          // setUpvoted(false);
          setVoteId(res.data._id);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    // check if the userId is inside the votes list of this post
    postVotes.map((vote) => {
      if (vote.user == userId) {
        setVoted(true);
        if (vote.upvote) {
          setUpvoted(true);
          setVoteId(vote._id);
        } else {
          setDownvoted(true);
          setVoteId(vote._id);
        }
      }
    });
    console.log(voted);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <p>6,250 points - 262 comments</p>
        <div className="icons">
          <img
            className={upvoted ? "voted" : "icon"}
            src={upArrow}
            alt=""
            onClick={handleUpvoteClick}
          />
          <img
            className={downvoted ? "voted" : "icon"}
            src={downArrow}
            alt=""
            onClick={handleDownvoteClick}
          />
          <img className="icon" src={comment} alt="" />
        </div>
      </div>
    );
  }
};

export default Details;
