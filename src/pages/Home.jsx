import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import ProductGrid from "../components/ProductGrid";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
      <Newsletter />
      <ProductGrid />
      <AboutSection />
      <Footer />
    </>
  );
}

export default Home;