import React from 'react';

const TeamMember = ({ name, image, description }) => {
    const imageSize = {
        width: '200px', // Adjust the width and height as needed
        height: '200px',
        borderRadius: '50%',
        padding: '10px' // Makes the image circular
      };
      const containerStyle = {
        display: 'flex',        // Make the elements flex containers
        alignItems: 'center',   // Vertically center the content
        gap: '20px',            // Add spacing between name and image
      };
    const Desc = {
        padding: '10px',
        textAlign: 'justify',
    }
  return (
    <div className="team-member">
        <div style={containerStyle}>
      <img src={image} alt={name} style={imageSize} />
      <h2>{name}</h2>
      </div>
      <p style ={Desc}> {description} </p>
    </div>
  );
};

export default TeamMember;