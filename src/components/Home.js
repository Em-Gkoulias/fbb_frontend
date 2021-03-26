import axios from "axios";
import { useEffect, useState } from "react";
import { Swirch, Route, Link } from "react-router-dom";

import "../styles/Home.scss";
import Details from "./Details";

const Home = ({userId}) => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    // axios.defaults.withCredentials;
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
              <Details postId={meme._id} userId={userId} postVotes={meme.votes} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
