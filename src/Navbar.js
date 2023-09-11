// src/components/Navbar.js
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const CollapsibleNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };
  const navLinkStyle = {
    fontSize: '24px',      // Adjust the font size as needed
    padding: '10px 20px',
    color: "white",  // Adjust the padding as needed
    // Add more inline styles as needed
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
      <Navbar.Brand href="#" style={navLinkStyle}>Your Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/"  style={navLinkStyle}>Home</Link>
          <Link to="OurTeamPage"  style={navLinkStyle}>Team</Link>
          <Link to="form"  style={navLinkStyle}>Form</Link>
          <Link to="Disorders"  style={navLinkStyle}>Disorders</Link>
          <Link to="Report"  style={navLinkStyle}>Report</Link>
          <Link to="Feedback"  style={navLinkStyle}>Feedback</Link>
          <Link to="Chatbot"  style={navLinkStyle}>Chatbot</Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  );
};

export default CollapsibleNavbar;
