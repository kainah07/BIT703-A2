import { categories } from "../data/products";

function FeaturedCategories() {
  return(
    <section className="p-5 mt-20">
      <h2 className="text-3xl md:text-4xl text-center font-light mb-5">Featured Categories</h2>
      <p className="text-center mb-5 text-gray-500 md:mb-0">
        Explore our collection of quality gear designed for your next adventure.
      </p>

      <div className="grid grid-cols-4 gap-8 w-250 mx-auto my-16">
        {categories.map((item =>
          <div key={item.name}>
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

        <div className="flex w-full h-80">
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
    </section>
  )
}

export default FeaturedCategories;