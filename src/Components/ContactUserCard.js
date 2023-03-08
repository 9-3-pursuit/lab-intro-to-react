
export default function ContactUserCard({ contacts,i }) {
  const contactList = contacts.map((contact) => {
    return (
      <li id="contact"  key={i}>
        <img
      id="profileImage"
      src="./profile.png"
      alt="user profile"
      width="200"
      height="200"
      />
      <h2>{contact.name}</h2>
      <h3>{contact.title}</h3>
      <p>{contact.bio}</p>
      </li>
    ) })
    return contactList


  
 


}

