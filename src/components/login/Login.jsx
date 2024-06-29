import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    
    // Check if the username exists and the password matches
    const user = registeredUsers.find(user => user.username === username);

    if (!user) {
      Swal.fire({
        title: 'Error!',
        text: 'Username does not exist',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
    } else if (user.password !== password) {
      Swal.fire({
        title: 'Error!',
        text: 'Incorrect password',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
    } else {
      // Set login flag
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      setUsername('');
      setPassword('');
      Swal.fire({
        title: 'Success!',
        text: 'Login successful',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      navigate('/');
      window.location.reload()
    }
  };

  return (
    <div className='mt-20'>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
      <Link to={'/registar/reg'} className='text-green-500'>Register</Link>
    </div>
  );
};

export default Login;
