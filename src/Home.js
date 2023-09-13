import React, { useState, useEffect } from 'react';
import './Home.css';
import './Description.css';
import Chatbot from './Chatbot';

// Import your images
import img1 from '../src/images/image1.jpg';
import img2 from '../src/images/image2.jpg';
import img3 from '../src/images/image3.jpg';
import img4 from '../src/images/image4.jpg';

import { useNavigate } from 'react-router';



const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Function to automatically go to the next slide
    const autoNextSlide = () => {
      nextSlide();
    };

    // Set up an interval to change the slide automatically (every 5 seconds in this example)
    const intervalId = setInterval(autoNextSlide, 5000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button prev">
        &lt;
      </button>
      <div
        className="carousel-slide"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: '100% 75%',
          backgroundColor: '#F9F5F6',
        }}
      ></div>
      <button onClick={nextSlide} className="carousel-button next">
        &gt;
      </button>
    </div>
  );
};

const TextCarousel = ({ textItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((currentIndex + 1) % textItems.length);
  };

  const prevItem = () => {
    setCurrentIndex((currentIndex - 1 + textItems.length) % textItems.length);
  };

  useEffect(() => {
    // Function to automatically go to the next slide
    const autoNextSlide = () => {
      nextItem();
    };

    // Set up an interval to change the slide automatically (every 5 seconds in this example)
    const intervalId = setInterval(autoNextSlide, 5000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  

  return (
    <div className="text-carousel">
      <button onClick={prevItem} className="text-carousel-button prev">
        &lt;
      </button>
      <div className="text-carousel-content">
        {textItems[currentIndex]}
      </div>
      <button onClick={nextItem} className="text-carousel-button next">
        &gt;
      </button>
    </div>
  );
};
const Homepage = ({ setLoginUser }) => {
  const navigate=useNavigate();
  const handleLogout = () => {
    // Clear the logged-in user by passing null to setLoginUser
    setLoginUser(null);
    navigate("/login");
  };

  return (
    <div className="homepage">
      <div className="logout-button" onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
};

function App() {
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [loginUser, setLoginUser] = useState();

  const openChatbot = () => {
    setChatbotVisible(true);
  };
  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  // Use the imported image paths
  const images = [img1, img2, img3, img4];

  const textItems = [
    '"Mental health...is not a destination, but a process. It\'s about how you drive, not where you\'re going." - Noam Shpancer',
    '"Mental health is not a joke. It is not something to be ashamed of. And the most important thing that you could do is to get the help that you need." - Demi Lovato',
    '"You don\'t have to control your thoughts. You just have to stop letting them control you." - Dan Millman',
    '"Sometimes the people around you won\'t understand your journey. They don\'t need to, it\'s not for them." - Joubert Botha',
    ' "The strongest people are not those who show strength in front of us but those who win battles we know nothing about." - Mckinzey Stuart'
  ]
  return (
    <div className="App">
      <Homepage setLoginUser={setLoginUser} />

      <div className="carousel-container">
        <Carousel images={images} />
      </div>
      <div className='text-carousel-container'>
        <TextCarousel textItems={textItems} />
      </div>
      <div className="fit-to-page-container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Importance of Mental Health</h5>
                <p className="card-text">
                  Mental health is of paramount importance as it profoundly affects one's overall well-being and quality of life. It influences how we think, feel, and act, shaping our ability to cope with stress, build meaningful relationships, work productively, and make informed decisions. Prioritizing mental health fosters resilience, emotional stability, and a positive outlook, enabling individuals to lead fulfilling and productive lives. It's a cornerstone of overall health, and neglecting it can have far-reaching consequences for individuals, families, and communities. Neglecting it can have far-reaching consequences. Keep faith in yourself and move forward in life                                             
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Why Mental Health?</h6>
                <p className='card-text'>Mental health refers to our emotional, psychological, and social well-being. It encompasses our thoughts, feelings, and behaviors and is essential for leading a fulfilling life. Good mental health contributes to effective functioning, healthy relationships, and overall life satisfaction. However, mental health issues, such as anxiety, depression, and stress, can impact anyone and should be taken seriously. Seeking help and support, practicing self-care, and reducing stigma around mental health are crucial steps in promoting well-being and ensuring that everyone has the opportunity to thrive mentally and emotionally.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <a href="/form" className="btn btn-success m-3">Click to assess your mental health</a>
      </div>
      
    <div className='chatbot-button'>
        <button onClick={toggleChatbot} className="btn btn-success">
          {chatbotVisible ? 'Close Chatbot' : 'Open Chatbot'}
        </button>
      </div>
      {chatbotVisible && (
        <Chatbot onClose={toggleChatbot} />
    
      )}
      </div>

  );
}


export default App;