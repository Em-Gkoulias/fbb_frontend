import axios from "axios";
import { useEffect, useState } from "react";
import { Swirch, Route, Link } from "react-router-dom";

import "../styles/Home.scss";

// import duck from "../images/index.png";

const Home = () => {
  // const [user, setUser] = useState({})
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
              <div>
                <h4 className="postsTitle">{meme.title}</h4>
                <Link to={`/posts/${meme._id}`}>
                  <img
                    src={`http://localhost:3001/static/${meme.meme}`}
                    alt="image"
                    style={{ minHeight: "300px", width: "300px" }}
                  />
                </Link>
              </div>
              <div className="postsUser">{meme.username}</div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
