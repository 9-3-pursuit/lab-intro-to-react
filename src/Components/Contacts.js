import ContactUserCard from "./ContactUserCard.js"

export default function Contacts() {
    return(
        <div className="contacts">
            <h3>Contacts</h3>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </div>
    ) 
}