import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import React Router components
import './App.css';
import RowColumnMap from "./RowColumnMap";
import OrchardStatistics from "./OrchardStatistics";
import OverallOrchardStatistics from "./OverallOrchardStatistics";
import Farmer from './Farmer';
import logo1 from './images/logo.png';
import ChatBot from './ChatBot';
import About from './about'; // Import about.js
import Sign from './Sign.js'; 
import Report from './Report.js';
import Vendors from './Vendors';
import Consumer from './Consumer';
import DroneProvider from './DroneProvider';
import DisplayVendors from './DisplayVendors';
import BookingForm from './BookingForm.js';



const orchardData = [
  { type: "Row 1", trees: ["Tree1", "Tree2", "Tree3", "Tree4", "Tree5"]},// "Tree6", "Tree7", "Tree8", "Tree9", "Tree10"] },
  { type: "Row 2", trees: ["Tree1", "Tree2", "Tree3", "Tree4", "Tree5"]}, //"Tree6", "Tree7", "Tree8", "Tree9", "Tree10"] },
  { type: "Row 3", trees: ["Tree1", "Tree2", "Tree3", "Tree4", "Tree5"]}, //"Tree6", "Tree7", "Tree8", "Tree9", "Tree10"] },
  { type: "Row 4", trees: ["Tree1", "Tree2", "Tree3", "Tree4", "Tree5"]},// "Tree6", "Tree7", "Tree8", "Tree9", "Tree10"] },
  { type: "Row 5", trees: ["Tree1", "Tree2", "Tree3", "Tree4", "Tree5"]}, //"Tree6", "Tree7", "Tree8", "Tree9", "Tree10"] },
 /* { type: "Row 6", trees: ["Tree1", "Tree2", "Tree3", "Tree4", "Tree5", "Tree6", "Tree7", "Tree8", "Tree9", "Tree10"] },
  { type: "Row 7", trees: ["Tree1", "Tree2", "Tree3", "Tree4", "Tree5", "Tree6", "Tree7", "Tree8", "Tree9", "Tree10"] },
  { type: "Row 8", trees: ["Tree1", "Tree2", "Tree3", "Tree4", "Tree5", "Tree6", "Tree7", "Tree8", "Tree9", "Tree10"] },
  { type: "Row 9", trees: ["Tree1", "Tree2", "Tree3", "Tree4", "Tree5", "Tree6", "Tree7", "Tree8", "Tree9", "Tree10"] },
  { type: "Row 10", trees: ["Tree1", "Tree2", "Tree3", "Tree4", "Tree5", "Tree6", "Tree7", "Tree8", "Tree9", "Tree10"] },
  { type: "Row 11", trees: ["Tree1", "Tree2", "Tree3", "Tree4", "Tree5", "Tree6", "Tree7", "Tree8", "Tree9", "Tree10"] },
  { type: "Row 12", trees: ["Tree1", "Tree2", "Tree3", "Tree4", "Tree5", "Tree6", "Tree7", "Tree8", "Tree9", "Tree10"] },*/
];

const generateDayWiseYield = (days, rows) => {
  return Array.from({ length: days }, (_, day) => ({
    day: `Day ${day + 1}`,
    data: rows.map((row, index) => ({
      row: `Row ${index + 1}`,
      yield: Math.floor(100 + Math.random() * 100),
    })),
  }));
};

const dayWiseYieldData = generateDayWiseYield(7, orchardData);

const generateDayWiseDisease = (days, totalTrees) => {
  return Array.from({ length: days }, (_, day) => ({
    day: `Day ${day + 1}`,
    diseases: [
      { disease: "Blight", count: Math.floor((totalTrees * 0.2) * Math.random()) },
      { disease: "Powdery Mildew", count: Math.floor((totalTrees * 0.15) * Math.random()) },
      { disease: "Rust", count: Math.floor((totalTrees * 0.3) * Math.random()) },
    ],
  }));
};

const totalTrees = orchardData.reduce((acc, row) => acc + row.trees.length, 0);
const dayWiseDiseaseData = generateDayWiseDisease(7, totalTrees);

const recommendations = [
  "Apply fungicide for Powdery Mildew",
  "Monitor and treat Rust immediately",
  "Prune infected branches to control Blight",
];

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      {/* Routes */}
      <Routes>
        {/* Home Page (App.js Content) */}
        
        <Route
          path="/"
          element={
            <div className="App">
    

              {/*<header className="navbar">
                <img src={logo1} alt="Logo" />
                <nav>
                  <ul>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/RowColumnMap">MAP</Link></li>
                    <li><Link to="/Farmer">SCHEDULE</Link></li>
                    <li><a href="report.html">REPORT</a></li>
                    </ul>
                </nav>
              </header>*/}
             <About/>
              <section>
                
             
               
               { /*<h1>Welcome to Orchard Manager</h1>
              <Farmer />*/}
                  
                <ChatBot />
              </section>

              <footer className="footer">
                <p>&copy; 2024 Orchard Manager. All rights reserved.</p>
              </footer>
            </div>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />
        <Route path="/Farmer" element={<Farmer />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Vendors" element={<Vendors />} />
        <Route path="/Consumer" element={<Consumer />} />
        <Route path="/DroneProvider" element={<DroneProvider />} />
        <Route path="/DisplayVendors" element={<DisplayVendors />} />
        <Route path="/BookingForm" element={<BookingForm />} />
        
        {/* Map Page */}
        
        <Route
          path="/RowColumnMap"
          element={
            
            <section id="map">
             
              <RowColumnMap data={orchardData} />
              
            </section>
          
          }
        />
        
      </Routes>
     

    </Router>
  );
}

export default App;
