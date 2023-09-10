import React from 'react';
import './Chatbot.css';

const Chatbot = ({ onClose }) => {
  return (
    <div className="chatbot-popup">
      <div className="chatbot-content">
        <iframe
          title="Chatbot"
          allow="microphone;"
          width="350"
          height="450"
          src="https://console.dialogflow.com/api-client/demo/embedded/fbab4d24-ba07-4d9b-a945-4e5fa82d63ae"
        ></iframe>
      </div>
      <button onClick={onClose} className="close-chatbot-button">
        Close Chatbot
      </button>
    </div>
  );
};

export default Chatbot;