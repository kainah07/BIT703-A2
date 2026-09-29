import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import Newsletter from "../components/Newsletter";
import newsLetterImage from "../assets/news-letter-image.jpg"
import ShopProducts from "../components/ShopProducts";
import Footer from "../components/Footer";
import shopBackground from "../assets/shop-hero-bg.jpg"

import { useSearchParams } from "react-router-dom";

function Shop() {
  const [searchParams] = useSearchParams();

  const searchTerm = searchParams.get("search") || "";
  const viewAll = searchParams.get("view") === "all";
  return (
    <>
      <div className="bg-cover bg-center"
        style={{backgroundImage: `url(${shopBackground})`}}
      >
        <Header 
        showSearchBar={false}
        />
      
        <Hero
          title={"Explore Our Collection"}
          showButton={false}
          showSearchBar={true} 
          isHome={false}
        />
      </div>
      
      {!searchTerm && !viewAll && (
        <>
          <FeaturedCategories />

          <Newsletter
            image={newsLetterImage}
            showImage={true}
            showMessage={false}
            isHome={false}
          />
        </>
      )}

      <ShopProducts         
        searchTerm={searchTerm}
        viewAll={viewAll}
/>
      <Footer />
    </>
  )
}

export default Shop;