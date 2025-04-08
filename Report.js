import React from 'react';
import './Farmer.css';
import logo from './images/logo.png';

const Report = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="navbar">
          <img src={logo} alt="Logo" />
          <nav>
            <ul>
              <li><a href="signup.html">ABOUT</a></li>
              <li><a href="farmer.html">MAP</a></li>
              <li><a href="#schedule">SCHEDULE</a></li>
              <li><a href="report.html">REPORT</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main>
        <iframe
          width="1500"
          height="1000"
          src="https://lookerstudio.google.com/embed/reporting/444d8f04-f8f3-448b-a061-5c62820aae38/page/L6YZE"
          style={{ border: 0 }}
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-popups"
        ></iframe>
      </main>
    </div>
  );
};

export default Report;
