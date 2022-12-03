import React from "react";
import { Box, Heading, Container, Grid, useDisclosure } from "@chakra-ui/react";
import BuyNow from "../buyNow";

const Hero = () => {
  return (
    <>
      <Box
        as="section"
        pt={[24, 28, 32, 36, 40]}
        pb={[10, 12, 14, 16, 20]}
        color={"white"}
      >
        <Container maxW={"6xl"}>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={[6, 7, 8, 9, 10]}
            alignItems={"center"}
          >
            <Box>
              <Heading
                as="h1"
                size={"3xl"}
                fontWeight="semibold"
                lineHeight={"1.3"}
                backgroundClip={"text"}
                backgroundImage={
                  "linear-gradient(90deg, #8E2DE2 0.19%, #4A00E0 99.81%)"
                }
              >
                Taxnodes Crypto Tax Advisory Plan
              </Heading>
            </Box>
            <Box pos={"relative"} display={'flex'} alignItems={'flex-end'} justifyContent={'center'}>
              <BuyNow />
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
