const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-4 backdrop-blur-l bg-white/60 text-gray-800">
      <div className="flex-1 justify-center hidden md:flex"> {/* Center content only visible on md screens and up */}
        <span className="text-xl font-semibold">Genres</span>
      </div>
    </nav>
  );
};

export default Navbar;
