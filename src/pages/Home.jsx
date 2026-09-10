import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import ProductGrid from "../components/ProductGrid";
import AboutSection from "../components/AboutSection";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
      <Newsletter />
      <ProductGrid />
      <AboutSection />
    </>
  );
}

export default Home;