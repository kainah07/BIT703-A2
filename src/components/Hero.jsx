import Button from "./Button"
import SearchBar from "./SearchBar"
import { heroImages } from "../data/products"

function Hero({title, isHome=true, showImages=false, showButton=true, showSearchBar=false}) {
  return (
    <section className={isHome ? "min-h-screen p-10" : "p-5 h-55 md:min-h-screen"}>
      <h1 className="text-center mt-2 md:mt-10 mb-10 mx-2 backdrop-blur-[2px]">{title}</h1>
      <hr className={`${isHome ? "block": "hidden"} " md:flex w-45 md:w-64 mx-auto mb-5 border`}/>

      {/* Display hero images when images are provided */} 
      {showImages && (
        <div className="flex flex-col md:flex-row items-center gap-7 p-6 justify-center">
          {heroImages.map((images) => (
            <img src={images.img} alt={images.name} className="h-45 md:h-64 w-45 md:w-64 rounded-md"/>
          ))}
        
        </div>
      
      )}
      
      {/* Display Shop Now button when enabled */}
      {showButton && (
        <div className="flex justify-center mt-3 md:mt-6">
          <Button>
            Shop Now
          </Button>
        </div>
      )}

      {/* Display Search bar when enabled */}
      {showSearchBar && (
        <div className="hidden md:block mt-20">
          <SearchBar 
          showButton={true}
        />
        </div>      
        
      )}
      
    </section>
  )
}

export default Hero