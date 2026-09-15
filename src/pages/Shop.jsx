import Header from "../components/Header";
import Hero from "../components/Hero"

function Shop() {
  return (
    <>
      <Header 
        showSearchBar={false}
      />
      <Hero
       title={"Explore Our Collection"}
       showButton={false}
       showSearchBar={true} />
    </>
  )
}

export default Shop;