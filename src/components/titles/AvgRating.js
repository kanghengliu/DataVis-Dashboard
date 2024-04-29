import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Label, ReferenceLine, Customized } from 'recharts';

const fetcher = url => fetch(url).then(res => res.json());

const AreaChartPlot = ({ tconst }) => {
    const { data, error } = useSWR('/data/rating_counts.json', fetcher);
    const [movieRating, setMovieRating] = useState(null);

    useEffect(() => {
        fetch('/data/movie_ratings.json')
            .then(res => res.json())
            .then(data => {
                const movie = data.find(m => m.tconst === tconst);
                if (movie) {
                    setMovieRating(movie.Rating);
                }
            });
    }, [tconst]);

    if (error) return <div>Failed to load data.</div>;
    if (!data) return <div>Loading...</div>;


    const renderCustomImage = (props) => {
      const { payload, x, y, width, height } = props;
      console.log("payload", payload)
      if (!movieRating || !payload) return null; 
      // Find the plot point that matches the movieRating
      const entry = payload.find(p => p.Rating === movieRating);
      console.log("entry", entry)
      if (!entry) return null;
      return (
          <image href="/data/image.png" x={x + width / 2 - 10} y={y + height / 2 - 10} width={20} height={20} />
      );
  };

    return (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={500} height={300} data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E34546" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#E34546" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="Rating">
                <Label value="Rating" offset={0} position="bottom" />
              </XAxis>
              <YAxis>
                <Label value="Number of Movies" offset={0} position="insideLeft" angle={-90} style={{ textAnchor: 'middle' }} />
              </YAxis>
              <Tooltip />
              <Area type="monotone" dataKey="Number of Movies" stroke="#E34546" fillOpacity={1} fill="url(#colorUv)" />
              {movieRating && (
                  <ReferenceLine x={movieRating} stroke="red" label={{ value: `Rating: ${movieRating}`, position: 'top' }} />
              )}
              <Customized component={renderCustomImage} />
            </AreaChart>
          </ResponsiveContainer>
        </>
    );
};

export default AreaChartPlot;
