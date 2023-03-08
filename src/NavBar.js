import "./App.css"
function sayHello() {
  return alert('You clicked me!');
  }
function NavBar() {
    return <div id="nav">
       <button onClick={sayHello}>Join Here</button>
       <button onClick={sayHello}>What's Pursuit?</button>
       <button onClick={sayHello}>Log in</button>
    </div>
}
  // Usage
  
export default NavBar