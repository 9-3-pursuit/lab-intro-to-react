import ProfilePic from "./ProfilePic"
import "./ContactUserCard.css"

const ContactUserCard = () => {
    return (
    <aside className="contact-card">
        <ProfilePic />
        <section>
            <h1>Jordan Walke</h1>
            <h4>React Creator</h4>
            <p>Lorem Ipsem</p>
        </section>
    </aside>
    )
}

export default ContactUserCard