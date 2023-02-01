// import component_userprofile from "./component_userprofile"
import UserPic from "./UserPic"
const UserProfile = () => {

    return (
        <div className="UserProfile">
            <h3 className="random_name">Random Name</h3>
            <p className="react_creator">React Creator</p>
            <p className="random_text">hsjdak</p>
            <UserPic/>
        </div>
    )
    
}

export default UserProfile