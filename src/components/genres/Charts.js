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
          <TooltipDiv tooltipText="This Barplot shows the average sentiment polarity of movie genre scripts comparint 2010 to 2020. Sentiment polarity was extracted from TextBlob and is shown from a scale of -1 to 1, where -1 is negative and 1 is positive.">
            <div className="w-full h-[350px] bg-gray-700 rounded flex backdrop-blur-2xl bg-white/50 justify-center items-center p-2">
              <BarPlot />
            </div>
          </TooltipDiv>
          </div>
          <div className="w-1/2">
          <TooltipDiv tooltipText="This lineplot shows the sum of Box Office scores from each genre over time. Hovering over the legend emphasizes a specific area of the genre in the plot.">
            <div className="w-full h-[350px] bg-gray-700 rounded flex backdrop-blur-2xl bg-white/50 justify-center items-center p-2">
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
          <TooltipDiv tooltipText={<><span>Animation : $929.24M</span><br/><span>Fantasy : $623.18M</span><br/><span>Family : $600.96M</span><br/><span>History : $563.59M</span><br/><span>Comedy : $491.89M</span><br/></>}>
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
          <TooltipDiv tooltipText={<><span>Biography : 9.32</span><br/><span>Animation : 8.05</span><br/><span>Horror : 5.46</span><br/><span>History : 5.24</span><br/><span>Crime : 4.99</span><br/></>}>
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
          <TooltipDiv tooltipText={<><span>Drama : 362</span><br/><span>Comedy : 221</span><br/><span>Action : 193</span><br/><span>Thriller : 170</span><br/><span>Crime : 110</span><br/></>}>
          <div className="flex-1 px-2 bg-white/50 justify-center bg-gray-700 shadow rounded max-h-300px">
            <div className="p-3 flex justify-center item-center z-1">
              {/* <p className="text-gray-900 font-bold">Total subscriptions</p> */}
              <p className="py-4 font-bold text-gray-900">Drama : 362 </p>
              {/* <p className="text-green-300">+34.5%</p> */}
            </div>
          </div>
          </TooltipDiv>
          </div>
          <div className="w-1/4">
          <TooltipDiv tooltipText={<><span>Musical : 135.12</span><br/><span>Action : 126.0</span><br/><span>Music : 124.5</span><br/><span>History : 123.86</span><br/><span>Crime : 123.8</span><br/></>}>
          <div className="flex-1 px-2 bg-white/50 justify-center bg-gray-700 shadow rounded h-300px">
            <div className="p-3 flex justify-center item-center z-1">
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
          <TooltipDiv tooltipText="This graph shows the number of movies released over time, with each color representing a different genre. Hover over each segment to see the corresponding genre, following the same color scheme as the graph to the right.">
            <div className="w-full h-[300px] bg-gray-700 rounded flex backdrop-blur-2xl bg-white/50 justify-center items-center p-2">
              <Streamgraph />
            </div>
          </TooltipDiv>
          </div>
            
          <div className="w-1/3">
          <TooltipDiv tooltipText="This genre chord visualizes the distribution and interactions of movies across various genres in the dataset. It highlights how genres overlap, illustrating the presence of hybrid genres such as action-thriller and romantic comedy.">
            <div className="w-full h-[300px] bg-gray-700 rounded flex backdrop-blur-2xl bg-white/50 justify-center items-center p-2">
              <ChordDiagram />
            </div>
          </TooltipDiv>
          </div>

          <div className="w-1/3">
          <TooltipDiv tooltipText="This graph displays the average rating over time for five of the most popular genres. The declining trend may indicate that the increase in the number of movies has led to lower overall quality.">
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