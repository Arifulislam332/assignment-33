const ParentComponent = ({ children, isLoggedIn, setLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div>
        <p>User logged in as: {children}</p>
        <button onClick={() => setLoggedIn(false)}>Log out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>User not logged in</p>
        <button onClick={() => setLoggedIn(true)}>Log In</button>
      </div>
    );
  }
};

export default ParentComponent;
