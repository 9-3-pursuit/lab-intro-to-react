function userProfile(user) {
    return user.firstName + " " + user.lastName;
  }
  
  const user = {
    firstName: "My",
    lastName: "Name",
  };
  
  const hello = <h1>Hello, {userProfile(user)}!</h1>;
  export default userProfile