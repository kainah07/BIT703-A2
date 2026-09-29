import ProductRating from "./ProductRating";
import { useState } from "react";
import { useCart } from "../js/cart";

function ProductCard({product, image, name, price, 
  className, imageClassName, showRating =false, 
  horizontal= false, featured=false, shop=false, path="#"}) {

  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
    }
  return (
    <article >
      <a href={path} className={`${horizontal ? "flex gap-4" : ""} ${className}`}>
        <img src={image} 
          alt={name} 
          className={`${horizontal ? "w-54 h-34" : "w-full"} ${featured ? "h-45 md:h-90" : ""} ${shop ? "w-full h-60" : ""} object-cover rounded-md ${imageClassName}`}
        />
        
        <div className={horizontal ? "mt-0": showRating ? "grid grid-cols-2 mt-4" : "text-center mt-4"}>
          <div>
            <h3 className={`${horizontal ? "text-sm" : ""} font-light uppercase`}>{name}</h3>
            {/* Display rating below the product name for horizontal cards */}
            {horizontal && showRating && <ProductRating />}
            <p className="font-light">${price}</p>
          </div>

          {/* Display rating beside the product information for regular cards */}
          <div className="text-right">
            {!horizontal && showRating && <ProductRating />}
          </div>
        
        </div>
      </a>
      {shop && (
        <button
          type="button"
          onClick={handleAddToCart}
          className="w-full mt-4 bg-[#2F4B4D] text-white py-2 hover:bg-gray-800 transition-colors"
        >
          {added ? "Added to Cart" : "Add to Cart"}
        </button>
      )}
    </article>

    
  )
}

export default ProductCard