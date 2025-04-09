import React from "react";
import { Link } from "react-router-dom"; // Import for navigation
import photo from "../assets/aboutme_pic.png";
import "../styles/aboutme.css";
import circlea1 from "../assets/Ellipse_about_1.svg"; 
import circlea2 from "../assets/Ellipse_about_2.svg"; 
import circlea3 from "../assets/Ellipse_about_3.svg"; 

export const AboutMe = () => {
  return (
    <div className="about-me">

    
      {/* Navigation Bar */}
      <nav className="navigation-bar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Me</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/fun-things" className="nav-link fun-tab">Fun Things</Link>
      </nav>

      {/* About Me Section */}
      <div className="about-container">
        {/* Left Section: About Me Text */}
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            My name is <strong>Linna Niu</strong>, and I am currently a junior majoring in 
            Statistics + Computer Science at the University of Illinois Urbana-Champaign. 
            My research interests primarily focus on Human-Computer Interaction (HCI), particularly 
            in leveraging new technologies to enhance learning experiences.
          </p>
          <p>
            Over the past year, I have been a part of Orchid Lab, led by Professor Brian Bailey. 
            Our research focuses on developing data-augmented educational tools to enhance 
            collaborative learning and improve peer evaluation systems, making teamwork more 
            transparent and equitable.
          </p>
        </div>

        {/* Right Section: Profile Picture */}
        <div className="about-photo">
          <img src={photo} alt="Linna Niu" />
          <p>Linna (Jiaqi) Niu</p>
        </div>
      </div>

      {/* Skills Section */}
<div className="skills-section">
  <h2>Technical Skills</h2>

  <div className="skills-grid">
    {/* Row 1 */}
    <p className="skill-label">Python</p>
    <div className="progress-bar"><div className="progress-fill python"></div></div>
    <p className="skill-label">C</p>
    <div className="progress-bar"><div className="progress-fill c"></div></div>

    {/* Row 2 */}
    <p className="skill-label">JavaScript</p>
    <div className="progress-bar"><div className="progress-fill javascript"></div></div>
    <p className="skill-label">R</p>
    <div className="progress-bar"><div className="progress-fill r"></div></div>

    {/* Row 3 */}
    <p className="skill-label">Java</p>
    <div className="progress-bar"><div className="progress-fill java"></div></div>
    <p className="skill-label">C++</p>
    <div className="progress-bar"><div className="progress-fill cpp"></div></div>
  </div>
</div>

    </div>
  );
};
