import React from "react"
import "./Post.css"
import Post from "./Post"

const Post = () => {
    console.log (props.title)
    return <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
}
export default Post