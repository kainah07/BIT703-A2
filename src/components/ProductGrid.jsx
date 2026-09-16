import backpack from "../assets/products/backpack.jpg";
import hikingBoots from "../assets/products/hiking-boots.jpg";
import ProductCard from "./ProductCard";

function ProductGrid() {
  return (
    <section className="p-5">
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-5 md:m-10 lg:m-20">
        <div className="col-span-2 md:col-span-1 md:row-span-2">
          <ProductCard
            image={backpack}
            name="Backpack"
            price="300"
            imageClassName="h-52 md:h-125"
            showRating={true}
          />
        </div>
        <div className="">
          <ProductCard
            image={backpack}
            name="Backpack"
            price="300"
            imageClassName="h-52"
            showRating={true}
          />
        </div>
        <div className="">
          <ProductCard
            image={hikingBoots}
            name="Hiking Boots"
            price="100"
            imageClassName="h-52"
            showRating={true}
          />
        </div>
        <div className="">
          <ProductCard
            image={backpack}
            name="Backpack"
            price="300"
            imageClassName="h-52"
            showRating={true}
          />
        </div>
        <div className="">
          <ProductCard
            image={hikingBoots}
            name="Hiking Boots"
            price="100"
            imageClassName="h-52"
            showRating={true}
          />
        </div>
      </div>
    </section>
  )
}

export default ProductGrid