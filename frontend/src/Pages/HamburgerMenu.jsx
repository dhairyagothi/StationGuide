import React, { useState } from "react";
import {FaCreditCard, FaLifeRing, FaExclamationTriangle, FaInfoCircle, FaComment, FaCog } from "react-icons/fa";
import "./HamburgerMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`hamburger-icon ${isOpen ? "hidden" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {isOpen && (
        <div className="menu-container">
          <div className="menu-header">
            <div className="profile-info">
              <img
                className="profile-icon"
                src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                alt="profile"
              />
              <h3>Yatree</h3>
              <p >5.0 ★</p>
            </div>
            <span className="close-btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} />
            </span>
          </div>

          <ul className="menu-items">
            <li><a role="img" aria-label="card" href="/payment"><FaCreditCard/>Make a Payment</a></li>
            <li><a role="img" aria-label="support" href="/help-and-support"><FaLifeRing />Help and Support</a></li>
            <li><a role="img" aria-label="emergency" href="/emergency"><FaExclamationTriangle />Emergency</a></li>
            <li><a role="img" aria-label="about" href="about"><FaInfoCircle />About Us</a></li>
            <li><a role="img" aria-label="feedback" href="/feedback"><FaComment /> Feedback</a></li>
            <li><a role="img" aria-label="settings" href="/settings"><FaCog />Settings</a></li>
          </ul>

          <div className="menu-footer">
            <a href="/privacy-policy" className="privacy-link">
              Privacy and Policy
            </a>
            <p className="app-version">App version 1.0.0.0</p>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
