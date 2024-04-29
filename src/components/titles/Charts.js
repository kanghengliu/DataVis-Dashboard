'use client'

import React from 'react';
import MoviesMap from './map';
import CastList from './cast';
import FinancialInfo from './financials';
import MoviesOverTime from './MovieNumber';
import Ratings from './AvgRating';
import TooltipDiv from '../TootipDiv';

const Charts = ({ tconst, title }) => {
  return (
    <>
      <section className="my-4 px-4">
        <div className="flex gap-3 mb-2 justify-center">
          <div className="w-1/2 flex justify-center item-center">
            <p className="text-gray-900 font-bold">Now Watching...  {title}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-3/4">
          <TooltipDiv tooltipText="This map displays all filming locations for the selected movie, with cow markers indicating each site. Use the search bar on the top right to input a movie title and see its filming locations globally.">
          <div className="w-full h-[520px] bg-gray-700 rounded flex backdrop-blur-2xl bg-white/50 justify-center items-center p-2">
            <MoviesMap tconst={tconst} />
          </div>
          </TooltipDiv>
          </div>
          <div className="w-1/4 h-[520px] bg-gray-700 rounded flex
          backdrop-blur-xxl bg-white/50 justify-center items-center p-2">
            <FinancialInfo tconst={tconst} />
          </div>
        </div>
      </section>

      <section className="my-4 px-4 gap-2">
      <div className="flex gap-7 my-4 px-4 mb-2 justify-center">
            <div className="w-1/3 flex justify-center items-center"><p className="text-gray-900 font-bold">Movies Released</p></div>
            <div className="w-1/3 flex justify-center items-center"><p className="text-gray-900 font-bold">Cast & Crew</p></div>
            <div className="w-1/3 flex justify-center items-center"><p className="text-gray-900 font-bold">Movie Ratings</p></div>
        </div>
        <div className="flex m-4 gap-7">
        <div className="w-1/3">
        <TooltipDiv tooltipText="This plot shows the movie's release year relative to all others, with a vertical line indicating its position over time.">
        <div className="w-full h-[250px] bg-gray-700 rounded backdrop-blur-2xl bg-white/50 justify-center items-center z-0">
          <MoviesOverTime tconst={tconst}/>
        </div>
        </TooltipDiv>
        </div>
        <div className="w-1/3 h-[250px] bg-gray-700 rounded backdrop-blur-2xl bg-white/50 justify-center p-4">
          {/* Cast Members: */}
          {/* <div className='flex justify-center items-center'><h3 className="font-bold text-gray-800">Cast & Crew</h3></div> */}
          <div className='flex justify-center items-center p-2 text-gray-800'>
          <CastList tconst={tconst} />
          </div> 
        </div>
        <div className="w-1/3">
        <TooltipDiv tooltipText="This plot visualizes the movie's rating relative to others, with a vertical line indicating its position within the rating distribution.">
        <div className="w-full h-[250px] bg-gray-700 rounded backdrop-blur-2xl bg-white/50 justify-center items-center">
          <Ratings tconst={tconst}/>
        </div>
        </TooltipDiv>
        </div>
        </div>
      </section>
    </>
  );
};

export default Charts;
