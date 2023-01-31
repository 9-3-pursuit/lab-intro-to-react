import ContactUserCards from "./ContactUserCard";

export default function Contacts() {
  return (
    <div className="contacts">
      <h2>Contacts</h2>
      <ContactUserCards classN={"contact"} />
      <ContactUserCards classN={"contact"} />
      <ContactUserCards classN={"contact"} />
      <ContactUserCards classN={"contact"} />
    </div>
  );
}
