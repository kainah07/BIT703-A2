
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
      {/* Floating anchor */}
      <a
        href="#top"
        className="fixed bottom-5 right-5 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors z-50"
        aria-label="Back to top"
      >
        <span className="material-symbols-outlined"  style={{ fontSize: "18px" }}>
          north
        </span>
      </a>

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