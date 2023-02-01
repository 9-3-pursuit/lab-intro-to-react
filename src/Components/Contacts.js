
import ContactUserCard from "./ContactUserCard.js";
import "./contacts.css"

const Contacts = () => {
    return (
        <div className="contactdiv">
            <h2>Contacts</h2>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
        </div>
    )
}

export default Contacts;