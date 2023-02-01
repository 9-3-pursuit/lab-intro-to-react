function ContactUserCard({name, title, description}) {
    return (
        <div>
            <img></img>
            <h3>{name}</h3>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

/*
Contact Example:
[{
    Name: "MyName",
    Image: "",
    Title: "",
    Description: ""
}]
*/

export default ContactUserCard