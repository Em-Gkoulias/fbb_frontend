import { useEffect, useState } from "react";
import axios from "axios";

import "../styles/ShowPost.scss";
import upArrow from "../svg/up-arrow.svg";
import downArrow from "../svg/down-arrow.svg";
import comment from "../svg/comment.svg";

const ShowPost = ({ user }) => {
  const url = window.location.href;
  const post_id = url.substring(url.lastIndexOf("/") + 1);

  const [post, setPost] = useState({});
  const [body, setBody] = useState("");
  const [comments, setComments] = useState([]);

  const clickHandler = (e) => {
    e.preventDefault();

    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:3001/comments", {
        body,
        user_id: user.id,
        post_id,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/${post_id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:3001/comments/${post_id}`)
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="showPost">
      <p>category - 8h</p>
      <h2>{post.title}</h2>
      <img
        className="meme"
        src={`http://localhost:3001/static/${post.meme}`}
        alt="image"
      />
      <h3>{post.username}</h3>
      <p>6,250 points - 262 comments</p>
      <div className="icons">
        <img className="icon like" src={upArrow} alt="" />
        <img className="icon dislike" src={downArrow} alt="" />
        <img className="icon" src={comment} alt="" />
      </div>
      <h4>{comments.length} comments</h4>
      <h5>add a comment</h5>
      <form className="commentForm" action="">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name="commentInput"
          id="commentInput"
          rows="5"
        ></textarea>
        <button type="submit" onClick={clickHandler}>
          submit
        </button>
      </form>
      <ul>
        {comments.map((comment) => {
          return (
            <li className="comment">
              <h5>{comment.username}</h5>
              <p>{comment.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowPost;
