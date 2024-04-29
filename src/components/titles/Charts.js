'use client'

import React from 'react';
import MoviesMap from './map';
import CastList from './cast';
import FinancialInfo from './financials';
import MoviesOverTime from './MovieNumber';
import Ratings from './AvgRating';

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
          <div className="w-3/4 h-[600px] bg-gray-700 rounded flex backdrop-blur-2xl bg-white/50 justify-center items-center p-2">
            <MoviesMap tconst={tconst} />
          </div>
          <div className="w-1/4 h-[600px] bg-gray-700 rounded flex
          backdrop-blur-xxl bg-white/50 justify-center items-center p-2">
            <FinancialInfo tconst={tconst} />
          </div>
        </div>
      </section>

      <section className="flex my-4 px-4 gap-2">
        <div className="w-1/3 h-[250px] bg-gray-700 rounded backdrop-blur-2xl bg-white/50 justify-center items-center"><MoviesOverTime tconst={tconst}/></div>
        <div className="w-1/3 h-[250px] bg-gray-700 rounded backdrop-blur-2xl bg-white/50 justify-center p-4">
          {/* Cast Members: */}
          <div className='flex justify-center items-center'><h3 className="font-bold text-gray-800">Cast & Crew</h3></div>
          <div className='flex justify-center items-center p-2 text-gray-800'>
          <CastList tconst={tconst} />
          </div> 
        </div>
        <div className="w-1/3 h-[250px] bg-gray-700 rounded backdrop-blur-2xl bg-white/50 justify-center items-center"><Ratings tconst={tconst}/></div>
      </section>
    </>
  );
};

export default Charts;
