import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/hero2.jpg"
import hero3 from "../assets/hero3.jpg"
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
      <Hero 
       title={"Gear Up Your New Adventure"}
       images={[hero1, hero2, hero3]}
       showSearchBar={false} />
      <FeaturedProducts />
      <Newsletter />
      <ProductGrid />
      <AboutSection />
      <Footer 
        isDefault={true}
      />
    </>
  );
}

export default Home;