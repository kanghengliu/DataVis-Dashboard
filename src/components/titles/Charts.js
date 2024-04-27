'use client'

import React from 'react';
import MoviesMap from './map';
import modifyTconst from './titlesid';

// async function getTitleTconsts() {
//   const title = 'Halloween'; // Example title
//   try {
//     const tconsts = await modifyTconst(title);
//     console.log(`The tconst for "${title}" is ${tconsts}.`);
//     console.log("tconsts loaded", tconsts);
//     const tconst = tconsts[0];
//     return tconst;
//   } catch (error) {
//     console.error('Failed to get tconsts:', error);
//   }
// }


const Charts = () => {
// getTitleTconsts();
const title = 'Inception'; // Example title
const tconsts = modifyTconst(title);
const tconst = tconsts[0];
// console.log("ID: ", tconst);
  return (
    <>
      <section className="my-4 px-4">
        <div className="flex gap-3 mb-2 justify-center">
          <div className="w-1/2 flex justify-center item-center">
            <p className="text-gray-900 font-bold">Now Watching... {title}: {tconst}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-3/4 h-[600px] bg-gray-700 rounded flex justify-center items-center p-2">
            <MoviesMap tconst={tconst} />
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
