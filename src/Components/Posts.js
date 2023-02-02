import Post from "./Post.js";

function Posts () {
    
    return (
     <div id="userPosts">
        <ul>
            <li><Post /></li>
            <br>
            </br>
            <li><Post /></li>
            <br>
            </br>
            <li><Post /></li>
        </ul>
     </div>
    )
}

export default Posts;





// function ContactUserCard(props) {
//     const list = props.ContactUserCard;
//     const updatedList = list.map((item) => {
//         return (
            
//                 <li key={item.toString()}>{item}</li>
//            )  
        
//     })
    
//     return (
//         <ul>updatedList</ul>
//     );
    
    
//     }