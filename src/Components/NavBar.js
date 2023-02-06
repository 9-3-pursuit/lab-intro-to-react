
const navPhoto = "public/profile.png";
const currentDate = new Date();

function NavBar (){
    return (
        <NavBar>
            <img src={navPhoto} alt={currentDate}/>
            <h1>Jordan White</h1>
            <h2>React Creator</h2>
            <p>lorum Ipsem</p>
        </NavBar>
    );
}


export default NavBar;