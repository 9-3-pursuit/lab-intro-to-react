import Post  from "./Post"
import "./Posts.css"


function Posts() {
 return (
    <div className="posts">
        <h1>Posts</h1>
        <Post />
        <Post />
        <Post />
    </div>
 )
}

export default Posts