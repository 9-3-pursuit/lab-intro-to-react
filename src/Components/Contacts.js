import ContactUserCard from "./ContactUserCard";
import "./Contacts.css"

const Contacts = () => {
    return (
        <aside>
            <h1> Contacts </h1>
            <ContactUserCard/> 
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
        </aside>
    )
}
export default Contacts