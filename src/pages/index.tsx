import React from "react";
import { Box, Heading, Text, Button, Container, Grid } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Hero from "../components/home/hero";
import SupportExchanges from "../components/home/supportExchanges";
import Faq from "../components/home/faq";
import GetStarted from "../components/home/getStarted";
import TaxCompliance from "../components/home/taxCompliance";

const Home = () => {
  return (
    <>
      <NextSeo title="Taxnodes" />
      <Hero/>
      {/* <SupportExchanges/> */}
      <TaxCompliance/>
      <GetStarted/>
      <Faq/>
    </>
  );
};

export default Home;
