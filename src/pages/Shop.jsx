import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import Newsletter from "../components/Newsletter";
import newsLetterImage from "../assets/news-letter-image.jpg"
import ShopProducts from "../components/ShopProducts";
import Footer from "../components/Footer";
import shopBackground from "../assets/shop-hero-bg.jpg"
import SearchBar from "../components/SearchBar";

function Shop() {
  return (
    <>
      <div className="bg-cover bg-center"
        style={{backgroundImage: `url(${shopBackground})`}}
      >
        <Header 
        showSearchBar={false}
        />
        <div className="md:hidden">
          <SearchBar />
        </div>
        
        <Hero
          title={"Explore Our Collection"}
          showButton={false}
          showSearchBar={true} 
          isHome={false}
        />
      </div>
      

      <FeaturedCategories />
      <Newsletter 
        image={newsLetterImage}
        showImage={true}
        showMessage={false}
        isHome={false}
      />

      <ShopProducts />
      <Footer />
    </>
  )
}

export default Shop;