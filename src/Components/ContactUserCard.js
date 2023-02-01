import "./ContactUserCard.css"
import pic from './profile.png'

const ContactUserCard = () => {
    return (
        <div className="contactusercard">
            <img src={pic}/>
            <div>
                <h2>Jordan Walke</h2>
                <h3>React Creator</h3>
                <p>Lorem Ipsem</p>
            </div>
        </div>
    )
}

export default ContactUserCard;