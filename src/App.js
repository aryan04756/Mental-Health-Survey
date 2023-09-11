import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Disorders from './Disorders';
import MentalHealthSurvey from './form';
import OurTeamPage from './OurTeamPage';
import Feedback from './Feedback';
import Chatbot from './Chatbot';
import Login from './Login';
import useToken from './useToken';
import Logout from './Logout'; // Import the Logout component

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <>
      <Navbar />
      <div className="logout-button">
        <Logout setToken={setToken} /> {/* Render the Logout component */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Disorders" element={<Disorders />} />
        <Route path="Form" element={<MentalHealthSurvey />} />
        <Route path="OurTeamPage" element={<OurTeamPage />} />
        <Route path="Feedback" element={<Feedback />} />
        <Route path="Chatbot" element={<Chatbot />} />
      </Routes>
    </>
  );
}

export default App;
