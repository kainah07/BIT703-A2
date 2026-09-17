import logo from "../assets/logo.png"
import { navBarLinks } from "../data/links"
import SearchBar from "./SearchBar"

function Header({showSearchBar=true}) {
  return (
    <header className="flex justify-between items-center px-3 md:px-10 py-3 bg-white md:bg-transparent">
      
      <div className="flex items-center gap-3 md:gap-2">
        {/* Menu for mobile */}
        <button type="button" aria-label="Open menu" className="flex items-center md:hidden">
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

        <button type="button" 
          className="flex items-center 
          bg-gray-700 text-white 
          px-4 py-2 gap-2 rounded-md
          hover:bg-gray-800 transition-colors duration-200"
        >
          <span className="material-symbols-outlined cart-icon">shopping_cart</span>

          Your Cart</button>
      </nav> 

      <button type="button" aria-label="Shopping cart" className="md:hidden">
        <span className="material-symbols-outlined cart-icon">
          shopping_cart
        </span>
      </button>

    </header>
  )
}

export default Header