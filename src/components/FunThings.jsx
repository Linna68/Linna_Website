import React from "react";
import { Link } from "react-router-dom";
import sophiaImg from "../assets/sophia_default.png";
import galleryImg from "../assets/gallery_default.png";
import "../styles/funthings.css";

export const FunThings = () => {
  return (
    <div className="fun-things-page">
      {/* Navigation Bar */}
      <nav className="navigation-bar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Me</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/fun-things" className="nav-link fun-tab">Fun Things</Link>
      </nav>

      {/* Page Title */}
      <h1 className="fun-things-title">Fun Things</h1>

      {/* Card Section */}
      <div className="fun-things-cards">
        <Link to="/fun-things/sophia" className="fun-card">
          <img src={sophiaImg} alt="Sophia the cat" className="fun-image" />
          <p className="fun-caption">The Real Owner of This Website</p>
        </Link>

        <Link to="/fun-things/gallery" className="fun-card">
          <img src={galleryImg} alt="Gallery photos" className="fun-image" />
          <p className="fun-caption">The World as I See It</p>
        </Link>
      </div>
    </div>
  );
};
