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

const Sorry = () => {
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
        Sorry
        </Heading>
        <Text
          size={"md"}
          fontWeight={"medium"}
          mt={[2, null, 3, null, 4]}
          mb={[6, 7, 8, 9, 10]}
          color={'blackOpac'}
        >
         Your payment seems to have failed. Please try again. If the amount was debited from your account, please write to us at care[at]taxnodes.com
        </Text>
      </Container>
    </>
  );
};

export default Sorry;
