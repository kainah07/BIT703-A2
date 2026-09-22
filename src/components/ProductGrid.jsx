import { products } from "../data/products";
import ProductCard from "./ProductCard";

function ProductGrid() {

  // Use the first 5 products for this product grid
  const gridProducts = products.slice(0, 5);

  return (
    <section className="p-5">
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-5 md:m-10 lg:m-20">

        {/* Large featured product */}
        <div className="col-span-2 md:col-span-1 md:row-span-2">
          <a href="/product/1">
            <img
              src={gridProducts[0].img}
              alt={gridProducts[0].name}
              className="w-full h-52 md:h-125 object-cover rounded-md"
            />

            <div className="grid grid-cols-2 mt-4">
              <div>
                <h3 className="font-light uppercase">
                  {gridProducts[0].name}
                </h3>

                <p className="font-light">
                  ${gridProducts[0].price}
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Remaining products */}
        {gridProducts.slice(1).map((product) => (
          <div key={product.id}>
            <ProductCard
              image={product.img}
              name={product.name}
              price={product.price}
              path={product.path}
              imageClassName="h-52"
              showRating={true}
            />
          </div>
        ))}

        
      </div>
    </section>
  )
}

export default ProductGrid