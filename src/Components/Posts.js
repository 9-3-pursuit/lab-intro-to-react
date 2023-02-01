import Post from "./Post.js"

export default function Posts() {
    Post.forEach((posting) => {
        return ( // Will this only return the first post or return all posts?
        <div>
            <h3>{posting.Title}</h3>
            <p>{posting.Description}</p>
        </div>
        );
    })
}



