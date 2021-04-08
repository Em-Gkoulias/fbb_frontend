import { useEffect, useState } from "react";
import upArrow from "../svg/up-arrow.svg";
import downArrow from "../svg/down-arrow.svg";
import comment from "../svg/comment.svg";
import Upvote from "./Upvote";
import Downvote from "./Downvote";
import axios from "axios";

const Details = ({ postId, userId, postVotes }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [voted, setVoted] = useState(false);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [voteId, setVoteId] = useState("");

  const handleUpvoteClick = (e) => {
    e.preventDefault();

    if (upvoted) {
      setUpvoted(false);
    } else {
      setDownvoted(false);
      setUpvoted(true);
    }
  }

  const handleDownvoteClick = (e) => {
    e.preventDefault();

    if (downvoted) {
      setDownvoted(false)
    } else {
      setUpvoted(false);
      setDownvoted(true);
    }
  };

  useEffect(() => {
    // check if the userId is inside the votes list of this post
    postVotes.map((vote) => {
      if (vote.user == userId) {
        setVoted(true);
        if (vote.upvote) {
          setUpvoted(true);
          // setVoteId(vote._id);
        } else {
          setDownvoted(true);
          // setVoteId(vote._id);
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
          <img className={upvoted ? "voted" : "icon"} src={upArrow} alt="" onClick={handleUpvoteClick} />
          <img className={downvoted ? "voted" : "icon"} src={downArrow} alt="" onClick={handleDownvoteClick} />



          
          {/* <Upvote
            postId={postId}
            userId={userId}
            postVotes={postVotes}
            voted={voted}
            upvoted={upvoted}
            downvoted={downvoted}
            voteId={voteId}
          /> */}
          {/* <Downvote
            postId={postId}
            userId={userId}
            postVotes={postVotes}
            voted={voted}
            upvoted={upvoted}
            downvoted={downvoted}
            voteId={voteId}
          /> */}
          <img className="icon" src={comment} alt="" />
        </div>
      </div>
    );
  }
};

export default Details;
