import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      
      <ul>
        <br></br>
        <br></br>
        <h2>MENU</h2>
      <li><a href="#dash">Dashboard</a></li>
        <li><a href="#health-monitoring">Health Monitoring</a></li>
        <li><a href="#pesticide-schedule">Pesticide Schedule</a></li>
        <li><a href="#download-report">Download Report</a></li>
        
      </ul>
    </div>
  );
}

export default Sidebar;
