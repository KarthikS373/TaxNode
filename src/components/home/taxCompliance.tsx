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
    <Box
      bg={"rgba(130, 0, 255, 0.04)"}
      py={[10, 12, 14, 16, 20]}
    >
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
          Tax Compliance Done Right
        </Heading>
        <Box maxW={"5xl"}>
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(7, 1fr)"
            gap={[6, 7, 8, 9, 10]}
          >
            <GridItem rowSpan={2} colSpan={[7,3,2]}>
              <Box
                bgColor={"#F4EEFF"}
                borderRadius={["lg", null, "xl", null, "2xl"]}
                p={[6, 7, 8, 9, 10]}
                textAlign={"center"}
                height={'100%'}
                display={'flex'}
                flexDir={'column'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Image
                  src={"/accurate&Compliant.png"}
                  alt={""}
                  width={138}
                  height={122}
                />
                <Text
                  size={"xs"}
                  fontWeight={"bold"}
                  color={"#590AE0"}
                  mt={[5, 6, 7, 8, 9]}
                  mb={[2, null, 3, null, 4]}
                >
                  Accurate & Compliant
                </Text>
                <Text size={"xs"} fontWeight={"medium"}>
                  Zero-error compliance with Indian Tax Department policies
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={[7,4,5]}>
              <Box
                bgColor={"#F4EEFF"}
                borderRadius={["lg", null, "xl", null, "2xl"]}
                p={6}
                textAlign={{ base: "center", md: "left" }}
                display={"flex"}
                flexDir={{ base: "column", md: "row" }}
                alignItems={'center'}
                minH={'176px'}
              >
                <Image
                  src={"/quick&simple.png"}
                  alt={""}
                  width={99}
                  height={119}
                  layout={'fixed'}
                />
                <Box ml={[0, 7, 8, 9, 10]}  mt={[5, 6, 0, 0, 0]}>
                  <Text
                    size={"xs"}
                    fontWeight={"bold"}
                    color={"#590AE0"}
                    mb={[2, null, 3, null, 4]}
                  >
                    Quick & Simple
                  </Text>
                  <Text size={"xs"} fontWeight={"medium"}>
                    Sync accounts & wallets and calculate crypto taxes in a
                    flash
                  </Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={[7,4,5]}>
              <Box
                bgColor={"#F4EEFF"}
                borderRadius={["lg", null, "xl", null, "2xl"]}
                p={6}
                display={"flex"}
                alignItems={'center'}
                flexDir={{ base: "column", md: "row" }}
                textAlign={{ base: "center", md: "left" }}
                minH={'176px'}
              >
                <Image
                  src={"/worlClassSupport.png"}
                  alt={""}
                  width={103}
                  height={93}
                  layout={'fixed'}
                />
                <Box ml={[0, 7, 8, 9, 10]}  mt={[5, 6, 0, 0, 0]}>
                  <Text
                    size={"xs"}
                    fontWeight={"bold"}
                    color={"#590AE0"}
                    mb={[2, null, 3, null, 4]}
                  >
                    World-Class Support
                  </Text>
                  <Text size={"xs"} fontWeight={"medium"}>
                    Get timely expert support, exactly when you need it
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
