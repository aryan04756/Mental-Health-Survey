import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { Routes, Route } from 'react-router-dom'; // Make sure you import Routes and Route
import Disorders from './Disorders';
import OurTeamPage from './OurTeamPage';
import Feedback from './Feedback';
import Chatbot from './Chatbot';
import Login from './Login';
import Register from './Register';
import MentalHealthSurvey from './form';

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
        <Route path="/ourteampage" element={<OurTeamPage />} />
        <Route path='/form' element={<MentalHealthSurvey />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/disorders" element={<Disorders />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </>
  );
}

export default App;
