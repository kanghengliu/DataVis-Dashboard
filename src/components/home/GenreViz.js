import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../../../public/genre_data.json';  // Path to JSON file

export default class GenreTrendsChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Action" fill="#8884d8" />
          <Bar dataKey="Adventure" fill="#82ca9d" />
          <Bar dataKey="Comedy" fill="#ffc658" />
          // Add more bars for each genre as needed
        </BarChart>
      </ResponsiveContainer>
    );
  }
}