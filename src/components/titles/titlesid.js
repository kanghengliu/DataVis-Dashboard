// import fetchData from './fetchData'; // Assuming you have a fetchData function to handle data fetching.
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());


function modifyTconst(inputTitle) {
  try {
    // Fetch the title ID data from the JSON file.
    // const data = await fetchData('/data/titleid.json');
    console.log("fetching data")
    console.log(inputTitle)
    const { data, error } = useSWR('/data/titleid.json', fetcher);

    if (error) return <div>Failed to load data.</div>;
    if (!data) return <div>Loading...</div>;
    console.log("data loaded");

    // Create a map where each title key maps to an array of tconst values
    const titleToTconst = Object.entries(data).reduce((acc, [tconst, title]) => {
        if (!acc[title]) {
          acc[title] = [];
        }
        acc[title].push(tconst);
        return acc;
      }, {});
  
      const tconsts = titleToTconst[inputTitle];
    
    // Look up the tconst using the inputTitle.
    // const tconst = data.primaryTitle[inputTitle];
    console.log("tconst loaded", tconsts);
    if (!tconsts) {
      throw new Error(`No tconst found for the title: ${inputTitle}`);
    }
    // const tconst = tconsts[0];
    return tconsts;
  } catch (error) {
    console.error('Error fetching or processing the title ID data:', error);
    throw error;
  }
}

export default modifyTconst;
