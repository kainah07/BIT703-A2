import Button from './Button'

function Hero({title, images, showButton=true, showSearchBar=false}) {
  return (
    <section className="p-5">
      <h1 className="text-center text-4xl md:text-5xl font-light mt-2 md:mt-10 mb-10 md:mb-20 mx-2">{title}</h1>
      <hr className='w-45 md:w-64 mx-auto mb-5'/>

      {/* Display hero images when images are provided */} 
      {images && (
        <div className="flex flex-col md:flex-row items-center gap-7 p-6 justify-center">
          <img src={images[0]} alt="Hero Image" className="h-45 md:h-64 w-45 md:w-64 rounded-md"/>
          <img src={images[1]} alt="Hero Image 2" className=" h-45 md:h-64 w-45 md:w-64 rounded-md"/>
          <img src={images[2]} alt="Hero Image 3" className="h-45 md:h-64 w-45 md:w-64 rounded-md"/>
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
        <form action="">
          <div className="flex justify-center mx-auto gap-5 mt-16">
            <div  className="flex items-center w-100 border px-2 gap-2">
              <span aria-hidden="true" className="material-symbols-outlined">
                search
              </span>

              <input type="search" placeholder="Search..." className="flex-1 border-0 outline-none"/>

            </div>

            <Button type="submit">Submit</Button>
            
          </div>
          
        </form> 
      )}
      
    </section>
  )
}

export default Hero