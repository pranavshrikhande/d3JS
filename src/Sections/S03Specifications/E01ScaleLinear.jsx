import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const E01ScaleLinear = () => {
  const myElementRef = useRef(null);

  // constants
  const totalHeight = 300;
  const rectWidth = 50;
  const margin = {
    top: 20,
    right: 40,
    bottom: 20,
    left: 40,
  };

  useEffect(() => {
    const data = [30, 86, 168, 281, 303, 365]; // Example data
    const width = 300;
    const height = totalHeight;

    const svg = d3
      .select(myElementRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create a linear scale for the y-axis
    const yLinearScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)]) // Input domain: from 0 to the max value in data
      .range([height, 0]); // Output range: from the height of the SVG to 0

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * rectWidth) // x position based on the index
      .attr("y", (d) => yLinearScale(d)) // y position based on the scaled value
      .attr("width", rectWidth - 10) // Width of each bar
      .attr("height", (d) => height - yLinearScale(d)) // Height based on the scaled value
      .attr("fill", "steelblue"); // Fill color
  }, []);

  return (
    <div>
      <h3>E01 Scale Linear</h3>
      <svg ref={myElementRef} style={{ border: "1px dashed" }}></svg>
    </div>
  );
};

export default E01ScaleLinear;
