import React from 'react';
import PropTypes from 'prop-types';

export default function Logout({ setToken }) {
  const handleLogout = () => {
    // Clear the user's authentication token
    setToken(null);
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

Logout.propTypes = {
  setToken: PropTypes.func.isRequired
};
