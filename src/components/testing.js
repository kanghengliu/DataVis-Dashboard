import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from './GenreInteractionChart.module.css';

function GenreInteractionChart() {
  const ref = useRef();
  const height = 275;

  // Define your custom color array
  const customColors = ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', 
                        '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'];

  useEffect(() => {
    // The color scale
    const color = d3.scaleOrdinal(customColors);

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

    function drawChordDiagram() {
      const svgElement = d3.select(ref.current);
      const rect = svgElement.node().getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const outerRadius = Math.min(width, height) * 0.5 - 40;
      const innerRadius = outerRadius - 30;

      // Clear the existing SVG content
      svgElement.selectAll("*").remove();

      const svg = svgElement
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

      // Fetch the genre_matrix.json file
      d3.json('/data/genre_matrix.json').then(genreData => {
        // Set the domain of the color scale to match genre names
        color.domain(Object.keys(genreData.index));

        // Compute the chord layout
        const chord = d3.chord()
          .padAngle(0.05)
          .sortSubgroups(d3.descending)(genreData.matrix);

        // Create the arc generator
        const arc = d3.arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius);

        // Create the ribbon generator
        const ribbon = d3.ribbon()
          .radius(innerRadius);

        // Draw the outer arcs
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

        // Draw the ribbons
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

        // Add your legend drawing code here
        // ...
      });
    }

    // Initial draw
    drawChordDiagram();

    // Redraw on window resize
    window.addEventListener('resize', drawChordDiagram);

    // Clean up the tooltip and event listener when the component is unmounted
    return () => {
      tooltip.remove();
      window.removeEventListener('resize', drawChordDiagram);
    };
  }, []);

  return (
    <svg ref={ref} id="genreChordChart" viewBox="0 0 275 275" className={styles.responsiveSvg}>
      {/* SVG elements will be added here dynamically */}
    </svg>
  );
}

export default GenreInteractionChart;
