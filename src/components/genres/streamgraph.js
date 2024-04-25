import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

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
          .style('background-color', 'white')
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

        // Axes
        svg.append('g')
          .attr('transform', `translate(0,${height})`)
          .call(d3.axisBottom(x).tickFormat(d3.format('d')));

        svg.append('g')
          .call(d3.axisLeft(y));

        // Calculate tick values
        const xDomain = x.domain();
        // Assuming x is a d3.scaleLinear or d3.scaleTime configured for your 'year' domain
        const xTicks = x.ticks(); // Gets the default tick values based on the scale

        // Filter the ticks to show only every 15 years
        const xTickValues = xTicks.filter((year, index) => year % 15 === 0);

        // Use these filtered tick values on your x-axis
        svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x)
            .tickValues(xTickValues)
            .tickFormat(d3.format('d'))); // Format as integer if the year data is in a date-time format, adjust as necessary
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
