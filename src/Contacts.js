import ContactUserCard from "./Components/ContactUserCard";

function Contacts({contacts}) {
  return (
    <div id="contacts">
      <h2>Contacts</h2>
      <ul >
       <ContactUserCard contacts={contacts} />
      </ul>
      
    </div>
  );
}
export default Contacts;
