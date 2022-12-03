import React from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import "swiper/css";

import Image from "next/image";

const TaxCompliance = () => {
  return (
    <Box bg={"white"} py={[10, 12, 14, 16, 20]}>
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
          Plan Inclusions
        </Heading>
        <Box maxW={"5xl"}>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={[6, 7, 8, 9, 10]}
          >
            <GridItem>
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
                  color={"lightPurple"}
                  mt={[5, 6, 7, 8, 9]}
                  mb={[2, null, 3, null, 4]}
                >
                  1 on 1 consultation
                </Text>
                <Text size={"xs"} fontWeight={"medium"} color={"blackOpac"}>
                  Get a 30 minute online advisory session with our tax experts
                  and get all the help you need to file your crypto tax returns.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
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
                  src={"/taxnodeProgrammAssist/analysis.png"}
                  alt={""}
                  width={92}
                  height={100}
                />
                <Text
                  size={"xs"}
                  fontWeight={"bold"}
                  color={"lightPurple"}
                  mt={[5, 6, 7, 8, 9]}
                  mb={[2, null, 3, null, 4]}
                >
                  Portfolio Analysis
                </Text>
                <Text size={"xs"} fontWeight={"medium"} color={"blackOpac"}>
                  Our crypto tax advisor will analyse your existing portfolio
                  and address all your queries.
                </Text>
              </Box>
            </GridItem>
            <GridItem>
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
                  src={"/taxnodeProgrammAssist/solution.png"}
                  alt={""}
                  width={100}
                  height={100}
                />
                <Text
                  size={"xs"}
                  fontWeight={"bold"}
                  color={"lightPurple"}
                  mt={[5, 6, 7, 8, 9]}
                  mb={[2, null, 3, null, 4]}
                >
                  Resolution of Query
                </Text>
                <Text size={"xs"} fontWeight={"medium"} color={"blackOpac"}>
                  Our crypto tax advisor will resolve all your queries and
                  recommend the right course of action.
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TaxCompliance;
