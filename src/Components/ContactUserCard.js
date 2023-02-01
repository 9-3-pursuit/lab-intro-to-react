import "./ContactUserCard.css"

export default function ContactUserCard() {
    return(
        <div className="contactCard">
            <img src="profile.png" alt="Profile Logo" />
            <div className="infoDiv">
                <h3 className="name">Jordan Walke</h3>
                <h4 className="jobTitle">React Creator</h4>
                <p className="info">Lorem Ipsum</p>
            </div>
        </div>
    )
}