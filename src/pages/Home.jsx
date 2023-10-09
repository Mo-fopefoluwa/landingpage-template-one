import React from "react";
import Hero from "../components/Hero";
import Hotdesserts from "../components/Hotdesserts";
import Banner from "../components/Banner";
import Why from "../components/Why";
import Explore from "../components/Explore";
import Testimonial from "../components/Testimonial";
import Book from "../components/Book";

const Home = () => {
  return (
    <div>
      <Hero />
      <Hotdesserts />
      <Banner />
      <Why />
      <Explore />
      <Testimonial />
      <Book />
    </div>
  );
};

export default Home;
