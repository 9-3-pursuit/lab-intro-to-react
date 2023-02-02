import Post from "./Post.js"

export default function Posts() {
    // Post.forEach((posting) => {
    //     return ( // Will this only return the first post or return all posts?
    //     <div>
    //         <h3>{posting.Title}</h3>
    //         <p>{posting.Description}</p>
    //     </div>
    //     );
    // })

    const posting = [
    {
        title: "Example Title 1",
        body: "This is the text for Example Title 1"
    },
    {
        title: "Example Title 2",
        body: "This is the text for Example Title 2"
    },
    {
        title: "Example Title 3",
        body: "This is the text for Example Title 3"
    }
    ]

    const examplePost = posting.map((post) => {
        return (
            <Post title={post.title} body={post.body}/>
        );
    })

    return (
        <div>
            <h1>Test</h1>
            {examplePost}
        </div>
    );
}



