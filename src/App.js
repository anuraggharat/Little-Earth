import React, { useEffect } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import ContactWhatsapp from "./Components/ContactWhatsapp";
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import ItemSlider from "./Components/ItemSlider";
import M from "materialize-css/dist/js/materialize.min.js";
import Work from "./Components/Work";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ItemSlider />
      <ContactWhatsapp />
      <Work />
      {/* <Features /> */}
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;
