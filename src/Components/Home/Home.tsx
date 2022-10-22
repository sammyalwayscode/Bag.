import React from "react";
import Brand from "./Brand";
import Category from "./Category";
import Footer from "./Footer";
import Hero from "./Hero";
import MixMatch from "./MixMatch";
import NewsLetter from "./NewsLetter";
import Popular from "./Popular";

const Home = () => {
  return (
    <div>
      <Hero />
      <Brand />
      <Category />
      <MixMatch />
      <Popular />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
