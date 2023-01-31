// import "./NavBar.css";

export default function NavBar() {
    return (
        <div id="nav">
            Hello Nav
            <WhatIsPursuitButton />
            <CreateAccountButton />
            <SignInButton />

        </div>
    )

}

function WhatIsPursuitButton() {
    return (
        <button className="navButton">
            What is Pursuit?
        </button>
    )
}



function CreateAccountButton() {
    return (
        <button className="navButton">
            Create an account
        </button>
    )
}


function SignInButton() {
    return (
        <button className="navButton">
            Sign in
        </button>
    )
}
