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

const fetcher = url => fetch(url).then(res => res.json());

const CustomAreaChart = () => {
  const { data, error } = useSWR('/genre_data.json', fetcher);

  const [activeKey, setActiveKey] = useState(null); // Null when no line is hovered
    if (error) return <div>Failed to load data.</div>;
    if (!data) return <div>Loading...</div>;
    

  // Function to change opacity to full when a legend item is hovered
  const handleLegendMouseEnter = (o) => {
    setActiveKey(o.dataKey);
  };

  // Function to reset opacity when the mouse leaves a legend item
  const handleLegendMouseLeave = () => {
    setActiveKey(null);
  };

  // Calculate opacity for each line based on activeKey
  const lineOpacity = (key) =>
    activeKey === key || activeKey === null ? 0.8 : 0.2;

  return (
    <ResponsiveContainer width={730} height={250}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        {/* Gradient definitions go here */}
        <XAxis dataKey="year" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend
          onMouseEnter={handleLegendMouseEnter}
          onMouseLeave={handleLegendMouseLeave}
        />
        <Area
          type="monotone"
          dataKey="Action"
          stroke="#9e0142"
          fillOpacity={0.5}
          fill="#9e0142"
          opacity={lineOpacity("Action")}
        />
        <Area
          type="monotone"
          dataKey="Adventure"
          stroke="#d53e4f"
          fillOpacity={0.5}
          fill="#d53e4f"
          opacity={lineOpacity("Adventure")}
        />
        <Area
          type="monotone"
          dataKey="Comedy"
          stroke="#f46d43"
          fillOpacity={0.5}
          fill="#f46d43"
          opacity={lineOpacity("Comedy")}
        />
        <Area
          type="monotone"
          dataKey="Crime"
          stroke="#fdae61"
          fillOpacity={0.5}
          fill="#fdae61"
          opacity={lineOpacity("Crime")}
        />
        <Area
          type="monotone"
          dataKey="Drama"
          stroke="#fee08b"
          fillOpacity={0.5}
          fill="#fee08b"
          opacity={lineOpacity("Drama")}
        />
        <Area
          type="monotone"
          dataKey="Fantasy"
          stroke="#e6f598"
          fillOpacity={0.5}
          fill="#e6f598"
          opacity={lineOpacity("Fantasy")}
        />
        <Area
          type="monotone"
          dataKey="Horror"
          stroke="#abdda4"
          fillOpacity={0.5}
          fill="#abdda4"
          opacity={lineOpacity("Horror")}
        />
        <Area
          type="monotone"
          dataKey="Mystery"
          stroke="#66c2a5"
          fillOpacity={0.5}
          fill="#66c2a5"
          opacity={lineOpacity("Mystery")}
        />
        <Area
          type="monotone"
          dataKey="Romance"
          stroke="#3288bd"
          fillOpacity={0.5}
          fill="#3288bd"
          opacity={lineOpacity("Romance")}
        />
        <Area
          type="monotone"
          dataKey="Thriller"
          stroke="#5e4fa2"
          fillOpacity={0.5}
          fill="#5e4fa2"
          opacity={lineOpacity("Thriller")}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomAreaChart;
