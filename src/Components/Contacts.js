import "./Contacts.css"
import ContactUserCard from "./ContactUserCard.js"


function Contacts(){
    return  (
    <div id="contacts">
        <h2>Contacts</h2>
        <ContactUserCard/>
        <ContactUserCard/>
        <ContactUserCard/>
    </div>  
    );
}
export default Contacts