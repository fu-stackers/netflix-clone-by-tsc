import React, { useEffect, useState } from "react";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
function Header() {
  const [issearchopen, setopen] = useState<boolean>(false);
  const [isProfileOpen, seisProfileOpen] = useState<boolean>(false);
  const [isScrolled, setScrooled] = useState<boolean>(false);
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 50) {
        setScrooled(true);
      } else {
        setScrooled(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  });
  return (
    <div
      className={` items-center  flex justify-between py-2 px-4 pr-10 fixed top-0 w-full ${isScrolled ? "bg-black text-white" : "bg-transparent"}`}
    >
      <div className="flex gap-6 items-center">
        <img src={logo} alt="logo" className="h-8 w-auto object-contain" />
        <nav className="gap-4 flex items-center">
          <Link to="/">Home</Link>
          <Link to="/">Tv Shows</Link>
          <Link to="/">Movies</Link>
          <Link to="/">New & Popular</Link>
          <Link to="/">My List</Link>
          <Link to="/">Browse by Language</Link>
        </nav>
      </div>
      <div className="flex gap-4 items-center">
        {/* search */}

        <div className="flex items-center gap-2">
          <button
            className="flex items-center cursor-pointer"
            onClick={() => setopen((prev) => !prev)}
          >
            <Search />
          </button>
          <input
            type="text"
            placeholder="search anime, comedy "
            className={`bg-transparent outline-none text-sm  transition-all duration-300 ${issearchopen ? "px-2 py-1 border border-black rounded-[8px]" : "w-0"}`}
          />
        </div>

        {/* notification */}
        <button className="flex items-center cursor-pointer">
          <Bell />
          <span className="">4</span>
        </button>
        {/* profile */}
        <div className="relative">
          <button
            aria-label="profile menu"
            aria-haspopup="menu"
            aria-expanded={isProfileOpen}
            className="flex items-center"
            onClick={() => seisProfileOpen((prev) => !prev)}
          >
            <User className="cursor-pointer" />
            <ChevronDown className="cursor-pointer" />
          </button>
          {isProfileOpen && (
            <div className="absolute  transition-all duration-500  right-0 top-full z-50 mt-2 w-38 rounded-md border border-white/10 bg-black/90 py-2 text-sm text-white">
              <Link
                to="/account"
                className="block px-4 py-2 hover:bg-white/10 cursor-pointer"
              >
                Account
              </Link>
              <Link
                to="/help"
                className="block px-4 py-2 hover:bg-white/10 cursor-pointer"
              >
                Help Center
              </Link>
              <button className="block w-full border-t border-white/10 px-4 py-2 text-left hover:bg-white/10 cursor-pointer">
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
