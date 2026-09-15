import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import Newsletter from "../components/Newsletter";
import newsLetterImage from "../assets/news-letter-image.jpg"
function Shop() {
  return (
    <>
      <Header 
        showSearchBar={false}
      />
      <Hero
        title={"Explore Our Collection"}
        showButton={false}
        showSearchBar={true} 
       />

      <FeaturedCategories />
      <Newsletter 
        image={newsLetterImage}
        showImage={true}
        showMessage={false}
      />
    </>
  )
}

export default Shop;