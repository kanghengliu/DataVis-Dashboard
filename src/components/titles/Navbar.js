const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-gray-800 text-gray-200">
      <div className="flex-1"></div> {/* Empty div for spacing */}
      <div className="flex-1 justify-center hidden md:flex"> {/* Center content only visible on md screens and up */}
        <span className="text-xl font-semibold">Title</span>
      </div>
      <div className="flex-1 flex justify-end space-x-4"> {/* Right aligned links */}
      <input
          type="search"
          className="w-half max-w-md bg-gray-700 px-4 py-2 rounded-md"
          placeholder="Search..."
        />
      </div>
    </nav>
  );
};

export default Navbar;
