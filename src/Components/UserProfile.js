import "./style/UserProfile.css";

const UserProfile = (props) => {
  return (
    <div className="profile-container">
      <img src={props.src} name={props.name} alt={props.alt}></img>
      <div className="profile-info">
        <h1>{props.title}</h1>
        <div className="profile-info-inner">
          <p>Directed by {props.director}</p>
          <p>
            In 2015, fifteen years after a global cataclysm known as the Second Impact, teenager Shinji Ikari is summoned to the futuristic city of Tokyo-3 by his estranged father Gendo Ikari, director of the special
            paramilitary force Nerv. Shinji witnesses United Nations forces battling an Angel, one of a race of giant monstrous beings whose awakening was foretold by the Dead Sea Scrolls. Because of the Angels'
            near-impenetrable force-fields, Nerv's giant Evangelion bio-machines, synchronized to the nervous systems of their pilots and possessing their own force-fields, are the only weapons capable of keeping the Angels
            from annihilating humanity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
