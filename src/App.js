import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { Routes, Route } from 'react-router-dom'; // Make sure you import Routes and Route
import Disorders from './Disorders';
import MentalHealthSurvey from './form';
import OurTeamPage from './OurTeamPage';
import Feedback from './Feedback';
import Chatbot from './Chatbot';
import Login from './Login';
import useToken from './useToken';
import Logout from './Logout'; // Import the Logout component
import Register from './Register';

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/disorders" element={<Disorders />} />
        <Route path="/form" element={<MentalHealthSurvey />} />
        <Route path="/ourteampage" element={<OurTeamPage />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </>
  );
}

export default App;
