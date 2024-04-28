import React from 'react';
import SearchInput from './SearchInput';

const Navbar = ({ onSelectMovie} ) => {
  return (
    <nav className="flex items-center backdrop-blur-2xl bg-white/50 justify-between px-4 py-2 bg-gray-800 text-gray-800 z-10">
      <div className="flex-1"></div>
      <div className="flex-1 justify-center hidden md:flex">
        <span className="text-xl font-semibold ">Title</span>
      </div>
      <div className="flex-1 flex justify-end space-x-4">
        <SearchInput onSelectMovie={onSelectMovie}/>
      </div>
    </nav>
  );
};

export default Navbar;
