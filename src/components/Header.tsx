import { useEffect, useState } from "react";
import logo from "../assets/image/logo.png";
import { Link, NavLink } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "../constants/navLinks";

const PROFILE_LINKS = [
  { label: "Account", to: "/account" },
  { label: "Help center", to: "/help" },
];

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isProfileOpen, seIsProfileOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handlescroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-4 py-3 text-white transition-colors
    duration-300 md:px-12  ${
      isScrolled ? "bg-black" : "bg-linear-to-b from-black/80 to-transparent"
    }`}
    >
      {/* left: logo + navigation */}
      <div className="flex items-center gap-8s">
        <Link to="/">
          <img
            src={logo}
            alt="netflix home"
            className="h-6 w-auto object-contain md:h-8"
          />
        </Link>
        <nav className="hidden items-center gap-5 text-sm md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `transition-colors hover:text-gray-300 ${
                  isActive ? "font-bold text-white" : "text-gray-300"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>{" "}
      </div>
      {/* right section */}
      <div className="flex items-center gap-5">
        {/* search */}
        <div className="flex items-center">
          <button
            aria-label="Search"
            className="flex items-center"
            onClick={() => setIsSearchOpen((prev) => !prev)}
          >
            <Search className="h-5 w-5" />
          </button>
          <input
            type="text"
            placeholder="Titles, people, genres"
            className={`bg-transparent text-sm outline-none transition-all duration-300 ${
              isSearchOpen
                ? "ml-2 w-40 border border-white px-2 py-1 md:w-56"
                : "w-0"
            }`}
          />
        </div>
        {/* notification */}
        <button
          aria-label="Notification"
          className="relative flex items-center"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full  bg-red-600 text-[10px] font-bold">
            4
          </span>
        </button>
        {/* profile */}
        <div className="relative">
          <button
            aria-label="Profile menu"
            aria-haspopup="menu"
            aria-expanded={isProfileOpen}
            className="flex items-center gap-1"
            onClick={() => seIsProfileOpen((prev) => !prev)}
          >
            <User className="h-5 w-5" />
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                isProfileOpen ? "rotate-180" : ""
              }`}
            />

            {isProfileOpen && (
              <div className="absolute right-0 top-full mt-2 w-44 rounded-md border border-white/10 bg-black/90 py-2 text-sm">
                {PROFILE_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="block px-4 py-2 hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
                <button className="block w-full border-t border-white/10 px-4 py-2 text-center hover:bg-white/10">
                  Sign out
                </button>
              </div>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
