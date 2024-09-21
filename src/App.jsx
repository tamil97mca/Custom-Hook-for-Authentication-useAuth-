import useAuth from "./CustomHooks/useAuth"; // Import the custom hook

const App = () => {
  const { user, login, logout } = useAuth(); // Use the authentication hook

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please log in.</p>
          <button onClick={() => login("JohnDoe")}>Login</button>
        </>
      )}
    </div>
  );
};

export default App;
