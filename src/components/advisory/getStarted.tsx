import React from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import "swiper/css";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import Image from "next/image";

const GetStarted = () => {
  return (
    <Box py={[10, 12, 14, 16, 20]} bgColor={"pinkOpac"}>
      <Container maxW={"7xl"}>
        <Heading
          as={"h2"}
          size={"lg"}
          fontWeight={"semibold"}
          textAlign={"center"}
          mb={[6, 7, 8, 9, 10]}
        >
          How does it all work?
        </Heading>
        <HStack
          spacing={[0, 4, 14, 16, 20]}
          flexDir={{ base: "column", sm: "row" }}
          justify={"center"}
          alignItems={{ base: "center", sm: "flex-start" }}
          textAlign={"center"}
        >
          <VStack justifyContent={"center"} spacing={0}>
            <Box
              borderRadius={["lg", null, "xl", null, "2xl"]}
              bgColor={"#F4EEFF"}
              p={[6, 7, 8, 9, 10]}
            >
              <Image
                src={"/howItIsDone/registerProgram.png"}
                alt={""}
                width={80}
                height={80}
              />
            </Box>
            <Text
              size={"sm"}
              color={"lightPurple"}
              fontWeight={"bold"}
              maxW={"10rem"}
              pt={[3, null, 4, null, 5]}
              pb={1}
            >
              Step 1
            </Text>
            <Text
              size={"xs"}
              color={"blackOpac"}
              fontWeight={"medium"}
              maxW={"10rem"}
            >
              Purchase the plan.
            </Text>
          </VStack>
          <VStack pos={"relative"} py={[5, 0]}>
            <ArrowForwardIcon
              color={"#590AE0"}
              fontSize={"2xl"}
              transform={{ base: "rotate(90deg)", sm: "unset" }}
              mt={[0, 10, 12, 14, 16]}
              opacity={0.5}
            />
          </VStack>
          <VStack justifyContent={"center"} spacing={0}>
            <Box
              borderRadius={["lg", null, "xl", null, "2xl"]}
              bgColor={"#F4EEFF"}
              p={[6, 7, 8, 9, 10]}
            >
              <Image
                src={"/howItIsDone/time.png"}
                alt={""}
                width={80}
                height={80}
              />
            </Box>
            <Text
              size={"sm"}
              color={"lightPurple"}
              fontWeight={"bold"}
              maxW={"10rem"}
              pt={[3, null, 4, null, 5]}
              pb={1}
            >
              Step 2
            </Text>
            <Text
              size={"xs"}
              color={"blackOpac"}
              fontWeight={"medium"}
              maxW={"10rem"}
            >
              Submit the required documents.
            </Text>
          </VStack>
          <VStack pos={"relative"} py={[5, 0]}>
            <ArrowForwardIcon
              color={"#590AE0"}
              fontSize={"2xl"}
              transform={{ base: "rotate(90deg)", sm: "unset" }}
              mt={[0, 10, 12, 14, 16]}
              opacity={0.5}
            />
          </VStack>
          <VStack justifyContent={"center"} spacing={0}>
            <Box
              borderRadius={["lg", null, "xl", null, "2xl"]}
              bgColor={"#F4EEFF"}
              p={[6, 7, 8, 9, 10]}
            >
              <Image
                src={"/howItIsDone/oneonone.png"}
                alt={""}
                width={80}
                height={80}
              />
            </Box>
            <Text
              size={"sm"}
              color={"lightPurple"}
              fontWeight={"bold"}
              maxW={"10rem"}
              pt={[3, null, 4, null, 5]}
              pb={1}
            >
              Step 3
            </Text>
            <Text
              size={"xs"}
              color={"blackOpac"}
              fontWeight={"medium"}
              maxW={"10rem"}
            >
              Pick a preferred time slot.
            </Text>
          </VStack>
          <VStack pos={"relative"} py={[5, 0]}>
            <ArrowForwardIcon
              color={"#590AE0"}
              fontSize={"2xl"}
              transform={{ base: "rotate(90deg)", sm: "unset" }}
              mt={[0, 10, 12, 14, 16]}
              opacity={0.5}
            />
          </VStack>
          <VStack justifyContent={"center"} spacing={0}>
            <Box
              borderRadius={["lg", null, "xl", null, "2xl"]}
              bgColor={"#F4EEFF"}
              p={[6, 7, 8, 9, 10]}
            >
              <Image
                src={"/howItIsDone/question.png"}
                alt={""}
                width={80}
                height={80}
              />
            </Box>
            <Text
              size={"sm"}
              color={"lightPurple"}
              fontWeight={"bold"}
              maxW={"10rem"}
              pt={[3, null, 4, null, 5]}
              pb={1}
            >
              Step 4
            </Text>
            <Text
              size={"xs"}
              color={"blackOpac"}
              fontWeight={"medium"}
              maxW={"10rem"}
            >
              Get your queries resolved.
            </Text>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default GetStarted;
