import React from "react";
import Header from "./Header";
import RegisterModal from "./BsComponents/RegisterModal";
import LoginModal from "./BsComponents/LoginModal";
import BookingForm from "./BookingForm";
import Package from "./Package";
import Services from "./Services";
import Gallery from "./Gallery";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <Header />

      {/* Register Modal  */}
      <RegisterModal />

      {/* Login Modal  */}
      <LoginModal />

      {/* travel form Section */}
      <BookingForm />

      {/* Package Section */}
      <Package />

      {/* Services Section */}
      <Services />

      {/* Gallery Section */}
      <Gallery />

      {/* About Us Section  */}
      <AboutUs />

      {/* Footer  */}
      <Footer />
    </div>
  );
}

export default App;
