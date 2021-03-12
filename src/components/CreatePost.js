import { useState } from "react";

import axios from "axios";

import "../styles/CreatePost.scss";

const CreatePost = ({ user }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState();

  const clickHandler = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", title);
    data.append("file", file);
    data.append("user_id", user.id);
    data.append("username", user.username);
    
    console.log(data);
    // axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:3001/posts", data)
      .then((res) => {
        console.log(res);
        window.location.href = "http://localhost:3000/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="createPost">
      <h1>create your meme</h1>
      <form encType="multipart/form-data">
        <div>
          <label htmlFor="title">title: </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">meme: </label>
          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit" onClick={clickHandler}>
          submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
