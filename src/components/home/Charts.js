'use client'

// import AreaChartPlot from "./genre/AreaChartPlot";
// import CustomAreaChart from "./genre/CusotmAreaPlot";
// import AreaChartHero from "./genre/test";
// import ChordDiagram from "./genre/GenreInteractionChart";
// import BarPlot from "./genre/Barplot_GenreSentiment";
// import Streamgraph from "./genre/streamgraph";

import MovieNumberPlot from "./MovieNumber";
import ActorNumberPlot from "./Lineplot_ActorNumber";
import BarChart from "./GenreViz";



const Charts = () => {
  return (
    <>
      <section className="my-4 px-4">
        <div className="flex gap-7 my-4 px-4 mb-2 justify-center">
            <div className="w-1/4 flex justify-center items-center"><p className="text-gray-900 font-bold">Total returns</p></div>
            <div className="w-1/4 flex justify-center items-center"><p className="text-gray-900 font-bold">Total sales</p></div>
            <div className="w-1/4 flex justify-center items-center"><p className="text-gray-900 font-bold">Total subscriptions</p></div>
            <div className="w-1/4 flex justify-center items-center"><p className="text-gray-900 font-bold">Total returns</p></div>
        </div>
        <div className="flex m-4 gap-7">
          <div className="flex-1 px-2 justify-center w-16 bg-gray-700 shadow rounded h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total returns</p> */}
              <p className="py-4 font-bold">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16 bg-gray-700 shadow rounded max-h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total sales</p> */}
              <p className="py-4 font-bold">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16  bg-gray-700 shadow rounded max-h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total subscriptions</p> */}
              <p className="py-4 font-bold">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16  bg-gray-700 shadow rounded h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total returns</p> */}
              <p className="py-4 font-bold ">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-4 px-4">
        <div className="flex gap-3 mb-2 justify-center">
            <div className="w-1/2 flex justify-center item-center"> <p className="text-gray-900 font-bold">Titles Released Over Time</p></div>
            <div className="w-1/2 flex justify-center item-center"> <p className="text-gray-900 font-bold">Unique Active Actors Over Time</p></div>
        </div>
        <div className="flex gap-3">
            <div className="w-1/2 h-[300px] bg-gray-700 rounded flex justify-center items-center p-2">
              <MovieNumberPlot />
            </div>
            
            <div className="w-1/2 h-[300px] bg-gray-700 rounded flex justify-center items-center p-2">
              <ActorNumberPlot />
            </div>

        </div>
      </section>

      <section className="flex my-4 px-4 gap-2">
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded"></div>
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded"><BarChart /> // Use the newly named Plot</div>
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded"></div>
      </section>
    </>
  );
};

export default Charts;