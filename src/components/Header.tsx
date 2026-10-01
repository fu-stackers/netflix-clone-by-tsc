import React from "react";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
function Header() {
  return (
    <div className="bg-transparent items-center  flex justify-between py-2 px-4 fixed top-0 w-full">
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

        <div>
          <button className="flex items-center">
            <Search />
          </button>
        </div>

        {/* notification */}
        <button className="flex items-center">
          <Bell />
          <span className="">4</span>
        </button>
        {/* profile */}
        <div className="flex items-center">
          <button>
            <User />
          </button>{" "}
          {/* drop down icon */}
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

export default Header;
