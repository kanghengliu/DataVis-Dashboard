'use client'

import AreaChartPlot from "./AreaChartPlot";
import CustomAreaChart from "./CusotmAreaPlot";
import AreaChartHero from "./test";
import ChordDiagram from "./GenreInteractionChart";
import BarPlot from "./Barplot_GenreSentiment";
import Streamgraph from "./streamgraph";
import AverageRating from "./AverageRating";
// import NewBarPlot from "./GenreViz";

const Charts = () => {
  return (
    <>

      <section className="my-4 px-4">
        <div className="flex gap-3 mb-2 justify-center">
            <div className="w-1/2 flex justify-center item-center"> <p className="text-gray-900 font-bold">Titles Released Over Time</p></div>
            <div className="w-1/2 flex justify-center item-center"> <p className="text-gray-900 font-bold">Genre Chord</p></div>
        </div>
        <div className="flex gap-3">
            <div className="w-1/2 h-[300px] bg-gray-700 rounded flex justify-center items-center p-2">
              <BarPlot />
            </div>
            
            <div className="w-1/2 h-[300px] bg-gray-700 rounded flex justify-center items-center p-2">
              <CustomAreaChart />
            </div>

        </div>
      </section>

      <section className="my-4 px-4">
        <div className="flex gap-7 my-4 px-4 mb-2 justify-center">
            <div className="w-1/4 flex justify-center items-center"><p className="text-gray-900 font-bold">Highest Average Box Office(2023)</p></div>
            <div className="w-1/4 flex justify-center items-center"><p className="text-gray-900 font-bold">Highest Box Office / Budget Ratio(2023)</p></div>
            <div className="w-1/4 flex justify-center items-center"><p className="text-gray-900 font-bold">Most Made Movies(2023)</p></div>
            <div className="w-1/4 flex justify-center items-center"><p className="text-gray-900 font-bold">Longest Runtime(2023)</p></div>
        </div>
        <div className="flex m-4 gap-7">
          <div className="flex-1 px-2 justify-center w-16 bg-gray-700 shadow rounded h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total returns</p> */}
              <p className="py-4 font-bold">Animation : $929M</p>
              {/* <p className="text-green-300">+34.5%</p> */}
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16 bg-gray-700 shadow rounded max-h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total sales</p> */}
              <p className="py-4 font-bold">Biography : 9.32</p>
              {/* <p className="text-green-300">+34.5%</p> */}
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16  bg-gray-700 shadow rounded max-h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total subscriptions</p> */}
              <p className="py-4 font-bold">Drama : 362 </p>
              {/* <p className="text-green-300">+34.5%</p> */}
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16  bg-gray-700 shadow rounded h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total returns</p> */}
              <p className="py-4 font-bold ">Musical : 135 minutes </p>
              {/* <p className="text-green-300">+34.5%</p> */}
            </div>
          </div>
        </div>
      </section>



      <section className="flex my-4 px-4 gap-2">
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded"><Streamgraph /></div>
        {/* <div className=" w-1/3 h-[250px] bg-gray-700 rounded"><NewBarPlot /> // Use the newly named BarPlot</div> */}
        {/* <div className=" w-1/3 h-[250px] bg-gray-700 rounded"><AreaChartPlot /></div> */}
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded"><ChordDiagram /></div>
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded"><AverageRating /></div>
      </section>
    </>
  );
};

export default Charts;