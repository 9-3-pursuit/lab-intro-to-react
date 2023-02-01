import ContactUserCard from "./ContactUserCard";
import "./style/Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div>
        <h1>Contacts</h1>
      </div>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
};
export default Contacts;
