
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1', marginTop: 'auto' }}>
      <p>All rights reserved.</p>
      <Link to="/privacy-policy" style={{ color: '#007bff' }}>Privacy and Policy</Link>
    </footer>
  );
};

export default Footer;
