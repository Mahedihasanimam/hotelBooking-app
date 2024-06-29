import React from "react";

const LogHom = ({ user, onLogout }) => {
  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default LogHom;
