import { products } from "../data/products";
import ProductCard from "./ProductCard";

function SimilarProducts({ product }) {

  // Find products that belong to the same category
  const similarProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  ).slice(0, 3);

  return (
    <section className="p-5 md:p-10 border-b">

      {/* Section heading */}
      <h2 className="text-center text-3xl md:text-4xl font-light mb-8">
        Similar Products
      </h2>

      {/* Similar products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {similarProducts.map((item) => (
          <ProductCard
            key={item.id}
            image={item.img}
            name={item.name}
            price={item.price}
            path={item.path}
            showRating={true}
            horizontal={true}
          />
        ))}
      </div>

    </section>
  );
}

export default SimilarProducts;