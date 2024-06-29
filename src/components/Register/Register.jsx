import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    
    // Retrieve existing users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    
    
    // Check if the username already exists
    const userExists = registeredUsers.some(user => user.username === username);
    if (userExists) {
      return Swal.fire({
        title: 'Error!',
        text: 'Username already exists',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
    }
    
    // Add new user to the array
    const newUser = { username, password };
    registeredUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    localStorage.setItem('autuser', JSON.stringify(username));
    
    Swal.fire({
      title: 'Success!',
      text: 'Registration successful!',
      icon: 'success',
      confirmButtonText: 'Cool'
    });
  };

  return (
    <div className='mt-20'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <Link to={'/login'} className='text-green-500'>Already have an account? Login</Link>
    </div>
  );
};

export default Register;
