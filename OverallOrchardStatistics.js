import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const OverallOrchardStatistics = ({ dayWiseYieldData, dayWiseDiseaseData }) => {
  const svgRef = useRef(null);
  const pieChartRef = useRef(null);

  // Process day-wise yield data to get total yield for each day
  const totalYieldPerDay = dayWiseYieldData.map(dayData => ({
    day: dayData.day,
    totalYield: dayData.data.reduce((sum, row) => sum + row.yield, 0),
  }));

  // Process disease data to get total disease counts across all days
  const totalDiseaseCounts = dayWiseDiseaseData.reduce((acc, dayData) => {
    dayData.diseases.forEach(disease => {
      if (!acc[disease.disease]) {
        acc[disease.disease] = 0;
      }
      acc[disease.disease] += disease.count;
    });
    return acc;
  }, {});

  const diseaseData = Object.keys(totalDiseaseCounts).map(disease => ({
    disease: disease,
    count: totalDiseaseCounts[disease],
  }));

  useEffect(() => {
    // Line Chart for overall yield
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Set up the scales for line chart
    const x = d3.scaleBand()
      .domain(totalYieldPerDay.map(d => d.day))
      .range([0, width])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(totalYieldPerDay, d => d.totalYield)])
      .nice()
      .range([height, 0]);

    // Add X-axis and Y-axis to the chart
    svg.append('g')
      .selectAll('.x-axis')
      .data(totalYieldPerDay)
      .enter()
      .append('text')
      .attr('class', 'x-axis')
      .attr('x', d => x(d.day) + x.bandwidth() / 2)
      .attr('y', height + 30)
      .attr('text-anchor', 'middle')
      .text(d => d.day);

    svg.append('g')
      .call(d3.axisLeft(y));

    // Line generator for overall yield line chart
    const line = d3.line()
      .x(d => x(d.day) + x.bandwidth() / 2)
      .y(d => y(d.totalYield));

    // Append the line path for the overall yield
    svg.append('path')
      .data([totalYieldPerDay])
      .attr('class', 'line')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2);

    // Pie chart for diseases
    const pieWidth = 400;
    const pieHeight = 400;
    const pieMargin = { top: 20, right: 30, bottom: 40, left: 40 };

    const pieSvg = d3.select(pieChartRef.current)
      .attr('width', pieWidth + pieMargin.left + pieMargin.right)
      .attr('height', pieHeight + pieMargin.top + pieMargin.bottom)
      .append('g')
      .attr('transform', `translate(${pieWidth / 2 + pieMargin.left}, ${pieHeight / 2 + pieMargin.top})`);

    // Define the pie chart color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Create the pie chart
    const pie = d3.pie().value(d => d.count);
    const arc = d3.arc().innerRadius(0).outerRadius(Math.min(pieWidth, pieHeight) / 2 - 10);

    const pieChartData = pie(diseaseData);

    // Append the pie slices
    pieSvg.selectAll('.arc')
      .data(pieChartData)
      .enter()
      .append('path')
      .attr('class', 'arc')
      .attr('d', arc)
      .attr('fill', d => color(d.data.disease));

    // Add labels to the pie chart
    pieSvg.selectAll('.label')
      .data(pieChartData)
      .enter()
      .append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .text(d => d.data.disease);
  }, [totalYieldPerDay, diseaseData]);

  return (
    <div>
      <h3>Overall Yield for Orchard (Line Plot)</h3>
      <svg ref={svgRef}></svg>
      
      <h3>Overall Disease Distribution (Pie Chart)</h3>
      <svg ref={pieChartRef}></svg>
    </div>
  );
};

export default OverallOrchardStatistics;
