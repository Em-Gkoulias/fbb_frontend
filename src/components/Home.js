import axios from "axios";
import { useEffect, useState } from "react";
import { Swirch, Route, Link } from "react-router-dom";

import "../styles/Home.scss";
import upArrow from "../svg/up-arrow.svg";
import downArrow from '../svg/down-arrow.svg';
import comment from "../svg/comment.svg";

const Home = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        console.log(res.data);
        setMemes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    
    <div className="home">
      <Link to="posts/create">create post</Link>
      <ul>
        {memes.map((meme) => {
          return (
            <div className="post">
              <p>category - 8h</p>
              <h4 className="postsTitle">{meme.title}</h4>
              <Link to={`/posts/${meme._id}`}>
                <img
                  className="meme"
                  src={`http://localhost:3001/static/${meme.meme}`}
                  alt="image"
                />
              </Link>
              <p>6,250 points - 262 comments</p>
              <div className="icons">
                <img className="icon like" src={upArrow} alt="" />
                <img className="icon dislike" src={downArrow} alt="" />
                <img className="icon" src={comment} alt="" />
              </div>
              {/* <div className="postsUser">{meme.username}</div> */}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
