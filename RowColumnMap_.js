import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import "./RowColumnMap.css";
import compass from "./Assets/comp2.png";
import logo1 from './images/logo.png';
import { Link } from 'react-router-dom';

const RowColumnMap = ({ data }) => {
  const svgRef = useRef();
  const [selectedTree, setSelectedTree] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [yieldDetails, setYieldDetails] = useState(null); // Tree details from the backend
  const [diseaseDetails, setDiseaseDetails] = useState(null); // Tree details from the backend
  const [ndviDetails, setNdviDetails] = useState(null); // Tree details from the backend


  const fetchYieldDetails = async (row, tree) => {
    setLoading(true);
    setYieldDetails(null);
    try {
      const response = await fetch(
        `http://localhost:5001/process-images?row=${row}&tree=${tree}`
      );
      const result = await response.json();
      setYieldDetails(result);
    } catch (error) {
      setYieldDetails({ error: "Failed to fetch tree details" });
    }
    setLoading(false);
  };

  const fetchDiseaseDetails = async (row, tree) => {
    setLoading(true);
    setDiseaseDetails(null);
    try {
      const response = await fetch(
        `http://localhost:5000/process-images?row=${row}&tree=${tree}`
      );
      const result = await response.json();
      setDiseaseDetails(result);
    } catch (error) {
      setDiseaseDetails({ error: "Failed to fetch tree details" });
    }
    setLoading(false);
  };

  const fetchNdviDetails = async (row, tree) => {
    setLoading(true);
    setNdviDetails(null);
    try {
      const response = await fetch(
        `http://localhost:5002/process-images?row=${row}&tree=${tree}`
      );
      const result = await response.json();
      setNdviDetails(result);
    } catch (error) {
      setNdviDetails({ error: "Failed to fetch tree details" });
    }
    setLoading(false);
  };
  
  useEffect(() => {
    const rowHeight = 50;
    const columnWidth = 50;
    const rows = data.length;
    const maxColumns = Math.max(...data.map(row => row.trees.length));

    const width = maxColumns * columnWidth + 100;
    const height = rows * rowHeight + 50;

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Clear previous content
    svg.selectAll("*").remove();

    // Draw rows and trees
    data.forEach((row, rowIndex) => {
      const y = rowIndex * rowHeight + 20;

      // Add row label
      svg.append("text")
        .attr("x", 10)
        .attr("y", y + 10)
        .text(row.type)
        .attr("font-size", "12px")
        .attr("font-weight", "bold");

      // Add trees in columns
      row.trees.forEach((tree, colIndex) => {
        const x = colIndex * columnWidth + 100;

        // Draw a circle for each tree
        svg.append("circle")
          .attr("cx", x)
          .attr("cy", y)
          .attr("r", 10)
          .attr("fill", "green")
          .style("cursor", "pointer")
          .on("click", () => {
            setSelectedTree({ row: row.type, tree });
            fetchYieldDetails(row.type.replace("Row ", ""), tree.replace("Tree", ""));
            fetchDiseaseDetails(row.type.replace("Row ", ""), tree.replace("Tree", ""));
            fetchNdviDetails(row.type.replace("Row ", ""), tree.replace("Tree", ""));

          });

        // Add tree name below the circle
        svg.append("text")
          .attr("x", x)
          .attr("y", y + 20)
          .text(tree)
          .attr("font-size", "10px")
          .attr("text-anchor", "middle");
      });
    });
  }, [data]);

  return (
    <div className="App">
    <header className="navbar">
      <img src={logo1} alt="Logo" />
      <nav>
        <ul>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/RowColumnMap">MAP</Link></li>
          <li><Link to="/Farmer">SCHEDULE</Link></li>
          <li><a href="report.html">REPORT</a></li>
          
        </ul>
      </nav>
    </header>
    <h1>ORCHARD MAP</h1>
    <div className="map-container">
      <img src={compass} alt="Logo" width={50} height={50} />;

      <svg ref={svgRef}></svg>
      <div className="tree-data">
        
        {selectedTree && (
          <div>
            <h3>Selected Tree Data</h3>
            <p><strong>Row:</strong> {selectedTree.row}</p>
            <p><strong>Tree:</strong> {selectedTree.tree}</p>
          </div>
        )}
        {loading && <p>Loading tree details...</p>}
        {yieldDetails && (
          <div>
            <h3>Tree Details</h3>
            {/*{yieldDetails.error ? (
              <p>{yieldDetails.error}</p>
            ) : (
              <ul>
                {yieldDetails.map((item, index) => (
                  <li key={index}> 
                    <strong> Total Apples Detected:</strong> {item.total_apples_detected}
                  </li>
                ))}
              </ul>
            )}*/}

            
          </div>
        )}
        {/*{diseaseDetails && (
          <div>
            {diseaseDetails.error ? (
              <p>{diseaseDetails.error}</p>
            ) : (
              <ul>
                {diseaseDetails.map((item, index) => (
                  <li key={index}> 
                    <strong> Disease Detected:</strong> {item.predicted_class}
                  </li>
                ))}
              </ul>
            )}

            
          </div>
        )}*/}

        {ndviDetails && (
  <div>
    {ndviDetails.error ? (
            <p>{ndviDetails.error}</p>
          ) : (
            <ul>
              {ndviDetails.map((item, index) => {
                // Calculate the averages
                const totalResults = item.ndvi_results.length;
                const averages = item.ndvi_results.reduce(
                  (acc, result) => {
                    acc.ndvi += result.ndvi;
                    acc.chlorophyll += result.chlorophyll;
                    return acc;
                  },
                  { ndvi: 0, chlorophyll: 0 }
                );
                const averageNdvi = (averages.ndvi / totalResults).toFixed(2);
                const averageChlorophyll = (averages.chlorophyll / totalResults).toFixed(2);
                const disease_details = item.disease_details
                const fertilizer_details = item.fertilizer_details
                const recomendation_details = item.recomendation_details
                return (
                  <li key={index}>
                    <strong>NDVI:</strong> {averageNdvi} <br />
                    <strong>Chlorophyll Content:</strong> {averageChlorophyll} <br />
                    <strong>Disease Detected: </strong> {disease_details} <br />             
                    <strong>Fertilizer Needed: </strong> {fertilizer_details} <br />             
                    <strong>Recomendations: </strong> {recomendation_details} <br />             

                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}


      </div>
    </div>
    </div>
  );
};

export default RowColumnMap;