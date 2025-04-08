import * as d3 from "d3";
import { useEffect, useRef } from "react";

const TreeMap = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 500;
    const height = 500;

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const root = d3.hierarchy(data);
    const treeLayout = d3.tree().size([width, height - 100]);
    treeLayout(root);

    // Draw links
    svg.selectAll("line")
      .data(root.links())
      .join("line")
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y)
      .attr("stroke", "black");

    // Draw nodes
    svg.selectAll("circle")
      .data(root.descendants())
      .join("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", 5)
      .attr("fill", "green");

    // Add labels
    svg.selectAll("text")
      .data(root.descendants())
      .join("text")
      .attr("x", d => d.x + 10)
      .attr("y", d => d.y)
      .text(d => d.data.name)
      .attr("font-size", "12px");
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default TreeMap;
