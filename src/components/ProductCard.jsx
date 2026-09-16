import ProductRating from "./ProductRating";

function ProductCard({image, name, price, className, imageClassName, showRating = false, horizontal= false, path="#"}) {
  return (
    <article >
      <a href={path} className={`${horizontal ? "flex gap-4" : ""} ${className}`}>
        <img src={image} 
          alt={name} 
          className={`${horizontal ? "w-54 h-34" : "w-full"} object-cover rounded-md ${imageClassName}`}
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
    </article>
  )
}

export default ProductCard