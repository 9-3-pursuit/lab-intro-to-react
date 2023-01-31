import "./ContactUserCard.css";

export default function ContactUserCard({ classN }) {
  return (
    <div className={"user " + classN}>
      <img src="profile.png" alt="profile" />
      <div>
        <h3>Jordan Walke</h3>
        <p>React Creator</p>
        <p>Lorem Ipsem</p>
      </div>
    </div>
  );
}
