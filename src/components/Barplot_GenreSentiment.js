import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useSWR from 'swr';

const data = require('../../public/sentiment.json');

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-with-double-yaxis-zr232';

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
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Category" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          {/* <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" /> */}
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey='2010' fill="#8884d8" />
          <Bar yAxisId="left" dataKey="2020" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}