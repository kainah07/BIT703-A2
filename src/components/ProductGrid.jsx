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
          <ProductCard
            image={gridProducts[0].img}
            name={gridProducts[0].name}
            price={gridProducts[0].price}
            path={gridProducts[0].path}
            imageClassName="h-52 md:h-125"
            showRating={true}
          />
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