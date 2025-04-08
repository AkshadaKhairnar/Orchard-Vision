import React, { useState, useEffect } from 'react';
import './Farmer.css';
import plant from './images/plant.png';
import soil from './images/soil.png';
import process from './images/process.png';
import { Link } from 'react-router-dom';  // Ensure you import Link from react-router-dom
import logo1 from './images/logo.png';


const Farmer = () => {
  const monthDetails = {
    March: { process: 'Bud Break', task: 'Prune and Spray' },
    April: { process: 'Flowering', task: 'Frost Protection' },
    May: { process: 'Fruit Set', task: 'Thin Fruits' },
    June: { process: 'Fruit Development', task: 'Irrigation' },
    July: { process: 'Fruit Development', task: 'Disease Control' },
    August: { process: 'Fruit Development', task: 'Pest Management' },
    September: { process: 'Fruit Maturation', task: 'Harvest Preparation' },
    October: { process: 'Harvesting', task: 'Harvest Fruits' },
    November: { process: 'Post-Harvest Care', task: 'Clean Orchard' },
    December: { process: 'Dormancy', task: 'Rest Period' },
    January: { process: 'Dormancy', task: 'Tree Health Check' },
    February: { process: 'Pruning', task: 'Prune Trees' },
  };

  const soilTips = {
    March: 'Add organic compost.',
    April: 'Monitor soil moisture.',
    May: 'Check for pests.',
    June: 'Fertilize sparingly.',
    July: 'Irrigate during dry spells.',
    August: 'Prevent waterlogging.',
    September: 'Prepare for harvest.',
    October: 'Clean soil surface.',
    November: 'Mulch for winter.',
    December: 'Test soil health.',
    January: 'Aerate compact soil.',
    February: 'Apply winter fertilizers.',
  };

  const [currentProcess, setCurrentProcess] = useState('Loading...');
  const [currentTask, setCurrentTask] = useState('Loading...');
  const [soilTip, setSoilTip] = useState('Loading...');
  const [showAdditionalMonths, setShowAdditionalMonths] = useState(false);

  useEffect(() => {
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const monthInfo = monthDetails[currentMonth] || {};
    setCurrentProcess(monthInfo.process || 'N/A');
    setCurrentTask(monthInfo.task || 'N/A');
    setSoilTip(soilTips[currentMonth] || 'N/A');
  }, []);

  const toggleAdditionalMonths = () => {
    setShowAdditionalMonths(!showAdditionalMonths);
  };

  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <img src={logo1} alt="Logo" />
        <nav>
          <ul>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/RowColumnMap">MAP</Link></li>
            <li><Link to="/Farmer">SCHEDULE</Link></li>
            <li><Link to="/Report">REPORT</Link></li>
            <li><Link to="/DisplayVendors">RESOURCES FROM VENDORS</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Timetable */}
        <img
          src="https://img.freepik.com/free-vector/life-cycle-apple-tree_1284-64583.jpg?t=st=1734057552~exp=1734061152~hmac=f8717011327e814da4e12b1030b103f43ba2e9e08d9236d6010e2a3fee61bd89&w=1380"
          alt="Apple Orchard Necessities"></img>
        <section className="timetable">
          <div className="timetable-title">
            <h2>APPLE LIFECYCLE</h2>
            <button onClick={toggleAdditionalMonths}>
              {showAdditionalMonths ? '\u25B2' : '\u25BC'}
            </button>
          </div>
          <table id="timetable" border="1">
            <thead>
              <tr style={{ backgroundColor: '#b3e6b3' }}>
                <th>Month</th>
                <th>Process</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(monthDetails).map(([month, details], index) => (
                <tr
                  key={month}
                  style={{
                    display: index >= 4 && !showAdditionalMonths ? 'none' : 'table-row',
                    backgroundColor: '#ffffff',
                  }}
                >
                  <td>{month}</td>
                  <td>{details.process}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <br />
        <br />
        {/* Cards */}
        <section className="cards">
          <div className="card">
            <div className="card-title">
              <img src={plant} alt="Process Icon" />
              <h3>CURRENT PROCESS</h3>
            </div>
            <div className="card-content">
              <p>{currentProcess}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <img src={process} alt="Task Icon" />
              <h3>CURRENT TASK</h3>
            </div>
            <div className="card-content">
              <p>{currentTask}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <img src={soil} alt="Tip Icon" />
              <h3>SOIL HEALTH TIP</h3>
            </div>
            <div className="card-content">
              <p>{soilTip}</p>
            </div>
          </div>
        </section>
        <br />
        <br />
        <div className="schedule-container">
          <h2>YOUR SCHEDULE</h2>
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress-stage done" style={{ width: '30%' }}></div>
              <div className="progress-stage current" style={{ width: '40%' }}></div>
              <div className="progress-stage next" style={{ width: '30%' }}></div>
            </div>
            <div className="legends">
              <div><span className="color done"></span> Previous Stage (26 Nov)</div>
              <div><span className="color current"></span> Current Stage (6-11 Dec)</div>
              <div><span className="color next"></span> Next Stage (12-15 Dec)</div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </main>
    </div>
  );
};

export default Farmer;
