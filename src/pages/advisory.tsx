import React from "react";
import { NextSeo } from "next-seo";
import Hero from "../components/advisory/hero";
import GetStarted from "../components/advisory/getStarted";
import TaxCompliance from "../components/advisory/taxCompliance";
import WhatIsRequired from "../components/advisory/whatIsRequired";
import FaqAdvisory from "../components/advisory/faq";
import RequestCallBack from "../components/advisory/requestCallBack";
import BuyNow from "../components/advisory/buyNow";

const Home = () => {
  return (
    <>
      <NextSeo title="Advisory" />
      <Hero />
      <RequestCallBack />
      <TaxCompliance />
      <GetStarted />
      <WhatIsRequired />
      <BuyNow />
      <FaqAdvisory />
    </>
  );
};

export default Home;
