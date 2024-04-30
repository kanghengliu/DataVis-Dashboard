import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import '../home/axis.css';

function Streamgraph() {
  const ref = useRef();
  const dataPath = '/data/genre2.json'; // Replace with the path to your JSON file

  useEffect(() => {
    d3.json(dataPath).then(data => {
      if (data) {
        // Dimensions and margins of the graph
        const margin = { top: 20, right: 20, bottom: 30, left: 50 };
        const width = 450 - margin.left - margin.right;
        const height = 250 - margin.top - margin.bottom;

        // Append the SVG object to the current ref element
        const svg = d3.select(ref.current)
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);

        // Parse the data into a suitable format
        const parsedData = Object.entries(data).map(([key, value]) => ({ year: key, ...value }));

        // List of genres
        const genres = Object.keys(data[Object.keys(data)[0]]);

        // Stack the data
        const stack = d3.stack()
          .keys(genres)
          .value((d, genre) => d[genre])
          (parsedData);

        // Scales
        const x = d3.scaleLinear()
          .domain(d3.extent(parsedData, d => +d.year))
          .range([0, width]);

        const y = d3.scaleLinear()
          .domain([0, d3.max(stack, layer => d3.max(layer, sequence => sequence[1]))])
          .range([height, 0]);

        // Define your custom color array
        const customColors = ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', 
                            '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'];

        // The color scale
        const color = d3.scaleOrdinal(customColors);

        // Tooltip
        const tooltip = d3.select('body').append('div')
          .attr('class', 'tooltip')
          .style('opacity', 0)
          .style('position', 'absolute')
          .style('background-color', 'black')
          .style('border', 'solid')
          .style('border-width', '2px')
          .style('border-radius', '5px')
          .style('padding', '5px');

        // Area generator
        const area = d3.area()
          .x(d => x(+d.data.year))
          .y0(d => y(d[0]))
          .y1(d => y(d[1]))
          .curve(d3.curveBasis); // To make the lines smooth

        // Draw the layers
        const layers = svg.selectAll('.layer')
          .data(stack)
          .enter().append('g')
          .attr('class', 'layer');

        layers.append('path')
          .attr('class', 'area')
          .style('fill', (d, i) => color(i))
          .attr('d', area)
          .on('mouseover', (event, d) => {
            tooltip.transition()
              .duration(200)
              .style('opacity', 0.9);
            tooltip.html('Genre: ' + d.key)
              .style('left', (event.pageX) + 'px')
              .style('top', (event.pageY) + 'px');
          })
          .on('mouseout', () => {
            tooltip.transition()
              .duration(500)
              .style('opacity', 0);
          });


        // Axis rendering with gray styling
        const xAxis = d3.axisBottom(x).tickFormat(d => Math.abs(d));
        const yAxis = d3.axisLeft(y);

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
          .attr("y", 29)
          .attr("x", width / 2)
          .attr("text-anchor", "middle")
          .text("Year");

        svg.append("g")
          .call(d3.axisLeft(y))
          .append('text')
          .attr("class", "axis-label")
          .attr("fill", "gray")
          .attr("transform", "rotate(-90)")
          .attr("y", -37)
          .attr("x", -height / 2)
          .attr("text-anchor", "middle")
          .text("Number of Movies");
      }
    });

    // Cleanup the tooltip on dismount
    return () => d3.select('.tooltip').remove();
  }, []); // Runs only once when the component mounts

  return (
    <svg ref={ref}></svg>
  );
}

export default Streamgraph;
