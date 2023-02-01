import ContactUserCard from "./ContactUserCard"

const userCard = [
    {
        name: "Timmy",
        image: "src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fsouthpark%2Fimages%2F4%2F4b%2FTimmy.png%2Frevision%2Flatest%3Fcb%3D20171014061716&imgrefurl=https%3A%2F%2Fsouthpark.fandom.com%2Fwiki%2FTimmy_Burch&tbnid=q0ohnO6HHfV4pM&vet=12ahUKEwjCzq-o9fP8AhU8lXIEHYeIDGUQMygRegUIARCTAQ..i&docid=lXEgFnNMUVWWfM&w=524&h=1029&q=timmy&ved=2ahUKEwjCzq-o9fP8AhU8lXIEHYeIDGUQMygRegUIARCTAQ'",
        title: "Student",
        description: "A student attending South Park Elementary School"
    },
    {
        name: "Courage",
        image: "src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fcourage.fandom.com%2Fwiki%2FCourage&psig=AOvVaw3t_r3rR1CuhpLSRrCpB0Be&ust=1675327106769000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJju8Pv18_wCFQAAAAAdAAAAABAE'",
        title: "Dog",
        description: "An adventurous dog that goes on many perilous adventures in order to ensure the safety of his caretakers"
    },
    {
        name: "Example 3",
        image: "none",
        title: "Example title",
        description: "Example description",
    },
    {
        name: "Example 4",
        image: "none",
        title: "Example title",
        description: "Example description"
    }
]

const allContacts = userCard.map((user) => {
    return (
        <div>
            <ContactUserCard name={user.name} title={user.title} description={user.description} />
            <img src={user.image}></img>
        </div>
    )
})
export default function Contacts() {
    return (
        <aside>
            <h1>Contacts</h1>
            {allContacts}
        </aside>
    );
}

