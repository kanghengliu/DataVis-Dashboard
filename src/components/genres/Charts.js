'use client'

import AreaChartPlot from "./AreaChartPlot";
import CustomAreaChart from "./CusotmAreaPlot";
import ChordDiagram from "./GenreInteractionChart";
import BarPlot from "./Barplot_GenreSentiment";
import Streamgraph from "./streamgraph";
import AverageRating from "./AverageRating";
// import NewBarPlot from "./GenreViz";
import TooltipDiv from "../TootipDiv";


const Charts = () => {
  return (
    <>

      <section className="my-4 px-4">
        <div className="flex gap-3 mb-2 justify-center">
            <div className="w-1/2 flex justify-center item-center"> <p className="text-gray-900 font-bold">Genre Sentiment</p></div>
            <div className="w-1/2 flex justify-center item-center"> <p className="text-gray-900 font-bold">Box Office Performance over Time</p></div>
        </div>
        <div className="flex gap-3">
          <div className="w-1/2">
          <TooltipDiv tooltipText="TOOLTIPS">
            <div className="w-full h-[300px] bg-gray-700 rounded flex backdrop-blur-2xl bg-white/50 justify-center items-center p-2">
              <BarPlot />
            </div>
          </TooltipDiv>
          </div>
          <div className="w-1/2">
          <TooltipDiv tooltipText="TOOLTIPS">
            <div className="w-full h-[300px] bg-gray-700 rounded flex backdrop-blur-2xl bg-white/50 justify-center items-center p-2">
              <CustomAreaChart />
            </div>
          </TooltipDiv>
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
          <div className="w-1/4">
          <TooltipDiv tooltipText="TOOLTIPS">
          <div className="flex-1 px-2 backdrop-blur-2xl bg-white/50 justify-center bg-gray-700 shadow rounded h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total returns</p> */}
              <p className="py-4 font-bold text-gray-900">Animation : $929M</p>
              {/* <p className="text-green-300">+34.5%</p> */}
            </div>
          </div>
          </TooltipDiv>
          </div>

          <div className="w-1/4">
          <TooltipDiv tooltipText="TOOLTIPS">
          <div className="flex-1 px-2 backdrop-blur-2xl bg-white/50 justify-center bg-gray-700 shadow rounded max-h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total sales</p> */}
              <p className="py-4 font-bold text-gray-900">Biography : 9.32</p>
              {/* <p className="text-green-300">+34.5%</p> */}
            </div>
          </div>
          </TooltipDiv>
          </div>

          <div className="w-1/4">
          <TooltipDiv tooltipText="TOOLTIPS">
          <div className="flex-1 px-2 backdrop-blur-2xl bg-white/50 justify-center bg-gray-700 shadow rounded max-h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total subscriptions</p> */}
              <p className="py-4 font-bold text-gray-900">Drama : 362 </p>
              {/* <p className="text-green-300">+34.5%</p> */}
            </div>
          </div>
          </TooltipDiv>
          </div>
          <div className="w-1/4">
          <TooltipDiv tooltipText="TOOLTIPS">
          <div className="flex-1 px-2 backdrop-blur-2xl bg-white/50 justify-center bg-gray-700 shadow rounded h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total returns</p> */}
              <p className="py-4 font-bold text-gray-900">Musical : 135 minutes </p>
              {/* <p className="text-green-300">+34.5%</p> */}
            </div>
          </div>
          </TooltipDiv>
          </div>
        </div>
      </section>

      <section className="my-4 px-4">
        <div className="flex gap-3 mb-2 justify-center">
            <div className="w-1/2 flex justify-center item-center"> <p className="text-gray-900 font-bold">Number of Movies over Time</p></div>
            <div className="w-1/2 flex justify-center item-center"> <p className="text-gray-900 font-bold">Genre Chord</p></div>
            <div className="w-1/2 flex justify-center item-center"> <p className="text-gray-900 font-bold">Average Rating over Time</p></div>
        </div>
        <div className="flex gap-3">
          <div className="w-1/3">
          <TooltipDiv tooltipText="TOOLTIPS">
            <div className="w-full h-[300px] bg-gray-700 rounded flex backdrop-blur-2xl bg-white/50 justify-center items-center p-2">
              <Streamgraph />
            </div>
          </TooltipDiv>
          </div>
            
          <div className="w-1/3">
          <TooltipDiv tooltipText="TOOLTIPS">
            <div className="w-full h-[300px] bg-gray-700 rounded flex backdrop-blur-2xl bg-white/50 justify-center items-center p-2">
              <ChordDiagram />
            </div>
          </TooltipDiv>
          </div>

          <div className="w-1/3">
          <TooltipDiv tooltipText="TOOLTIPS">
            <div className="w-full h-[300px] bg-gray-700 rounded flex backdrop-blur-2xl bg-white/50 justify-center items-center p-2">
              <AverageRating />
            </div>
          </TooltipDiv>
          </div>
        </div>
      </section>
    </>
  );
};

export default Charts;