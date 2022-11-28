import NextImage from "next/image";
import React from "react";
import { Box, Heading, Text, Button, Container, Grid } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Hero = () => {
  return (
    <>
      <NextSeo title="Home" />

      <Box
        as="section"
        background={
          "linear-gradient(90deg, #8E2DE2 0.19%, #4A00E0 99.81%), #925EEB;"
        }
        py={[10, 12, 14, 16, 20]}
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
                lineHeight={"normal"}
              >
                Taxnodes Assist Program
              </Heading>
              <Text
                fontWeight="normal"
                size={"xs"}
                my={[3, null, 4, null, 5]}
                maxW={"sm"}
              >
                Get all your questions about crypto taxation answered through a
                one-on-one call with our tax experts. Our experts will recommend
                the right course of action to ensure 100% tax compliance.
              </Text>
              {/* <Button
                colorScheme="white"
                variant="outline"
                fontWeight="semibold"
                size="md"
              >
                Request invite
              </Button> */}
            </Box>
            <Box pos={"relative"}>
              {/* <NextImage
                src="/heroFeaturedImage.png"
                width="640"
                height="509"
                alt="team"
                priority
              /> */}
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
