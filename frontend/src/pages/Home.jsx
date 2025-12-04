import React from "react";
import Hero from "../components/Hero";
import Story from "../components/Story";
import WhyGharKa from "../components/WhyGharKa";
import CategorySection from "../components/CategorySection";
import { ReviewsList } from "../components/ReviewList";
import ProductSection from "../components/ProductSection";
import featured from "../data/featuredProducts.json";
import mostLoved from "../data/mostLovedProducts.json";

export default function Home() {
  return (
    <>
      <main className="mt-20">
        <Hero />
        <CategorySection />

        <Story />

        <ProductSection
          id={mostLoved.id}
          text_col="#2F5D3A"
          title={mostLoved.title}
          description={mostLoved.description}
          products={mostLoved.products}
          sortBy={mostLoved.sortBy}
        />
        <ProductSection
          id={featured.id}
          title={featured.title}
          description={featured.description}
          products={featured.products}
          sortBy={featured.sortBy}
        />
        <WhyGharKa />

        {/* CATEGORY SECTION HERE */}

        <ReviewsList />
      </main>
    </>
  );
}
