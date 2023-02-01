import "./ContactUser.css"

function ContactUserCard() {
    return ( 
        <div className="contactuser">
           <div className="contact-text">
                <img src="profile.png" className="contact-profile" />
                <h2>Name</h2>
                <h4>Title</h4>
                <p>Text</p>
            </div>
        </div>
    )


}

export default ContactUserCard;