import ProductRating from "./ProductRating";

function ProductCard({image, name, price, className, imageClassName, showRating = false}) {
  return (
    <article className={className}>
      <img src={image} 
        alt={name} 
        className={`w-full object-cover rounded-md ${imageClassName}`}
      />
      
      <div className={showRating ? "grid grid-cols-2 mt-4" : "text-center mt-4"}>
        <div>
          <h3 className="font-light uppercase">{name}</h3>
          <p className="font-light">${price}</p>
        </div>

        {/* Display rating if showRating is true */}
        {showRating && <ProductRating />}
      </div>
    </article>
  )
}

export default ProductCard