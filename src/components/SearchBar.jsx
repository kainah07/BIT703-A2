import Button from "./Button";

function SearchBar({showButton=false}) {
  
    return (
      <form>
        {/* Mobile search bar */}
        <div className="flex md:hidden items-center h-13 w-full px-2 gap-2 bg-gray-100 border border-gray-200">
          <span aria-hidden="true" className="material-symbols-outlined">
            search
          </span>
          <input 
            type="search" 
            placeholder="Search..." 
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