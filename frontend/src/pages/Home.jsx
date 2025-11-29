import React from "react";
// import Hero from "../components/Hero";
// import Story from "../components/Story";
// import WhyGharKa from "../components/WhyGharKa";
// import TopProducts from "../components/TopProducts";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Story from "../components/Story";
import WhyGharKa from "../components/WhyGharKa";
import TopProducts from "../components/TopProducts";
import Footer from "../components/Footer";

// Import Components

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Story/>
        <WhyGharKa/>
        <TopProducts />
        {/* <Categories /> */}
        {/* <Testimonials /> */}
        {/* <Instagram /> */}
        {/* <BlogSection /> */}
      </main>

      <Footer />
    </>
  );
}
