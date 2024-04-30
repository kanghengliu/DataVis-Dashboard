import React from 'react';
import useSWR from 'swr';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Label, Legend } from 'recharts';


const fetcher = url => fetch(url).then(res => res.json());

const AreaChartPlot = () => {
    const { data, error } = useSWR('/averageRating.json', fetcher);

    if (error) return <div>Failed to load data.</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={500} height={300} data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7af576" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#7af576" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="Year">
                <Label value="Year" offset={1} position="bottom" />
              </XAxis>
              <YAxis  domain={[5.5, 8]}>
                <Label value="Average Rating" offset={0} position="insideLeft" angle={-90} style={{ textAnchor: 'middle' }} />
              </YAxis>
              <Tooltip />
              <Legend layout="horizontal" verticalAlign="top" align="center" wrapperStyle={{ top: 0 }} />
              <Area type="monotone" dataKey="Adventure" stroke="#d53e4f" fillOpacity={0} fill="url(#colorUv)" />
              <Area type="monotone" dataKey="Comedy" stroke="#f46d43" fillOpacity={0} fill="url(#colorPv)" />
              <Area type="monotone" dataKey="Drama" stroke="#FED258" fillOpacity={0} fill="url(#colorPv)" />
              <Area type="monotone" dataKey="Romance" stroke="#3288bd" fillOpacity={0} fill="url(#colorPv)" />
              <Area type="monotone" dataKey="Thriller" stroke="#5e4fa2" fillOpacity={0} fill="url(#colorPv)" />
            </AreaChart>
          </ResponsiveContainer>
        </>
    );
};

export default AreaChartPlot;
