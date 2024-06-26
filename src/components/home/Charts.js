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
import Scatter from "./Scatter";
import TooltipDiv from "../TootipDiv";
import CastFilter from './cast_filter';



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
          <div className="flex-1 px-2 justify-center w-16 backdrop-blur-2xl bg-white/50 shadow rounded h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total returns</p> */}
              <p className="py-4 text-gray-900 font-bold">44,860 initial movies</p>
              {/* <p className="text-green-300">+34.5%</p> */}
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16 backdrop-blur-2xl bg-white/50 shadow rounded max-h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total sales</p> */}
              <p className="py-4 text-gray-900 font-bold">8,845 movies scraped</p>
              {/* <p className="text-green-300">+34.5%</p> */}
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16 backdrop-blur-3xl bg-white/50 shadow rounded max-h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total subscriptions</p> */}
              <p className="py-4 text-gray-900 font-bold">2,500 movies scraped</p>
              {/* <p className="text-green-300">+34.5%</p> */}
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16  backdrop-blur-2xl bg-white/50 shadow rounded h-300px">
            <div className="p-3 flex justify-center item-center">
              {/* <p className="text-gray-900 font-bold">Total returns</p> */}
              <p className="py-4 text-gray-900 font-bold">460 movies scraped</p>
              {/* <p className="text-green-300">+34.5%</p> */}
            </div>
          </div>
        </div>
      </section>

      <section className="my-4 px-4">
        <div className="flex gap-3 mb-2 justify-center">
            <div className="w-2/3 flex justify-center item-center"> <p className="text-gray-900 font-bold">Titles Released and Unique Workers Over Time</p></div>
            <div className="w-1/3 flex justify-center item-center"> <p className="text-gray-900 font-bold">Average Rating Distribution</p></div>
        </div>
        <div className="flex gap-3">
          <div className="w-2/3">
            <TooltipDiv tooltipText="This graph charts the film industry's evolution over time, showcasing the increasing number of movie releases and the growing diversity of creative talent. The upward trends illustrate cinema's expanding influence in culture and entertainment. Note the temporary decline around 2020, reflecting the impact of the COVID-19 pandemic on film production and releases.">
            <div className="w-full h-[300px] bg-gray-700 rounded flex backdrop-blur-2xl bg-white/50 justify-center items-center">
              <DoubleAxis />
            </div>
            </TooltipDiv>
          </div>
          <div className="w-1/3">
            <TooltipDiv tooltipText="This graph visualizes the distribution of average movie ratings across the ten most popular genres. The width of each color band indicates the number of movies from each genre that have a particular rating. A peak around ratings of 6 to 7 is noticeable across all genres, reflecting how different genres resonate with audiences.">
            <div className="w-full h-[300px] bg-gray-700 rounded flex backdrop-blur-2xl bg-white/50 justify-center items-center p-2">
              <StreamgraphRatings />
            </div>
            </TooltipDiv>
          </div>

        </div>
      </section>

      <section className="my-4 px-4">
        <div className="flex gap-3 mb-2 justify-center">

            <div className="w-1/3 flex justify-center item-center"> <p className="text-gray-900 font-bold">Cast Filter</p></div>
            <div className="w-2/3 flex justify-center item-center"> <p className="text-gray-900 font-bold">Budget vs. Box Office (with filter)</p></div>

        </div>
        <div className="flex gap-3">
            <div className="w-1/3">
            <TooltipDiv tooltipText="This filter displays the top ten cast and crew members with the most films based on two distinct criteria: the number of votes a movie had on IMDb and its average rating. The sliders allow you to adjust these filters, revealing the most frequent cast and crew members based on the selected criteria.">
            <div className="w-full h-[300px] bg-gray-700 rounded flex backdrop-blur-2xl bg-white/50 justify-center items-center p-2">
              <CastFilter />
            </div>
            </TooltipDiv>
            </div>
            <div className="w-2/3">
            <TooltipDiv tooltipText="This scatter plot shows the relationship between a movie's budget and its box office earnings. The sliders on the right control the minimum and maximum budget ranges, filtering the movies displayed accordingly.">
            <div className="w-full h-[300px] bg-gray-700 rounded flex backdrop-blur-2xl bg-white/50 justify-center items-center p-2">
              <Scatter />
            </div>
            </TooltipDiv>
            </div>

        </div>
      </section>
    </>
  );
};

export default Charts;