"use client";
import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/titles/Navbar'
import Charts from '../../components/titles/Charts'

const Page = () => {
  const [movie, setMovie] = useState({ tconst: '', title: '' });

  const handleSelectMovie = (tconst, title) => {
    setMovie({ tconst, title });
  };
  return (
    <>
    <div className="flex">
    <Sidebar/>
    <main className="flex-grow ml-64 relative">
          <Navbar onSelectMovie={handleSelectMovie} />
          <Charts tconst={movie.tconst} title={movie.title} />
    </main>
    </div>
    </>
  );
};

export default Page;