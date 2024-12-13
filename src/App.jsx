import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutUs from "./Components/AboutUs/AboutUs";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
