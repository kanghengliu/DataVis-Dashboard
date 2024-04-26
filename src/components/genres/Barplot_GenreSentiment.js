import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useSWR from 'swr';



// const AreaChartPlot = () => {
  // const fetcher = url => fetch(url).then(res => res.json());
  // // const AreaChartPlot = () => {
  // const { data, error } = useSWR('/sentiment.json', fetcher);
  
  
  const data = require('../../../public/sentiment.json');
  export default class Example extends PureComponent {
    
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
          <XAxis dataKey="Category" minTickGap={5} angle={-45} textAnchor="end" height={60} />
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
