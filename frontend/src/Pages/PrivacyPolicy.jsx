import React from 'react';
import './PrivacyPolicy.css'; 

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-header">
        <h1>Privacy Policy</h1>

      </div>
      
      <div className="privacy-policy-section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to our website. We are committed to protecting your personal information 
          and your right to privacy. If you have any questions or concerns about our policy, 
          or our practices with regards to your personal information, please contact us.
        </p>
      </div>

      <div className="privacy-policy-section">
        <h2>2. Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us when registering 
          on the website, expressing an interest in obtaining information about us or our 
          products and services, when participating in activities on the website, or otherwise 
          contacting us.
        </p>
        <ul>
          <li>Personal Identification Information (Name, Email Address, Phone Number, etc.)</li>
          <li>Payment Information (if applicable)</li>
          <li>Technical Data (IP Address, Browser Type, etc.)</li>
        </ul>
      </div>

      <div className="privacy-policy-section">
        <h2>3. How We Use Your Information</h2>
        <p>
          We use the information we collect in the following ways:
        </p>
        <ul>
          <li>To provide and manage services you have requested</li>
          <li>To send promotional communications, with your consent</li>
          <li>To improve our services and website functionality</li>
        </ul>
      </div>

      <div className="privacy-policy-section">
        <h2>4. Sharing Your Information</h2>
        <p>
          We may share your information in the following situations:
        </p>
        <ul>
          <li>When you consent to the sharing of information</li>
          <li>To comply with legal obligations or regulations</li>
          <li>To protect the rights and safety of others</li>
        </ul>
      </div>

      <div className="privacy-policy-section">
        <h2>5. Your Privacy Rights</h2>
        <p>
          Depending on your location, you may have the right to access, update, or delete 
          your personal information. Please contact us to exercise your rights.
        </p>
      </div>


    </div>
  );
}

export default PrivacyPolicy;
