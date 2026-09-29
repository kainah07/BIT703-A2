import ProductCard from "./ProductCard";
import Button from "./Button";
import { Link } from "react-router-dom";

import { products } from "../data/products";

function ShopProducts({ searchTerm, viewAll }) {

  const filteredProducts = searchTerm
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  const showCatalogue = viewAll || searchTerm;

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Promotional content */}
      {!showCatalogue && (
        <div className="border-b md:border-r md:border-b-0 p-5 md:p-10">

          <h2>Gear Up for Your Next Adventure</h2>

          <p className="mt-2 md:mb-16">
            Discover quality outdoor gear designed to support your adventures,
            from everyday exploring to the great outdoors.
          </p>

          <div className="hidden md:block">
            <Link to="/shop?view=all">
              <Button>Browse All</Button>
            </Link>
          </div>

        </div>
      )}

      {/* Normal Shop Products */}
      {!showCatalogue && (
        <div className="md:col-span-2 p-5 md:p-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {products.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                image={product.img}
                name={product.name}
                price={product.price}
                path={product.path}
                showRating={true}
                horizontal={true}
              />
            ))}

          </div>

        </div>
      )}

      {/* Browse All / Search Catalogue */}
      {showCatalogue && (
        <div className="md:col-span-3 p-5 md:p-10">

          {/* Search heading */}
          {searchTerm && (
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-light">
                Search results for "{searchTerm}"
              </h2>

              <p className="text-gray-500 mt-2">
                {filteredProducts.length} product
                {filteredProducts.length !== 1 ? "s" : ""} found
              </p>
            </div>
          )}

          {/* Browse All heading */}
          {viewAll && !searchTerm && (
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-light">
                All Products
              </h2>

              <p className="text-gray-500 mt-2">
                {products.length} products
              </p>
            </div>
          )}

          {/* Catalogue products */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  image={product.img}
                  name={product.name}
                  price={product.price}
                  path={product.path}
                  showRating={true}
                  horizontal={false}
                  shop={true}
                />
              ))}

            </div>
          ) : (
            <div className="py-16 text-center">

              <h2 className="text-xl font-light">
                No products found
              </h2>

              <p className="text-gray-500 mt-2">
                Try searching for another product or category.
              </p>

              <Link
                to="/shop?view=all"
                className="inline-block mt-5 bg-[#2F4B4D] text-white px-6 py-2 hover:bg-gray-800 transition-colors"
              >
                Browse All Products
              </Link>

            </div>
          )}

        </div>
      )}

      {/* Mobile Browse All */}
      {!showCatalogue && (
        <div className="md:hidden text-center mb-10">
          <Link
            to="/shop?view=all"
            className="underline hover:text-gray-600"
          >
            Browse All
          </Link>
        </div>
      )}

    </section>
  );
}

export default ShopProducts;