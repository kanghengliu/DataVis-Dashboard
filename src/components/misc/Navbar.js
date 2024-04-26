const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-gray-800 text-gray-200">
      <div className="flex-1 justify-center hidden md:flex"> {/* Center content only visible on md screens and up */}
        <span className="text-xl font-semibold">Miscellaneous</span>
      </div>
    </nav>
  );
};

export default Navbar;
