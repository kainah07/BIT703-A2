import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'

function Hero() {
  return (
    <section className="p-5">
      <h1 className="text-center text-3xl md:text-5xl font-light mt-2 md:mt-10 mb-10 md:mb-20">Gear Up for Your Next Adventure</h1>
      <hr className='w-45 md:w-64 mx-auto mb-5'/>

      <div className="flex flex-col md:flex-row items-center gap-7 p-6 justify-center">
        <img src={hero1} alt="Hero Image" className="h-45 md:h-64 w-45 md:w-64 rounded-md"/>
        <img src={hero2} alt="Hero Image 2" className=" h-45 md:h-64 w-45 md:w-64 rounded-md"/>
        <img src={hero3} alt="Hero Image 3" className="h-45 md:h-64 w-45 md:w-64 rounded-md"/>
      </div>

      <button type="button" className="block mx-auto bg-gray-700
       text-white px-6 md:px-10 py-2 md:py-3 mt-3 md:mt-6 rounded-md
       hover:bg-gray-800 transition-colors duration-200">
        Shop Now
      </button>
    </section>
  )
}

export default Hero