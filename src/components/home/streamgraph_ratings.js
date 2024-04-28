import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function Streamgraph() {
  const ref = useRef();
  const tooltipRef = useRef();
  const dataPath = '/data/genre_avg_rating.json'; // Path to JSON file
  const customColors = ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', 
                        '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'];

  useEffect(() => {
    const tooltip = d3.select(tooltipRef.current);
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

        const color = d3.scaleOrdinal(customColors); // Use custom color array

        const area = d3.area()
          .x(d => x(d[0]))
          .x1(d => x(d[1]))
          .y(d => y(d.data.averageRating))
          .curve(d3.curveBasis);

        svg.selectAll('.layer')
          .data(stack)
          .join('path')
          .attr('class', 'area')
          .style('fill', (d, i) => color(i))
          .attr('d', area);

        // Axis and Labels with White Text
        svg.append('g')
          .attr('transform', `translate(0,${height})`)
          .call(d3.axisBottom(x).tickFormat(d => Math.abs(d)))
          .append('text')
          .attr('class', 'axis-label')
          .attr('fill', 'white') // Changed color to white
          .attr('y', 30)
          .attr('x', width / 2)
          .attr('text-anchor', 'middle')
          .text('Count');

        svg.append('g')
          .call(d3.axisLeft(y))
          .append('text')
          .attr('class', 'axis-label')
          .attr('fill', 'white') // Changed color to white
          .attr('transform', 'rotate(-90)')
          .attr('y', -50)
          .attr('x', -height / 2)
          .attr('text-anchor', 'middle')
          .text('Rating');
      }
    });

    return () => d3.select('.tooltip').remove();
  }, []);

  return (
    <>
      <svg ref={ref}></svg>
      <div ref={tooltipRef} className="tooltip" style={{
        position: 'absolute',
        opacity: 0,
        backgroundColor: 'white',
        border: 'solid 1px #aaa',
        borderRadius: '4px',
        padding: '5px',
        pointerEvents: 'none',
        zIndex: 10
      }}></div>
    </>
  );
}

export default Streamgraph;
