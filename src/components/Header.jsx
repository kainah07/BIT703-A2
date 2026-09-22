import { useState } from "react";
import logo from "../assets/logo.png"
import { navBarLinks } from "../data/links"
import SearchBar from "./SearchBar"

import { Link } from "react-router-dom";

function Header({showSearchBar=true}) {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="relative flex justify-between items-center px-3 md:px-10 py-3 bg-white md:bg-transparent">
      
      <div className="flex items-center gap-3 md:gap-2">
        {/* Menu for mobile */}
        <button type="button" aria-label="Open menu" className="flex items-center md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-symbols-outlined">
            menu
          </span>
        </button>

        {/* Logo */}
        <a href="#">
          <img src={logo} alt="Aotearoa Adventure Gear logo" className="w-18 md:w-28 rounded-md"/>
        </a>

        {/* Search */}
        {showSearchBar && (
          <div className="hidden md:block">
            <SearchBar />
          </div>
        )}

      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center">
        {navBarLinks.map((item) =>(
          <a href={item.path} className="text-gray-600 border-r px-10 hover:text-gray-900">{item.name}</a>
          ))}

        <Link to="/cart" 
          className="flex items-center 
          bg-gray-700 text-white 
          px-4 py-2 gap-2 rounded-md
          hover:bg-gray-800 transition-colors duration-200"
        >
          <span className="material-symbols-outlined cart-icon">shopping_cart</span>

          Your Cart</Link>
      </nav> 

      <Link to="/cart" className="md:hidden">
        <span className="material-symbols-outlined cart-icon">
          shopping_cart
        </span>
      </Link>

      {menuOpen && (
        <nav className="absolute flex flex-col gap-5 left-0 top-full w-full md:hidden bg-white border-y border-gray-300 p-5 z-50">
          {navBarLinks.map((item) => (
            <a key={item.name} href={item.path} 
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setMenuOpen(false)}
            >{item.name}</a>
          ))}
          <SearchBar />
        </nav>
      )}

    </header>

    
  )
}

export default Header