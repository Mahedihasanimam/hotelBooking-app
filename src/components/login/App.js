import React, { useState, useEffect } from "react";
import LogHom from "./LogHom";
import Register from "./components/Register/Register";
import Login from "./Login";

const App = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem("authenticatedUser");
    if (user) {
      setAuthenticatedUser(user);
    }
  }, []);

  const handleRegister = (username) => {
    setAuthenticatedUser(username);
  };

  return (
    <div className="App">
      {authenticatedUser ? (
        <Register onRegister={handleRegister} />
      ) : (
        <Login handleLogin={handleLogin} onShowRegister={toggleRegister} />
      )}
    </div>
  );
};

export default App;
