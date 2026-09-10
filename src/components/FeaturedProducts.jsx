import backpack from "../assets/backpack.jpg";
import hikingBoots from "../assets/hiking-boots.jpg";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  return (
    <section className="p-5">
      <h2 className="text-center text-3xl md:text-4xl font-light mt-8 mb-8">Featured Products</h2>

      <div className="flex items-center gap-6 px-5 mb-8">
        <button type="button" aria-label="Previous products">
          <span className="material-symbols-outlined">
            arrow_back_ios
          </span>
        </button>

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