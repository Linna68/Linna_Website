import React from "react";
import "../styles/homepage.css"; 
import profilePhoto from "../assets/Personal Photo.png"; 
import circle1 from "../assets/Ellipse 1.svg"; 
import circle2 from "../assets/Ellipse 2.svg"; 
import circle3 from "../assets/Ellipse 3.svg"; 
import circle4 from "../assets/Ellipse 4.svg"; 

export const Homepage = () => {
  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navigation-bar">
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About Me</a>
        <a href="/contact" className="nav-link">Contact</a>
        <a href="/fun-things" className="nav-link fun-tab">Fun Things</a>
      </nav>

      {/* Main Content */}
      <div className="content-container">
        {/* Left Section - Text */}
        <div className="text-section">
          <h1 className="intro-text">Hi, this is Linna! 👋</h1>
          <p className="intro-description">
            I’m an undergraduate student at UIUC, passionate about 
            Human-Computer Interaction (HCI). My research focuses on 
            designing educational tools and making technology more 
            intuitive, accessible, and user-centered.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="image-section">
          <img className="profile-photo" src={profilePhoto} alt="Linna sitting on a bench in front of a brick wall" />
        </div>
      </div>

      {/* Decorative Circles */}
      <img className="circle circle-1" src={circle1} alt="" />
      <img className="circle circle-2" src={circle2} alt="" />
      <img className="circle circle-3" src={circle3} alt="" />
      <img className="circle circle-4" src={circle4} alt="" />
    </div>
  );
};
