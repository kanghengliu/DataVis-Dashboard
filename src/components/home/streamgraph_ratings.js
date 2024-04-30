import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './axis.css';


function Streamgraph() {
  const ref = useRef(); // For the SVG element
  const dataPath = '/data/genre_avg_rating.json'; // Path to your JSON file

  useEffect(() => {
    d3.json(dataPath).then(data => {
      if (data) {
        const margin = { top: 20, right: 20, bottom: 40, left: 60 };
        const width = 450 - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;

        const svg = d3.select(ref.current)
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);

        const parsedData = Object.entries(data).map(([rating, counts]) => ({
          averageRating: parseFloat(rating),
          total: Object.values(counts).reduce((acc, cur) => acc + cur, 0),
          ...counts
        }));

        const genres = Object.keys(data[Object.keys(data)[0]]);

        const maxTotal = d3.max(parsedData, d => d.total);
        const maxCount = maxTotal / 2;

        const stack = d3.stack()
          .keys(genres)
          .order(d3.stackOrderNone)
          .offset(d3.stackOffsetSilhouette)
          (parsedData);

        const x = d3.scaleLinear()
          .domain([-maxCount, maxCount])
          .range([0, width]);

        const y = d3.scaleLinear()
          .domain([1, 10])
          .range([height, 0]);

        // Define custom color array
        const customColors = ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', 
                            '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'];
                            
        const color = d3.scaleOrdinal(customColors); // Use the custom color array

        const area = d3.area()
          .x(d => x(d[0]))
          .x1(d => x(d[1]))
          .y(d => y(d.data.averageRating))
          .curve(d3.curveBasis);

        // Tooltip setup
        const tooltip = d3.select("body").append("div")
          .attr("class", "tooltip")
          .style("opacity", 0)
          .style("position", "absolute")
          .style("background-color", "black")
          .style("border", "solid")
          .style("border-width", "2px")
          .style("border-radius", "5px")
          .style("padding", "5px");

        svg.selectAll('.layer')
          .data(stack)
          .join('path')
          .attr('class', 'area')
          .style("fill", (d, i) => color(i))
          .attr('d', area)
          .on("mouseover", (event, d) => {
              tooltip.transition()
                .duration(200)
                .style("opacity", 0.9);
              tooltip.html(`Genre: ${d.key}`)
                .style("left", `${event.pageX}px`)
                .style("top", `${event.pageY}px`);
          })
          .on("mouseout", () => {
              tooltip.transition()
                .duration(500)
                .style("opacity", 0);
          });

        // Axis rendering with gray styling
        const xAxis = d3.axisBottom(x).tickFormat(d => Math.abs(d));
        const yAxis = d3.axisLeft(y).tickFormat(d => Math.abs(d));

        svg.append("g")
            .attr('transform', `translate(0,${height})`)
            .call(xAxis);
    
        svg.selectAll(".tick text")
            .style("fill", "gray"); // For text tick labels
        
        svg.selectAll(".tick line")
            .style("stroke", "gray"); // For tick lines
        
        svg.selectAll(".domain")
            .style("stroke", "gray"); // For the axis line
        
        svg.append("g")
            .call(yAxis);
        
        svg.selectAll(".y-axis .tick text")
            .style("fill", "gray"); // For text tick labels
        
        svg.selectAll(".y-axis .tick line")
            .style("stroke", "gray"); // For tick lines
        
        svg.selectAll(".y-axis .domain")
            .style("stroke", "gray"); // For the axis line
    
        // Re-add labels after axis rendering
        svg.append('g')
          .attr('transform', `translate(0,${height})`)
          .append('text')
          .attr("class", "axis-label")
          .attr("fill", "gray")
          .attr("y", 30)
          .attr("x", width / 2)
          .attr("text-anchor", "middle")
          .text("Count");

        svg.append("g")
          .call(d3.axisLeft(y))
          .append('text')
          .attr("class", "axis-label")
          .attr("fill", "gray")
          .attr("transform", "rotate(-90)")
          .attr("y", -30)
          .attr("x", -height / 2)
          .attr("text-anchor", "middle")
          .text("Rating");

        // Cleanup tooltip on dismount
        return () => d3.select('.tooltip').remove();
      }
    });
  }, []);

  return (
    <svg ref={ref}></svg>
  );
}

export default Streamgraph;
