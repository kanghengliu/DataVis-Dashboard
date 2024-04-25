import React, { useEffect } from 'react';
import * as d3 from 'd3';

function GenreInteractionChart() {
  useEffect(() => {
    // Set the dimensions of the canvas/graph
    const width = 275;
    const height = 275;
    const outerRadius = Math.min(width, height) * 0.5 - 40;
    const innerRadius = outerRadius - 30;

    // Define your custom color array
    const customColors = ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', 
                          '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'];

    // The color scale
    const color = d3.scaleOrdinal(customColors);

    // Append the SVG object to the body of the page
    const svg = d3.select("#genreChordChart")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2 - 30}, ${height / 2})`);

    // Create the tooltip
    const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("padding", "10px")
      .style("background", "white")
      .style("border-radius", "5px")
      .style("text-align", "center")
      .style("pointer-events", "none");

    // Function to draw the chord diagram
    function drawChordDiagram(genreData) {
      const chord = d3.chord()
        .padAngle(0.05)
        .sortSubgroups(d3.descending)(genreData.matrix);

      const arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

      const ribbon = d3.ribbon()
        .radius(innerRadius);

      // Set the domain of the color scale to match genre names
      color.domain(Object.keys(genreData.index));

      // Draw the outer circle
      const group = svg.datum(chord)
        .append("g")
        .selectAll("g")
        .data(d => d.groups)
        .enter().append("g");

      group.append("path")
        .style("fill", d => color(d.index))
        .style("stroke", d => d3.rgb(color(d.index)).darker())
        .attr("d", arc)
        .on("mouseover", (event, d) => {
          tooltip.transition()
            .duration(200)
            .style("opacity", 1);
          const genre = Object.keys(genreData.index)[d.index];
          const count = d.value; // Total count for the genre
          tooltip.html(`${genre}<br/>${count} movies`)
            .style("left", `${event.pageX}px`)
            .style("top", `${event.pageY - 28}px`);
        })
        .on("mouseout", () => {
          tooltip.transition()
            .duration(500)
            .style("opacity", 0);
        });

      // Draw the chords
      svg.datum(chord)
        .append("g")
        .selectAll("path")
        .data(chords => chords)
        .enter().append("path")
        .attr("d", ribbon)
        .style("fill", d => color(d.target.index))
        .style("stroke", d => d3.rgb(color(d.target.index)).darker())
        .on("mouseover", (event, d) => {
          tooltip.transition()
            .duration(200)
            .style("opacity", 1);
          tooltip.html(`${Object.keys(genreData.index)[d.target.index]} & ${Object.keys(genreData.index)[d.source.index]}<br/>${d.source.value} shared movies`)
            .style("left", `${event.pageX}px`)
            .style("top", `${event.pageY - 28}px`);
        })
        .on("mouseout", () => {
          tooltip.transition()
            .duration(500)
            .style("opacity", 0);
        });

      // Draw the legend
      const legend = svg.append("g")
        .attr("class", "legend")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "end")
        .selectAll("g")
        .data(Object.keys(genreData.index))  // Use genre names for the legend data
        .enter().append("g")
        .attr("transform", (d, i) => `translate(20,${(i - Object.keys(genreData.index).length / 2) * 20})`);

      legend.append("rect")
        .attr("x", width / 2 - 19)
        .attr("width", 14)
        .attr("height", 14)
        .attr("fill", color);

      legend.append("text")
        .attr("x", width / 2 - 24)
        .attr("y", 9.5)
        .attr("dy", "0.32em")
        .text(d => d)
        .style("font-size", "smaller"); // This makes the text smaller
    }

    // Fetch the genre_matrix.json file
    d3.json('/data/genre_matrix.json').then(genreData => {
      drawChordDiagram(genreData);
    });

    // Clean up the tooltip when the component is unmounted
    return () => {
      tooltip.remove();
    };
  }, []);

  return (
    <div>
      <svg id="genreChordChart"></svg>
    </div>
  );
}

export default GenreInteractionChart;
