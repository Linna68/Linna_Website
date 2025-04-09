import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/sophia.css";

import sophia1 from "../assets/sophia_1.png";
import sophia2 from "../assets/sophia_2.png";
import sophia3 from "../assets/sophia_3.png";
import enemy from "../assets/enemy.png";
import loyal from "../assets/loyal.png";

import anthem from "../assets/Queen_Cat_Sophia.mp3"



export const Sophia = () => {
  const photos = [sophia1, sophia2, sophia3];
  const affectionStart = 10;
  const affectionMaxNormal = 90;
  const affectionEnd = 100;
  const affectionMin = 0;
  const affectionStep = (affectionMaxNormal - affectionStart) / (photos.length - 1);

  
  const [showTooltip, setShowTooltip] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(anthem));

  const [photoIndex, setPhotoIndex] = useState(0);
  const [affection, setAffection] = useState(affectionStart);
  const [status, setStatus] = useState("normal"); // "normal", "enemy", "loyal"
  const navigate = useNavigate();

  const handlePetHer = () => {
    if (status === "enemy") {
      // From enemy to normal start
      setPhotoIndex(0);
      setAffection(affectionStart);
      setStatus("normal");
    } else if (status === "loyal") {
      // Stay loyal on pet
      setPhotoIndex(null);
      setAffection(affectionEnd);
      setStatus("loyal");
    } else if (photoIndex < photos.length - 1) {
      setPhotoIndex(photoIndex + 1);
      setAffection(affection + affectionStep);
    } else {
      // Become loyal
      setPhotoIndex(null);
      setAffection(affectionEnd);
      setStatus("loyal");
    }
  };
  
  const handleBathHer = () => {
    if (status === "enemy") {
      // Stay in enemy state
      setPhotoIndex(null);
      setAffection(affectionMin);
      setStatus("enemy");
    } else if (status === "loyal") {
      // From loyal to last photo in normal
      const lastIndex = photos.length - 1;
      setPhotoIndex(lastIndex);
      setAffection(affectionMaxNormal);
      setStatus("normal");
    } else if (photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
      setAffection(affection - affectionStep);
    } else {
      // Become enemy
      setPhotoIndex(null);
      setAffection(affectionMin);
      setStatus("enemy");
    }
  };
  

  return (
    <div className="sophia-page">
      <nav className="navigation-bar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Me</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/fun-things" className="nav-link fun-tab">Fun Things</Link>
      </nav>

      <button className="return-button" onClick={() => navigate("/fun-things")}>
        ‹ Return
      </button>

      <div className="sophia-gallery">
        <div className="sophia-photo-wrapper">
          {status === "loyal" ? (
            <img src={loyal} alt="Loyal Sophia" className="sophia-photo" />
          ) : status === "enemy" ? (
            <img src={enemy} alt="Angry Sophia" className="sophia-photo" />
          ) : (
            <img src={photos[photoIndex]} alt="Sophia" className="sophia-photo" />
          )}
        </div>

        <div className="sophia-info">
            <button
                className={`sophia-title ${isPlaying ? "playing" : ""}`}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={() => {
                    const audio = audioRef.current;
                    if (isPlaying) {
                    audio.pause();
                    audio.currentTime = 0;
                    } else {
                    audio.play();
                    }
                    setIsPlaying(!isPlaying);
                }}
                >
                Sophia
                </button>

            {showTooltip && (
            <div className="anthem-tooltip">
                {isPlaying
                ? "Would you like to stop the anthem?"
                : "Would you like to hear Queen Sophia’s national anthem?"}
            </div>
            )}
          <p className="sophia-desc">
            Sophia — AKA the most loyal believer in mirror reflections and laser pens.
            Don’t be fooled by her grumpy face; she’s the sweetest angel in the world…
            unless it’s bath time or a vet visit. As the true spiritual owner of this website,
            she insisted her most glamorous photos be shared here 😎
          </p>

          <div className="sophia-buttons">
            <button className="bath-btn" onClick={handleBathHer}>Bath Her</button>
            <button className="pet-btn" onClick={handlePetHer}>Pet Her</button>
          </div>
        </div>
      </div>

      <div className="affection-container">
        <span className="emoji">😻</span>
        <div className="affection-bar">
          <div className="affection-fill" style={{ width: `${affection}%` }} />
        </div>
      </div>
    </div>
  );
};
