import NextImage from "next/image";
import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Container,
  Grid,
  VStack,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputLeftAddon,
  FormErrorMessage,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useToast } from "@chakra-ui/react";

const Hero = () => {
  const toast = useToast();
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
            </Box>
            <Box pos={"relative"} pl={[0, 20, 0, 28, 40]} pr={[0, 20, 0, 0, 0]}>
              <VStack
                bgColor={"white"}
                borderRadius={"md"}
                borderWidth={1}
                borderStyle={"solid"}
                borderColor={"rgba(0, 0, 0, 0.08)"}
                px={[3, null, 4, null, 5]}
                py={[4, 5, 6, 7, 8]}
                spacing={5}
                color={"black"}
              >
                <Text fontWeight={"semibold"} size={"2xl"}>
                  ₹2,999
                </Text>
                <Button variant={"gradient"} w={"100%"}>
                  Buy Now
                </Button>
                <Box pos={"relative"} w={"100%"} opacity={0.4}>
                  <Text
                    fontSize={"xs"}
                    color={"purple"}
                    pos={"absolute"}
                    bgColor={"white"}
                    p={2}
                    m={"0 auto"}
                    left={0}
                    right={0}
                    w={"fit-content"}
                    top={-4}
                    zIndex={1}
                  >
                    {" "}
                    OR{" "}
                  </Text>
                  <Divider
                    borderColor={"purple"}
                    w={"100%"}
                    opacity={"unset"}
                  />
                </Box>
                <Text
                  fontWeight={"semibold"}
                  fontSize={"xs"}
                  textAlign={"center"}
                >
                  Have queries? Talk to an expert
                </Text>
                <FormControl>
                  <FormLabel color={"darkGray"}>Email address</FormLabel>
                  <Input type="email" borderColor={"themeGray"} size={"md"} />
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel color={"darkGray"}>Phone Number</FormLabel>
                  <Input type="phone" placeholder="+91 (*** *** ****)" />
                  <FormErrorMessage>Phone Number is required.</FormErrorMessage>
                </FormControl>
                <Button
                  variant={"gradient"}
                  w={"100%"}
                  onClick={() =>
                    toast({
                      title: "Account created.",
                      description: "We've created your account for you.",
                      status: "success",  //error for error
                      duration: 9000,
                      isClosable: true,
                    })
                  }
                >
                  Request a Callback
                </Button>
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
