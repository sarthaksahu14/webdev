import React from "react";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Maruees from "./Components/Maruees";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full h-screen bg-black">
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Maruees />
        <Cards />
        <Footer />
      </div>

    </>
  )
}

export default App;
