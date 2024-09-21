import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null); // State for the current user

  // Function to simulate login
  const login = (username) => {
    setUser({ username }); // Set user state with username
    console.log(`${username} logged in`);
  };

  // Function to simulate logout
  const logout = () => {
    setUser(null); // Clear user state
    console.log('User logged out');
  };

  return {
    user,
    login,
    logout,
  };
};

export default useAuth;
