import "./UserProfile.css"
import ProfilePic from "./ProfilePic"

const UserProfile = () => {
    return (
        <div className = "user__profile">
            <ProfilePic />
            <section>
                <h1>Jordan Walke</h1>
                <h3>React Creator</h3>
                <p>Lorem Ipsem</p>
            </section>
        </div>
    )
}
export default UserProfile