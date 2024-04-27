import React from 'react';
import useSWR from 'swr';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Label, Legend } from 'recharts';

const fetcher = url => fetch(url).then(res => res.json());

const CombinedAreaChart = () => {
    const { data: dataActors, error: errorActors } = useSWR('/movie_actor_output.json', fetcher);
    const { data: dataMovies, error: errorMovies } = useSWR('/movie_size_output.json', fetcher);

    if (errorActors || errorMovies) return <div>Failed to load data.</div>;
    if (!dataActors || !dataMovies) return <div>Loading...</div>;

    // Merge datasets based on a common key 'Year'
    const combinedData = dataActors.map(actorData => {
        const movieData = dataMovies.find(movie => movie.Year === actorData.Year) || {};
        return { ...actorData, 'Number_of_Movies': movieData['Number of Movies'] || 0 };
    });

    return (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={combinedData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorMovies" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorActors" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7af576" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#7af576" stopOpacity={0} />
                </linearGradient>
              </defs>


              <XAxis dataKey="Year" />
              <YAxis yAxisId="actors" orientation="left" stroke="#82ca9d">
                {/* <Label value="Number of Actors" angle={-90} position="insideLeft" /> */}
                <Label value="Number of Actors" offset={0} position="insideLeft" angle={-90} style={{ textAnchor: 'middle' }} />
              </YAxis>
              <YAxis yAxisId="movies" orientation="right" stroke="#8884d8">
                {/* <Label value="Number of Movies" angle={90} position="insideRight" /> */}
                <Label value="Number of Movies" offset={0} position="insideRight" angle={-90} style={{ textAnchor: 'middle' }} />
              </YAxis>
              <Tooltip />
              <Legend />
              <Area yAxisId="actors" type="monotone" dataKey="Number of Actors" stroke="#82ca9d" fillOpacity={1} fill="url(#colorActors)" />
              <Area yAxisId="movies" type="monotone" dataKey="Number_of_Movies" stroke="#8884d8" fillOpacity={1} fill="url(#colorMovies)" />
            </AreaChart>
          </ResponsiveContainer>
        </>
    );
};

export default CombinedAreaChart;
