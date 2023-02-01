import "./UserProfile.css"

function UserProfile() {
    return ( 
        <div className="user-profile">
            <img src="profile.png" />
            <div className="text">
                <h1>Name</h1>
                <h4>Title</h4>
                <p>Text</p>
            </div>
        </div>
    )
}

export default UserProfile;