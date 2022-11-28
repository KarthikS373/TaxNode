import React from "react";
import { Box, Heading, Text, Button, Container, Grid } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Hero from "../components/advisory/hero";
import GetStarted from "../components/advisory/getStarted";
import TaxCompliance from "../components/advisory/taxCompliance";
import WhatIsRequired from "../components/advisory/whatIsRequired";

const Home = () => {
  return (
    <>
      <NextSeo title="Advisory" />
      <Hero />
      <TaxCompliance />
      <GetStarted />
      <WhatIsRequired />
    </>
  );
};

export default Home;
