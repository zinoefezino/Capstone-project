import ContactForm from "./components/ContactForm";
import React from "react";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
import PlanetTable from "./components/PlanetTable";
import ImageGallery from "./components/ImageGallery";
function App() {
  return (
    <div>
      <Hero />;
      <VideoSection />
      <ImageGallery />
      <PlanetTable />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
