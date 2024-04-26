'use client'

import React from 'react';
import MoviesMap from './map';  // Make sure this path is correct

const Charts = () => {
  return (
    <>
      <section className="my-4 px-4">
        <div className="flex gap-3 mb-2 justify-center">
          <div className="w-1/2 flex justify-center item-center">
            <p className="text-gray-900 font-bold">Billy do your fucking work</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-3/4 h-[600px] bg-gray-700 rounded flex justify-center items-center p-2">
            <MoviesMap tconst="tt0944947" />  {/* Replace this tconst with the desired one */}
          </div>
          <div className="w-1/4 h-[600px] bg-gray-700 rounded flex justify-center items-center p-2">
            {/* <OTHER CHART /> */}
            {/* Placeholder for another component or chart */}
          </div>
        </div>
      </section>

      <section className="flex my-4 px-4 gap-2">
        <div className="w-1/3 h-[250px] bg-gray-700 rounded"></div>
        <div className="w-1/3 h-[250px] bg-gray-700 rounded"></div>
        <div className="w-1/3 h-[250px] bg-gray-700 rounded"></div>
      </section>
    </>
  );
};

export default Charts;
