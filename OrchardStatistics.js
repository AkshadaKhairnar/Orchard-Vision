import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import "./OrchardStatistics.css";

const OrchardStatistics = ({ dayWiseYieldData, dayWiseDiseaseData, recommendations }) => {
  const yieldRef = useRef();
  const diseaseRef = useRef();
  const [currentDay, setCurrentDay] = useState(0); // Track selected day

  useEffect(() => {
    const yieldData = dayWiseYieldData[currentDay].data;

    // Render Bar Chart
    const yieldSvg = d3.select(yieldRef.current);
    yieldSvg.selectAll("*").remove(); // Clear previous chart

    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    yieldSvg.attr("width", width).attr("height", height);
    const xScale = d3
      .scaleBand()
      .domain(yieldData.map(d => d.row))
      .range([0, chartWidth])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(yieldData, d => d.yield)])
      .range([chartHeight, 0]);

    const chart = yieldSvg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    chart
      .selectAll(".bar")
      .data(yieldData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => xScale(d.row))
      .attr("y", d => yScale(d.yield))
      .attr("width", xScale.bandwidth())
      .attr("height", d => chartHeight - yScale(d.yield))
      .attr("fill", "teal");

    chart
      .append("g")
      .attr("transform", `translate(0,${chartHeight})`)
      .call(d3.axisBottom(xScale));

    chart.append("g").call(d3.axisLeft(yScale));

    // Render Pie Chart for Diseases
    const diseaseData = dayWiseDiseaseData[currentDay].diseases;

    const diseaseSvg = d3.select(diseaseRef.current);
    diseaseSvg.selectAll("*").remove(); // Clear previous chart

    const pieWidth = 300;
    const pieHeight = 300;
    const radius = Math.min(pieWidth, pieHeight) / 2;

    const pieChart = diseaseSvg
      .append("g")
      .attr("transform", `translate(${pieWidth / 2},${pieHeight / 2})`);

    const pie = d3.pie().value(d => d.count);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    pieChart
      .selectAll("path")
      .data(pie(diseaseData))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i));
  }, [currentDay, dayWiseYieldData, dayWiseDiseaseData]);

  return (
    <div className="statistics-container">
      <div className="day-selector">
        <h3>Select Day</h3>
        {dayWiseYieldData.map((dayData, index) => (
          <button key={index} onClick={() => setCurrentDay(index)}>
            {dayData.day}
          </button>
        ))}
      </div>
      <div className="chart-container">
        <h3>Yield Prediction - {dayWiseYieldData[currentDay].day}</h3>
        <svg ref={yieldRef}></svg>
      </div>
      <div className="chart-container">
        <h3>Diseases Detected - {dayWiseDiseaseData[currentDay].day}</h3>
        <svg ref={diseaseRef}></svg>
      </div>
      <div className="recommendation-container">
        <h3>Disease Recommendations</h3>
        <ul>
          {recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrchardStatistics;
