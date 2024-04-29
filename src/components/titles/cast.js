"use client";

import React, { useState, useEffect, useRef } from 'react';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

const CastList = ({ tconst }) => {
  const { data, error } = useSWR('/data/cast_and_crew.json', fetcher);
  const [cast, setCast] = useState([]);
  const listRef = useRef(null); // Reference to the list container
  const scrollIntervalRef = useRef(null); // Reference to store the interval ID

  useEffect(() => {
    if (data) {
      const filteredCast = data.filter(item => item.tconst === tconst);
      setCast(filteredCast);
    }
  }, [data, tconst]);

  // Function to start auto-scroll
  const startAutoScroll = () => {
    const step = () => {
      if (listRef.current) {
        if (listRef.current.scrollTop < listRef.current.scrollHeight - listRef.current.clientHeight) {
          listRef.current.scrollTop += 1; // Adjust the pixel count to control the scroll speed
        } else {
          listRef.current.scrollTop = 0; // Reset scroll to top when it reaches bottom
        }
      }
    };

    scrollIntervalRef.current = setInterval(step, 50); // Adjust interval timing for speed control
  };

  // Function to stop auto-scroll
  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
  };

  useEffect(() => {
    startAutoScroll();

    return () => stopAutoScroll(); // Cleanup on component unmount
  }, []);

  if (error) return <div className='flex justify-center items-center'>Failed to load the cast data.</div>;
  if (!data) return <div className='flex justify-center items-center'>Loading cast...</div>;

  return (
    <div className="p-2 rounded overflow-auto h-52 justify-center items-center hide-scrollbar" ref={listRef}
         onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll}>
      <ul>
        {cast.map((person, index) => (
          <li key={index} className="text-gray-800 flex justify-center items-center">{person.primaryName}</li>
        ))}
      </ul>
    </div>
  );
};

export default CastList;
