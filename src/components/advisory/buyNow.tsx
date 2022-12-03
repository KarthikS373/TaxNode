import React from "react";
import { Box, Container } from "@chakra-ui/react";
import BuyNowComp from "../buyNow";

const BuyNow = () => {
  return (
    <Box py={[10, 12, 14, 16, 20]} bg={"pinkOpac"}>
      <Container
        maxW={"3xl"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <BuyNowComp />
      </Container>
    </Box>
  );
};

export default BuyNow;
