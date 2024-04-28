'use client'

// import AreaChartPlot from "./genre/AreaChartPlot";
// import CustomAreaChart from "./genre/CusotmAreaPlot";
// import AreaChartHero from "./genre/test";
// import ChordDiagram from "./genre/GenreInteractionChart";
// import BarPlot from "./genre/Barplot_GenreSentiment";
// import Streamgraph from "./genre/streamgraph";

import MovieNumberPlot from "./MovieNumber";
import ActorNumberPlot from "./Lineplot_ActorNumber";
import GenreRatings from "./GenreViz";
import DoubleAxis from "./DoubleAxis";
import StreamgraphRatings from "./streamgraph_ratings";



const Charts = () => {
  return (
    <>
      <section className="my-4 px-4">
        <div className="flex gap-7 my-4 px-4 mb-2 justify-center">
            <div className="w-1/4 flex justify-center items-center"><p className="text-gray-900 font-bold">Total Movies(IMDB Dataset)</p></div>
            <div className="w-1/4 flex justify-center items-center"><p className="text-gray-900 font-bold">Box Office(Scraped from IMDB)</p></div>
            <div className="w-1/4 flex justify-center items-center"><p className="text-gray-900 font-bold">Total Locations(Scraped from IMDB)</p></div>
            <div className="w-1/4 flex justify-center items-center"><p className="text-gray-900 font-bold">Total Scripts</p></div>
        </div>
        <div className="flex m-4 gap-7">
          <div className="flex-1 px-2 justify-center w-16 bg-gray-700 shadow rounded h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total returns</p> */}
              <p className="py-4 font-bold">44,860</p>
              {/* <p className="text-green-300">+34.5%</p> */}
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16 bg-gray-700 shadow rounded max-h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total sales</p> */}
              <p className="py-4 font-bold">8,845</p>
              {/* <p className="text-green-300">+34.5%</p> */}
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16  bg-gray-700 shadow rounded max-h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total subscriptions</p> */}
              <p className="py-4 font-bold">2,500</p>
              {/* <p className="text-green-300">+34.5%</p> */}
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16  bg-gray-700 shadow rounded h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total returns</p> */}
              <p className="py-4 font-bold ">460</p>
              {/* <p className="text-green-300">+34.5%</p> */}
            </div>
          </div>
        </div>
      </section>

      <section className="my-4 px-4">
        <div className="flex gap-3 mb-2 justify-center">
            <div className="w-2/3 flex justify-center item-center"> <p className="text-gray-900 font-bold">Titles Released Over Time</p></div>
            <div className="w-1/3 flex justify-center item-center"> <p className="text-gray-900 font-bold">Average Rating Distribution</p></div>
        </div>
        <div className="flex gap-3">

            <div className="w-2/3 h-[300px] bg-gray-700 rounded flex justify-center items-center p-2">
              <DoubleAxis />
            </div>

            <div className="w-1/3 h-[300px] bg-gray-700 rounded flex justify-center items-center p-2">
              <StreamgraphRatings />
            </div>

        </div>
      </section>

      <section className="flex my-4 px-4 gap-2">
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded"></div>
        <div className="w-1/3 h-[540px] bg-gray-700 rounded"></div>

        <div className=" w-1/3 h-[250px] bg-gray-700 rounded"></div>
      </section>
    </>
  );
};

export default Charts;