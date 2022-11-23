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
    <Box my={[10, 12, 14, 16, 20]}>
      <Container maxW={"7xl"}>
        <Heading
          as={"h2"}
          size={"lg"}
          fontWeight={"semibold"}
          textAlign={"center"}
          mb={[6, 7, 8, 9, 10]}
        >
          Get Started
        </Heading>
        <HStack
          spacing={[0, 4, 14, 16, 20]}
          flexDir={{ base: "column", sm: "row" }}
          justify={"center"}
          alignItems={{ base: "center", sm: "flex-start" }}
          textAlign={"center"}
        >
          <VStack justifyContent={"center"} spacing={[4, null, 5, null, 6]}>
            <Box
              borderRadius={["lg", null, "xl", null, "2xl"]}
              bgColor={"#F4EEFF"}
              p={[6, 7, 8, 9, 10]}
              w={[24, 28, 32, 36, 40]}
              height={[24, 28, 32, 36, 40]}
            >
              <Image src={"/register.png"} alt={""} width={80} height={80} />
            </Box>

            <Text size={"xs"} fontWeight={"medium"} maxW={"10rem"}>
              Register
            </Text>
          </VStack>
          <VStack pos={"relative"} py={[5,0]}>
            <ArrowForwardIcon
              color={"#590AE0"}
              fontSize={"2xl"}
              transform={{ base: "rotate(90deg)", sm: "unset" }}
              mt={[0, 10, 12, 14, 16]}
              opacity={0.5}
            />
          </VStack>
          <VStack justifyContent={"center"} spacing={[4, null, 5, null, 6]}>
            <Box
              borderRadius={["lg", null, "xl", null, "2xl"]}
              bgColor={"#F4EEFF"}
              p={[6, 7, 8, 9, 10]}
              w={[24, 28, 32, 36, 40]}
              height={[24, 28, 32, 36, 40]}
            >
              <Image
                src={"/synchaccount.png"}
                alt={""}
                width={80}
                height={80}
              />
            </Box>

            <Text size={"xs"} fontWeight={"medium"} maxW={"10rem"}>
              Sync accounts and wallets or upload statements
            </Text>
          </VStack>
          <VStack pos={"relative"} py={[5,0]}>
            <ArrowForwardIcon
              color={"#590AE0"}
              fontSize={"2xl"}
              transform={{ base: "rotate(90deg)", sm: "unset" }}
              mt={[0, 10, 12, 14, 16]}
              opacity={0.5}
            />
          </VStack>
          <VStack justifyContent={"center"} spacing={[4, null, 5, null, 6]}>
            <Box
              borderRadius={["lg", null, "xl", null, "2xl"]}
              bgColor={"#F4EEFF"}
              p={[6, 7, 8, 9, 10]}
              w={[24, 28, 32, 36, 40]}
              height={[24, 28, 32, 36, 40]}
            >
              <Image
                src={"/generatetaxreport.png"}
                alt={""}
                width={80}
                height={80}
              />
            </Box>

            <Text size={"xs"} fontWeight={"medium"} maxW={"10rem"}>
              Generate tax reports
            </Text>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default GetStarted;
