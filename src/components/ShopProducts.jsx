import ProductCard from "./ProductCard"
import Button from "./Button";
import { products } from "../data/products";

function ShopProducts() {
  return(
    <section className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5 md:p-10">

  {/* Promotional content */}
  <div>
    <h2>Gear Up for Your Next Adventure</h2>
    <p className="mt-2 md:mb-16">
      Discover quality outdoor gear designed to support your adventures, from everyday exploring to the great outdoors.
    </p>
    <div className="hidden md:block">
      <Button>Browse All</Button>
    </div>
    
  </div>

  {/* Products */}
  <div className="md:col-span-2">
    <div className="grid grid-col-1 md:grid-cols-2 gap-5">
      {products.slice(0,6).map((product) => (
        <ProductCard
          key={product.id}
          image={product.img}
          name={product.name}
          price={product.price}
          showRating={true}
          horizontal={true}
        />
      ))}
    </div>
  </div>
  
  <a href="" className="text-center md:hidden ">Browse All</a>
</section>
  )
}

export default ShopProducts;