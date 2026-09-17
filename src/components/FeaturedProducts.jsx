import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

function FeaturedProducts() {

  // Keep track of the current product position in the carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 1 product on mobile and 2 products on larger screens
  const [itemsPerPage] = useState(
    window.innerWidth < 768 ? 1 : 2
  );

  // Limit the Featured Products section to the first 6 products
  const featuredProducts = products.slice(0, 6);

  // Get the products that should currently be displayed
  const visibleProducts = featuredProducts.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="p-5">
      <h2 className="text-center text-3xl md:text-4xl font-light mt-8 mb-10">Featured Products</h2>

      {/* Featured products carousel */}
      <div className="flex items-center gap-2 md:gap-6 md:px-5 mb-8">
        <button
          type="button"
          aria-label="Previous products"
          onClick={() => {
            if (currentIndex - 2 >= 0) {
              setCurrentIndex(currentIndex - 2);
            } else {
              setCurrentIndex(featuredProducts.length - itemsPerPage);
            }
          }}
        >
          <span className="material-symbols-outlined">
            arrow_back_ios
          </span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 min-w-0">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.img}
              name={product.name}
              price={product.price}
              featured={true}
              className="min-w-0"
            />
          ))}
        </div>

         <button type="button" aria-label="Next products"
          onClick={() => {
            if (currentIndex + 2 < featuredProducts.length) {
              setCurrentIndex(currentIndex + itemsPerPage);
            } else {
              setCurrentIndex(0);
            }
          }

          }
         
         >
          <span className="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </button>
      </div>
    </section>
  )
}

export default FeaturedProducts