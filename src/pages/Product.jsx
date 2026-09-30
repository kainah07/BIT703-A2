import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import ProductInfo from "../components/ProductInfo";
import SimilarProducts from "../components/SimilarProducts";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

function Product() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <Header />

      <main>
        <Link
          to="/shop"
          className="m-5 inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span>←</span>
          <span>Back to Shop</span>
        </Link>
        {/* Product image and information */}
        <section className="grid grid-cols-1 lg:grid-cols-2 border">

          {/* Product image */}
          <div className="flex items-center justify-center p-5 md:p-10 border-b lg:border-b-0 lg:border-r">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-80 lg:h-125 object-cover rounded-md"
            />
          </div>

          {/* Product information */}
          <ProductInfo product={product} />

        </section>

        <SimilarProducts product={product} />
        <Reviews />

      </main>

      <Footer />
    </>
  );
}

export default Product;