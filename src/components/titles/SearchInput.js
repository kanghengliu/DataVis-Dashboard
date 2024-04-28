"use client";
import React, { useState } from 'react';
import useSWR from 'swr';
import Fuse from 'fuse.js';

const fetcher = url => fetch(url).then(res => res.json());

const SearchInput = ({ onSelectMovie }) => {
  const [inputTitle, setInputTitle] = useState('');
  const { data, error } = useSWR('/data/titleid.json', fetcher);
  const [suggestions, setSuggestions] = useState([]);

  const options = {
    includeScore: true,
    keys: ['title']
  };
  let fuse;

  const handleInputChange = (event) => {
    setInputTitle(event.target.value);
    if (data && typeof data === 'object' && event.target.value.length > 2) {
      if (!fuse) {
        fuse = new Fuse(Object.entries(data).map(([tconst, title]) => ({ tconst, title })), options);
      }
      const results = fuse.search(event.target.value);
      setSuggestions(results.map(result => result.item).slice(0, 8));  // Only take top 8 results
    } else {
      setSuggestions([]);
    }
  };  

  const handleClickSuggestion = (tconst, title) => {
    onSelectMovie(tconst, title);
    setInputTitle(title);
    setSuggestions([]);
  };

  if (error) return <div>Failed to load data.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="relative z-50">
      <input
        type="search"
        value={inputTitle}
        onChange={handleInputChange}
        className="w-half max-w-md backdrop-blur-xl bg-white/50 px-4 py-2 rounded-md shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300 ease-in-out"
        placeholder="Search..."
      />
      {suggestions.length > 0 && (
        <ul className="absolute w-half max-w-md backdrop-blur-2xl bg-white/30 rounded-md overflow-auto z-50">
          {suggestions.map(({ tconst, title }) => (
            <li key={tconst} onClick={() => handleClickSuggestion(tconst, title)}
                className="px-4 py-2 hover:bg-blue-50 text-gray-800 cursor-pointer">
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );  
};

export default SearchInput;
