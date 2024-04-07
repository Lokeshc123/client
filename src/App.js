import "./App.css";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Navbar from "./components/navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
