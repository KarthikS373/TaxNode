import React from "react";
import { NextSeo } from "next-seo";
import Hero from "../components/advisory/hero";
import GetStarted from "../components/advisory/getStarted";
import TaxCompliance from "../components/advisory/taxCompliance";
import WhatIsRequired from "../components/advisory/whatIsRequired";
import FaqAdvisory from "../components/advisory/faq";

const Home = () => {
  return (
    <>
      <NextSeo title="Advisory" />
      <Hero />
      <TaxCompliance />
      <GetStarted />
      <WhatIsRequired />
      <FaqAdvisory />
    </>
  );
};

export default Home;
