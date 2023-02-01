import "./Posts.css"
import Post from "./Post.js"


const Posts = () => {
    return (
        <div className="maindiv">
            <h2>Posts</h2>
           <Post/>
           <Post/>
           <Post/>
        </div>
    )
}

export default Posts