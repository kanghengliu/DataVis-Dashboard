import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useSWR from "swr";
import "./CustomAreaPlot.css";

const fetcher = url => fetch(url).then(res => res.json());

const CustomAreaChart = () => {
  const { data, error } = useSWR('/data/genre_data.json', fetcher);

  const [activeKey, setActiveKey] = useState(null); // Null when no line is hovered
    if (error) return <div>Failed to load data.</div>;
    if (!data) return <div>Loading...</div>;

  const handleLegendMouseEnter = (o) => {
    setActiveKey(o.dataKey);
  };

  const handleLegendMouseLeave = () => {
    setActiveKey(null);
  };

  const lineOpacity = (key) =>
    activeKey === key || activeKey === null ? 0.8 : 0.2;

  return (
    <ResponsiveContainer width={730} height={330}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 50, bottom: 10 }} // Increased left and bottom margins
      >
        <XAxis dataKey="year" label={{ value: "Year", position: "bottom", dy: -6 }} /> 
        <YAxis label={{ value: "Revenue ($ mil)", angle: -90, position: "left", dx: -10, dy: -55}} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip wrapperStyle={{zIndex: 10000, fontSize: '0.75rem', margin: 0, padding: 0, backgroundColor: "white"}} />
        <Legend layout="horizontal" verticalAlign="top" align="center"
          onMouseEnter={handleLegendMouseEnter}
          onMouseLeave={handleLegendMouseLeave}
        />

        {/* Area definitions */}
        <Area type="monotone" dataKey="Action" stroke="#9e0142" fillOpacity={0.5} fill="#9e0142" opacity={lineOpacity("Action")} />
        <Area type="monotone" dataKey="Adventure" stroke="#d53e4f" fillOpacity={0.5} fill="#d53e4f" opacity={lineOpacity("Adventure")} />
        <Area type="monotone" dataKey="Comedy" stroke="#f46d43" fillOpacity={0.5} fill="#f46d43" opacity={lineOpacity("Comedy")} />
        <Area type="monotone" dataKey="Crime" stroke="#fdae61" fillOpacity={0.5} fill="#fdae61" opacity={lineOpacity("Crime")} />
        <Area type="monotone" dataKey="Drama" stroke="#fee08b" fillOpacity={0.5} fill="#fee08b" opacity={lineOpacity("Drama")} />
        <Area type="monotone" dataKey="Fantasy" stroke="#D0EB3C" fillOpacity={0.5} fill="#e6f598" opacity={lineOpacity("Fantasy")} />
        <Area type="monotone" dataKey="Horror" stroke="#abdda4" fillOpacity={0.5} fill="#abdda4" opacity={lineOpacity("Horror")} />
        <Area type="monotone" dataKey="Mystery" stroke="#66c2a5" fillOpacity={0.5} fill="#66c2a5" opacity={lineOpacity("Mystery")} />
        <Area type="monotone" dataKey="Romance" stroke="#3288bd" fillOpacity={0.5} fill="#3288bd" opacity={lineOpacity("Romance")} />
        <Area type="monotone" dataKey="Thriller" stroke="#5e4fa2" fillOpacity={0.5} fill="#5e4fa2" opacity={lineOpacity("Thriller")} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomAreaChart;
