import React from 'react';
import useSWR from 'swr';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';


const fetcher = url => fetch(url).then(res => res.json());

const AreaChartPlot = () => {
    const { data, error } = useSWR('/movie_actor_output.json', fetcher);

    if (error) return <div>Failed to load data.</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={500} height={300} data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="Actor" x1="0" y1="0" x2="0" y2="0">
                  <stop offset="5%" stopColor="#dd22f2" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#dd22f2" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7af576" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#7af576" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="Year">
                <Label value="Year" offset={1} position="bottom" />
              </XAxis>
              <YAxis>
                <Label value="Number of Actors" offset={0} position="insideLeft" angle={-90} style={{ textAnchor: 'middle' }} />
              </YAxis>
              <Tooltip />
              <Area type="monotone" dataKey="Number of Actors" stroke="#7af576" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
          </ResponsiveContainer>
        </>
    );
};

export default AreaChartPlot;
