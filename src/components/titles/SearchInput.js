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
      setSuggestions(results.map(result => result.item));
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
    <div className="relative">
      <input
        type="search"
        value={inputTitle}
        onChange={handleInputChange}
        className="w-half max-w-md bg-gray-700 px-4 py-2 rounded-md"
        placeholder="Search..."
      />
      {suggestions.length > 0 && (
        <ul className="absolute w-half max-w-md bg-gray-700 rounded-md overflow-auto z-10">
          {suggestions.map(({ tconst, title }) => (
            <li key={tconst} onClick={() => handleClickSuggestion(tconst, title)}
                className="px-4 py-2 hover:bg-gray-600 text-white cursor-pointer">
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
