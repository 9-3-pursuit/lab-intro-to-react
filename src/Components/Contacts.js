import ContactUserCard from "./ContactUserCard";
import "./Contacts.css";

export default function Contacts() {
  return (
    <div className="contacts">
      <h2>Contacts</h2>
      <ContactUserCard classN={"contact"} />
      <ContactUserCard classN={"contact"} />
      <ContactUserCard classN={"contact"} />
      <ContactUserCard classN={"contact"} />
    </div>
  );
}
