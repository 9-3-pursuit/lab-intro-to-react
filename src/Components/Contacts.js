import ContactUserCard from "./ContactUserCard"
import "./ContactUser.css"

function Contacts() {
    return ( 
        <div className="contact-container">
            <h1>Contacts</h1>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </div>
    )
}

export default Contacts;