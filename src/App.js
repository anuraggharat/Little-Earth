import React from 'react';
import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer';
import Services from './Components/Services'
import ContactWhatsapp from './Components/ContactWhatsapp';
import Features from './Components/Features';
import Testimonials from './Components/Testimonials';
import ItemSlider from './Components/ItemSlider';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ContactWhatsapp />
<ItemSlider />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
