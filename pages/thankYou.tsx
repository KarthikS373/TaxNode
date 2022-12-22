import React from "react";
import { NextSeo } from "next-seo";
import {
  Box,
  Text,
  Container,
  Flex,
  IconButton,
  Heading,
  FormLabel,
  FormControl,
  Input,
  FormErrorMessage,
  VStack,
  HStack,
  Button,
  Checkbox,
  Link,
} from "@chakra-ui/react";

const ThankYou = () => {
  return (
    <>
      <NextSeo title="Order Summary" />
      <Container
        maxW={"2xl"}
        pt={[24, 28, 32, 36, 40]}
        pb={[10, 12, 14, 16, 20]}
        minH={"90vh"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={'center'}
      >
        <Heading as={"h1"} size={"3xl"} fontWeight={"semibold"}>
        Thank you!
        </Heading>
        <Text
          size={"md"}
          fontWeight={"medium"}
          mt={[2, null, 3, null, 4]}
          mb={[6, 7, 8, 9, 10]}
          color={'blackOpac'}
        >
         Your payment is being verified, please check your email for further steps. We are happy to have you.
        </Text>
      </Container>
    </>
  );
};

export default ThankYou;
