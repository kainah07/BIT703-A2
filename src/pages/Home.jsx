
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import ProductGrid from "../components/ProductGrid";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import homeBackground from "../assets/home-hero-bg.jpg"

function Home() {
  return (
    <>
      <div className="bg-cover bg-center hero-background"
            style={{backgroundImage: `url(${homeBackground})`}}>
        <Header />
        <Hero 
        title={"Gear Up Your New Adventure"}
        showImages={true}
        showSearchBar={false} />
      </div>
      
      <FeaturedProducts />
      <Newsletter
      />
      <ProductGrid />
      <AboutSection />
      <Footer 
        isDefault={true}
      />
    </>
  );
}

export default Home;