import React from "react";
import { NextSeo } from "next-seo";
import Hero from "../components/home/hero";
import SupportExchanges from "../components/home/supportExchanges";
import Faq from "../components/home/faq";
import GetStarted from "../components/home/getStarted";
import TaxCompliance from "../components/home/taxCompliance";
import DownloadGuide from "../components/home/downloadGuide";
import Slider from "../components/home/slider";
import Team from "../components/home/team";

const Home = () => {
  return (
    <>
      <NextSeo title="Taxnodes" />
      <Hero />
      <SupportExchanges />
      <TaxCompliance />
      <GetStarted />
      <Slider />
      <DownloadGuide />
      <Team />
      <Faq />
    </>
  );
};

export default Home;
