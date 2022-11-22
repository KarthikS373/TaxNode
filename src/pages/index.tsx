import React from "react";
import { Box, Heading, Text, Button, Container, Grid } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Hero from "../components/home/hero";
import SupportExchanges from "../components/home/supportExchanges";
import Faq from "../components/home/faq";

const Home = () => {
  return (
    <>
      <NextSeo title="Home" />
      <Hero/>
      <SupportExchanges/>
      <Faq/>
    </>
  );
};

export default Home;
