import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";

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
    </>
  )
}

export default Shop;