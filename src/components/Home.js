import axios from "axios";
import { useEffect, useState } from "react";
import { Swirch, Route, Link } from "react-router-dom";

import "../styles/Home.scss";
import Details from "./Details";

const Home = ({userId}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // axios.defaults.withCredentials;
    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    
    <div className="home">
      <Link to="posts/create">create post</Link>
      <ul>
        {posts.map((post) => {
          return (
            <div className="post">
              <p>category - 8h</p>
              <h4 className="postsTitle">{post.title}</h4>
              <Link to={`/posts/${post._id}`}>
                <img
                  className="meme"
                  src={`http://localhost:3001/static/${post.meme}`}
                  alt="image"
                />
              </Link>
              <Details postId={post._id} userId={userId} postVotes={post.votes} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
