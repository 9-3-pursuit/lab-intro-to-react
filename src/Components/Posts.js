import Post from "./Post";

import "./style/Posts.css";

const Posts = () => {
  return (
    <div className="posts-container">
      <h1>Daily Posts</h1>
      <br />
      <Post />
      <br />
      <Post />
      <br />
      <Post />
    </div>
  );
};
export default Posts;
