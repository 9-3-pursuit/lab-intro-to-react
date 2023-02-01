import ContactUserCard from "./ContactUserCard"

export default function Contacts() {
    ContactUserCard.forEach((contact) => {
        return (
            <div>
                <h3>{contact.Name}</h3>
                <h4>{contact.Title}</h4>
                <p>{contact.Description}</p>
                <img src={contact.Image} alt={contact.Name}></img>
            </div>
        );
    })
}

