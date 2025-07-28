import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CTA from "../components/CTA";
import FAQs from "../components/FAQS";

const IndexPage = () => {
  return (
    <main>
      <h1>Home Page</h1>
      <Header />
      <Banner />
      <CTA />
      <FAQs/>
    </main>
  );
};

export default IndexPage;
