import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useSWR from 'swr';

const data = require('../../../public/sentiment.json');

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Category" minTickGap={5} angle={-45} textAnchor="end" height={60} />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          {/* Add the y-axis label as an SVG text element */}
          <svg width="100%" height="100%" style={{ position: "absolute", left: 0 }}>
            <text
              x={-100} // Adjust as needed
              y={37} // Adjust as needed
              transform="rotate(-90)"
              textAnchor="middle"
              style={{ fill: "#8884d8", fontSize: "12px" }}>
              Sentiment Polarity
            </text>
          </svg>
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey='2010' fill="#8884d8" />
          <Bar yAxisId="left" dataKey="2020" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}