const navPhoto = "public/profile.png";
const currentDate = new Date();

function ContactUserCard () {
    return (
       <div> 
            <img src={navPhoto} alt={currentDate}/>
            <h1>Jordan White</h1>
            <h2>React Creator</h2>
            <p>Lorum Ipsem </p>
       </div>
    );
}


export default ContactUserCard;