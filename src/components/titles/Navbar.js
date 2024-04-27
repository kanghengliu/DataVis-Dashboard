import React from 'react';
import SearchInput from './SearchInput';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-200">
      <div className="flex-1"></div>
      <div className="flex-1 justify-center hidden md:flex">
        <span className="text-xl font-semibold">Title</span>
      </div>
      <div className="flex-1 flex justify-end space-x-4">
        <SearchInput />
      </div>
    </nav>
  );
};

export default Navbar;
