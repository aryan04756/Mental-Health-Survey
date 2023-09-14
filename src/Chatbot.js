import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = ({ onClose }) => {
  const [iframeError, setIframeError] = useState(false);

  const handleIframeError = () => {
    setIframeError(true);
  };

  return (
    <div className="chatbot-popup">
      <div className="chatbot-content">
        {iframeError ? (
          <p>Sorry, the chatbot couldn't be loaded.</p>
        ) : (
          <iframe style={{height:'400px',width:'400px', border:'0'}} src="https://widget.writesonic.com/CDN/index.html?service-base-url=https://api.botsonic.ai&token=a1718f2c-0e50-4a68-bf72-6b289c097194&base-origin=https://bot.writesonic.com&instance-name=Botsonic&standalone=true" >
</iframe>
        )}
      </div>
      <button onClick={onClose} className="close-chatbot-button">
        Close Chatbot
      </button>
    </div>
  );
};

export default Chatbot;
