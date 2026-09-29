import { useState } from "react";
import { searchProducts } from "../js/search";
import { useNavigate } from "react-router-dom";

import Button from "./Button";


function SearchBar({showButton=false}) {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

      function handleSearch(event) {
        event.preventDefault();

        const product = searchProducts(searchTerm);

        if (product) {
          navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
        }
      }
    return (
      <form onSubmit={handleSearch}>
        {/* Mobile search bar */}
        <div className="flex md:hidden items-center h-13 w-full px-2 gap-2 bg-gray-100 border border-gray-300 rounded-md">
          <span aria-hidden="true" className="material-symbols-outlined">
            search
          </span>
          <input 
            type="search" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch(event);
    }
  }}
            className="flex-1 border-0 outline-none"
          />
        </div>

        {/* Desktop search bar*/}
        <div className="hidden md:flex justify-center gap-5 h-12">
          <div className="flex items-center w-100 border-2 px-2 gap-2 rounded-md backdrop-blur-[2px]">
            <span aria-hidden="true" className="material-symbols-outlined">
              search
            </span>
            <input 
              type="search" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    handleSearch(event);
                  }
                }}
              className="flex-1 border-0 outline-none"
            />
          </div>
          
          {showButton && (
            <Button type="submit">Submit</Button>
          )}
        </div>
      </form> 
    );
    

 
}

export default SearchBar;