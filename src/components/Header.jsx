import logo from "../assets/logo.png"
import { navBarLinks } from "../data/links"

function Header({showSearchBar=true}) {
  return (
    <header className="flex justify-between items-center px-10 py-3">
      
      <div className="flex items-center gap-2">
        {/* Logo */}
        <a href="#">
          <img src={logo} alt="Aotearoa Adventure Gear logo" className="w-28"/>
        </a>

        {/* Search */}
        {showSearchBar && (
          <form>
            <div className="flex items-center w-81.25 h-9 border px-2 gap-2">
              <span aria-hidden="true" className="material-symbols-outlined">
                search
              </span>

              <input type="search" placeholder="Search..." className="flex-1 border-0 outline-none"/>
            </div>
          
          </form>
        )}
        
      </div>

      {/* Navigation */}
      <nav className="flex items-center">
        {navBarLinks.map((item) =>(
          <a href={item.path} className="text-gray-500 border-r px-10 hover:text-gray-900">{item.name}</a>
          ))}

        <button type="button" 
          className="flex items-center 
          bg-gray-700 text-white 
          px-4 py-2 gap-2 rounded-md
          hover:bg-gray-800 transition-colors duration-200"
        >
          <span class="material-symbols-outlined cart-icon">shopping_cart</span>

          Your Cart</button>
      </nav> 

    </header>
  )
}

export default Header