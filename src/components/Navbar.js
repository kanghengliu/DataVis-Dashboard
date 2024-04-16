const Navbar = () => {
    return (
      <nav className="flex justify-between items-center px-4 py-2 bg-gray-800 text-gray-200">
        <input
          type="search"
          className="w-full max-w-md bg-gray-700 px-4 py-2 rounded-md"
          placeholder="Search..."
        />
      </nav>
    );
  };
  
  export default Navbar;
  