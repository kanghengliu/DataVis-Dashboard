import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import axios from "axios";
import "./Home.css"; // Add this line for additional styling

const FilterCast = ({ onFilterChange }) => {
  const [numVotes, setNumVotes] = useState(500000);
  const [averageRating, setAverageRating] = useState(8);

  useEffect(() => {
    onFilterChange({ numVotes, averageRating });
  }, [numVotes, averageRating, onFilterChange]);

  return (
    <div className="filter-cast-container">
      <div className="slider-container">
        <label>Num Votes:</label>
        <Slider
          min={0}
          max={1000000}
          value={numVotes}
          onChange={(e, newValue) => setNumVotes(newValue)}
          step={50000}
          valueLabelDisplay="auto"
        />

        <label>Average Rating:</label>
        <Slider
          min={1}
          max={10}
          value={averageRating}
          onChange={(e, newValue) => setAverageRating(newValue)}
          step={0.1}
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  );
};

const Home = () => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilterChange = async (filters) => {
    const { numVotes, averageRating } = filters;

    const response = await axios.get("/data/cast_filter.json");
    const parsedData = response.data;

    const counts = parsedData
      .filter(item => item.numVotes > numVotes && item.averageRating > averageRating)
      .reduce((acc, item) => {
        acc[item.primaryName] = (acc[item.primaryName] || 0) + 1;
        return acc;
      }, {});

    const sorted = Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    const top10 = sorted.slice(0, 10);

    setFilteredData(top10);
  };

  return (
    <div className="home-container">

      <div className="home-content">
        <FilterCast onFilterChange={handleFilterChange} />

        <div className="list-container">
          {filteredData.map((person, index) => (
            <div key={index}>
              <p>{person.name}: {person.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
