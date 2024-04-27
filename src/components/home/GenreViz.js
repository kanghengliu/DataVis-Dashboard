import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import rawData from '../../../public/data/movies_by_year_and_genre.json'; 

const GenreRatings = () => {
  const [chartData, setChartData] = useState([]);

  // Define the genres to include in the chart outside useEffect to be accessible globally in the component
  const genresToShow = ['Action', 'Comedy', 'Drama'];

  useEffect(() => {
    // Filter data for the years 2013 to 2023 and specific genres
    const filteredData = rawData.filter(item =>
      item.Year >= 2013 && item.Year <= 2023 && genresToShow.includes(item.Genre)
    );

    // Transform data to fit the chart: group by year with subgroups for each genre's average rating
    const processedData = filteredData.reduce((acc, item) => {
      const yearEntry = acc.find(entry => entry.Year === item.Year);
      if (yearEntry) {
        yearEntry[item.Genre] = item.AverageRating;
      } else {
        acc.push({ Year: item.Year, [item.Genre]: item.AverageRating });
      }
      return acc;
    }, []);

    setChartData(processedData);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" label={{ value: 'Year', position: 'insideBottom', offset: -1 }} />
        <YAxis label={{ value: 'Average Rating', angle: -90, position: 'insideLeft', offset: 10 }} />
        <Tooltip />
        <Legend />
        {genresToShow.map((genre, idx) => (
          <Bar key={idx} dataKey={genre} stackId="a" fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GenreRatings;


