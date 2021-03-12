import { useEffect, useState } from "react";
import axios from "axios";

import "../styles/ShowPost.scss";

const ShowPost = () => {
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf("/") + 1);

  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="showPost">
      <h2>{post.title}</h2>
      <img src={`http://localhost:3001/static/${post.meme}`} alt="image" />
      <h3>{post.username}</h3>
    </div>
  );
};

export default ShowPost;
