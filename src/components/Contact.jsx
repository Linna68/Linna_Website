import React from "react";
import "../styles/contact.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom"; // Import React Router for navigation

export const Contact = () => {
  return (
    <div className="contact-page">
      {/* Navigation Bar */}
      <nav className="navigation-bar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Me</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/fun-things" className="nav-link fun-tab">Fun Things</Link>
      </nav>

      {/* Contact Section */}
      <div className="contact-container">
        <h1 className="contact-title">Contact Me 🤙</h1>

        {/* Left: Email & LinkedIn */}
        <div className="contact-info">
          <p>
            <FaEnvelope className="contact-icon" /> jniu7@illinois.edu
          </p>
          <p>
            <FaLinkedin className="contact-icon" />{" "}
            <a href="https://www.linkedin.com/in/linna-niu-16635129b" target="_blank" rel="noopener noreferrer">
              Linna’s LinkedIn page
            </a>
          </p>
        </div>

        {/* Right: Description */}
        <div className="contact-description">
          <p>
            Although my current research focuses on Human-Computer Interaction (HCI), 
            I’m always eager to explore new fields and expand my knowledge. 
            Feel free to reach out—whether it's for a discussion, collaboration, or just a casual chat. 
            Looking forward to hearing from you! 😊
          </p>
        </div>
      </div>
    </div>
  );
};
