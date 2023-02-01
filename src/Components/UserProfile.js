import pic from './profile.png'
import "./UserProfile.css"

const UserProfile = () => {
    return (
        <div id='userprofileid'>
            <img src={pic} alt="pic"/>
            <div>
                <h2>Jordan Walke</h2>
                <h3>React Creator</h3>
                <p>Lorem Ipsem</p>
            </div>

        </div>
    )
}


export default UserProfile;