function ProductInfo({ product }) {

  return (
    <div className="p-6 md:p-10">

      {/* Product title */}
      <h1 className="text-3xl md:text-4xl font-light mb-3 uppercase">
        {product.name}
      </h1>

      {/* Product rating */}
      <div className="flex items-center gap-4 mb-6">
        <span>
          {"★".repeat(product.rating)}
          {"☆".repeat(5 - product.rating)}
        </span>

        <span className="text-gray-400 text-sm">
          {product.reviewCount} reviews
        </span>
      </div>

      <hr className="mb-6" />

      {/* Price and model */}
      <div className="flex items-center justify-between gap-5 mb-6">
        <p className="text-2xl font-light">
          ${product.price}
        </p>

        <select className="border p-2 w-40">
          <option>Select Model</option>
          <option>Standard</option>
          <option>Premium</option>
        </select>
      </div>

      <hr className="mb-6" />

      {/* Product description */}
      <p className="text-gray-500 leading-7 mb-8">
        {product.description}
      </p>

      {/* Add to cart */}
      <button
        type="button"
        className="bg-[#2F4B4D] text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200"
      >
        Add To Cart
      </button>

    </div>
  );
}

export default ProductInfo;