import {useEffect} from 'react';
import upArrow from "../svg/up-arrow.svg";
import downArrow from "../svg/down-arrow.svg";
import comment from "../svg/comment.svg";
import Upvote from "./Upvote";
import Downvote from "./Downvote";

const Details = ({postId, userId, postVotes}) => {
  // const [voted, setVoted] = useState('');

  // const clickUpvoteHandler = () => {
  //   axios
  //     .post(`http://localhost:3001/votes/${postId}`, {
  //       user: userId,
  //       upvote: true,
  //       downvote: false,
  //     })
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // };

  // const clickDownvoteHandler = () => {
  //   axios
  //     .post(`http://localhost:3001/votes/${postId}`, {
  //       user: userId,
  //       upvote: false,
  //       downvote: true,
  //     })
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    // console.log(postVotes)
    postVotes.map((post) => {
      if (post.user == userId) {
        // setVoted('voted') 
        // console.log('upvoted');
      } else {
        // console.log('downvoted')
        // setVoted('notVoted')
      }
    });
  }, []);

  return (
    <div>
      <p>6,250 points - 262 comments</p>
      <div className="icons">
        <Upvote postId={postId} userId={userId} voted={postVotes} />
        <Downvote postId={postId} userId={userId} voted={postVotes} />
        <img className="icon" src={comment} alt="" />
      </div>
    </div>
  );
};

export default Details;
