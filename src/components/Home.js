import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

import "../styles/Home.scss";

// import duck from "../images/index.png";

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
          console.log(meme)
          return (
            <div className="post">
              <div>
                <h4 className="postsTitle">{meme.title}</h4>
                <img src={`http://localhost:3001/static/${meme.meme}`} alt="image" />
                {/* <div className="postsMeme">{meme.meme}</div> */}
              </div>
              <div className="postsUser">{meme.user}</div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
