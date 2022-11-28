import React from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import "swiper/css";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import Image from "next/image";

const TaxCompliance = () => {
  return (
    <Box bg={"rgba(130, 0, 255, 0.04)"} py={[10, 12, 14, 16, 20]}>
      <Container
        maxW={"7xl"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading
          as={"h2"}
          size={"lg"}
          fontWeight={"semibold"}
          textAlign={"center"}
          mb={[6, 7, 8, 9, 10]}
        >
          Taxnodes Assist Program Features
        </Heading>
        <Box maxW={"5xl"}>
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(7, 1fr)"
            gap={[6, 7, 8, 9, 10]}
          >
            <GridItem rowSpan={2} colSpan={[7, 3, 2]}>
              <Box
                bgColor={"#F4EEFF"}
                borderRadius={["lg", null, "xl", null, "2xl"]}
                p={[6, 7, 8, 9, 10]}
                textAlign={"center"}
                height={"100%"}
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image
                  src={"/taxnodeProgrammAssist/connect.png"}
                  alt={""}
                  width={100}
                  height={116}
                />
                <Text
                  size={"xs"}
                  fontWeight={"bold"}
                  color={"#590AE0"}
                  mt={[5, 6, 7, 8, 9]}
                  mb={[2, null, 3, null, 4]}
                >
                  Connect
                </Text>
                <Text size={"xs"} fontWeight={"medium"}>
                  A one-hour online advisory session for helping you file your
                  tax returns
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={[7, 4, 5]}>
              <Box
                bgColor={"#F4EEFF"}
                borderRadius={["lg", null, "xl", null, "2xl"]}
                py={[6,7,8,9,10]}
                px={[8,9,10,12,14]}
                textAlign={{ base: "center", md: "left" }}
                display={"flex"}
                flexDir={{ base: "column", md: "row" }}
                alignItems={"center"}
                minH={"176px"}
              >
                  <Image
                    src={"/taxnodeProgrammAssist/analysis.png"}
                    alt={""}
                    width={92}
                    height={100}
                  />
                <Box ml={[0, 7, 8, 9, 10]} mt={[5, 6, 0, 0, 0]}>
                  <Text
                    size={"xs"}
                    fontWeight={"bold"}
                    color={"#590AE0"}
                    mb={[2, null, 3, null, 4]}
                  >
                    Analysis
                  </Text>
                  <Text size={"xs"} fontWeight={"medium"}>
                    Portfolio analysis and recommendation of the best course of
                    action
                  </Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={[7, 4, 5]}>
              <Box
                bgColor={"#F4EEFF"}
                borderRadius={["lg", null, "xl", null, "2xl"]}
                py={[6,7,8,9,10]}
                px={[8,9,10,12,14]}
                display={"flex"}
                alignItems={"center"}
                flexDir={{ base: "column", md: "row" }}
                textAlign={{ base: "center", md: "left" }}
                minH={"176px"}
              >
                <Image
                  src={"/taxnodeProgrammAssist/solution.png"}
                  alt={""}
                  width={100}
                  height={100}
                  layout={"fixed"}
                />
                <Box ml={[0, 7, 8, 9, 10]} mt={[5, 6, 0, 0, 0]}>
                  <Text
                    size={"xs"}
                    fontWeight={"bold"}
                    color={"#590AE0"}
                    mb={[2, null, 3, null, 4]}
                  >
                    Solution
                  </Text>
                  <Text size={"xs"} fontWeight={"medium"}>
                    Answers to all your questions will be provided by and expert
                  </Text>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TaxCompliance;
