import { categories } from "../data/products";

function FeaturedCategories() {
  return(
    <section className="p-5">
      <h2 className="text-center m-5">Featured Categories</h2>
      <p className="text-center mb-5 text-gray-500 md:mb-0">
        Explore our collection of quality gear designed for your next adventure.
      </p>

      <div className="flex md:grid md:grid-cols-4 gap-5 md:gap-8 overflow-x-auto md:overflow-visible my-6 md:my-16 px-5 md:px-0 md:w-250 md:mx-auto">
        {categories.map((item =>
          <div key={item.name} className="flex-none w-60 md:w-auto">
            <a
              href={item.path}
              className="block group"
            >
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
              <p className="uppercase text-center mt-3 mb-5
               text-gray-500 group-hover:text-gray-800 transition-colors duration-200">
                {item.name}
              </p>
            </a>
          </div>
        ))}

        <div className="hidden md:block md:w-auto h-80">
          <a
            href=""
            className="w-full h-full flex items-center justify-center
            bg-gray-700 text-white rounded-md
            hover:bg-gray-800 transition-colors duration-200"
          >
            Shop Now
          </a>
        </div>

      </div>

      <div className="md:hidden">
        <a
          href=""
          className="flex items-center justify-center p-5
          bg-gray-700 text-white rounded-md mb-10
          hover:bg-gray-800 transition-colors duration-200"
        >
          Shop Now
        </a>
      </div>
    </section>
  )
}

export default FeaturedCategories;