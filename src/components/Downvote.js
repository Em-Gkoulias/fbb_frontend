import axios from "axios";
import { useState, useEffect } from "react";
import downArrow from "../svg/down-arrow.svg";

const Downvote = ({ postId, userId, postVotes }) => {
  const downvoted = false;

  const clickDownvoteHandler = () => {

  };

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
