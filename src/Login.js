import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
  return fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Add an error state for displaying validation errors

  const handleSubmit = async e => {
    e.preventDefault();

    // Check if either field is empty
    if (!username || !password) {
      setError('Username and password are required.'); // Set the error message
      return; // Don't proceed with the login request
    }

    // Clear any previous error messages
    setError('');

    const token = await loginUser({
      username,
      password
    });
    
    if (token) {
      setToken(token);
    } else {
      setError('Invalid username or password.'); // Set an error message for failed login
    }
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>} {/* Display the error message if it's set */}
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
