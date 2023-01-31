import ContactUserCard from "./ContactUserCard";
import "./style/Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h1>Contacts</h1>
      <br />
      <ContactUserCard />
      <br />
      <ContactUserCard />
      <br />
      <ContactUserCard />
      <br />
      <ContactUserCard />
      <br />
    </div>
  );
};
export default Contacts;
