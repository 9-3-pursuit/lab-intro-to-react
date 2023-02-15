import ContactUserCard from "./ContactUserCard";
//import css later

const Contacts = ()=> {
    return(
        <div className="contacts">
            <h5 className="contacts_heading">Contacts</h5>
        <ContactUserCard/>
        <ContactUserCard/>
        <ContactUserCard/>
        </div>
    )
}
export default Contacts;