import backpack from "../assets/products/backpack.jpg";
import hikingBoots from "../assets/products/hiking-boots.jpg";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  return (
    <section className="p-5">
      <h2 className="text-center text-3xl md:text-4xl font-light mt-8 mb-10">Featured Products</h2>

      <div className="flex items-center gap-6 px-5 mb-8">
        <button type="button" aria-label="Previous products">
          <span className="material-symbols-outlined">
            arrow_back_ios
          </span>
        </button>

        <div className="grid grid-cols-2 gap-5 flex-1 min-w-0">
          <ProductCard 
            image={backpack} 
            name="Backpack" 
            price="300"
            className="flex-1" 
            imageClassName="h-84"
          />

          <ProductCard 
            image={hikingBoots} 
            name="Hiking Boots" 
            price="150"
            className="flex-1"
            imageClassName="h-84"
          />
        </div>

         <button type="button" aria-label="Next products">
          <span className="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </button>
      </div>
    </section>
  )
}

export default FeaturedProducts