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

const Team = () => {
  return (
    <Box my={[10, 12, 14, 16, 20]}>
      <Container maxW={"5xl"}>
        <Heading
          as={"h2"}
          size={"lg"}
          fontWeight={"semibold"}
          textAlign={"center"}
          mb={[6, 7, 8, 9, 10]}
        >
          Team
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={[6, 7, 8, 9, 10]}
        >
          <Box textAlign={"center"}>
            <Image
              src={"/team/avinash.jpg"}
              alt={""}
              width={150}
              height={150}
              layout={"fixed"}
              style={{ borderRadius: 6 }}
            />
            <Text size={"sm"}>Avinash Shekhar</Text>
            <Text fontSize={"xs"}>
              Founder & CEO <br /> Former CEO & CFO <br /> of Zebpay
            </Text>
          </Box>
          <Box textAlign={"center"}>
            <Image
              src={"/team/karthikeyan.jpg"}
              alt={""}
              width={150}
              height={150}
              layout={"fixed"}
              style={{ borderRadius: 6 }}
            />
            <Text size={"sm"}> Karthikeyan NG</Text>
            <Text fontSize={"xs"}>CTO</Text>
          </Box>
          <Box textAlign={"center"}>
            <Image
              src={"/team/samir.jpg"}
              alt={""}
              width={150}
              height={150}
              layout={"fixed"}
              style={{ borderRadius: 6 }}
            />
            <Text size={"sm"}>Samir Rajpurkar</Text>
            <Text fontSize={"xs"}>CEO at Leap Fintech</Text>
          </Box>
          <Box textAlign={"center"}>
            <Image
              src={"/team/siddhartha.jpg"}
              alt={""}
              width={150}
              height={150}
              layout={"fixed"}
              style={{ borderRadius: 6 }}
            />
            <Text size={"sm"}>Siddhartha Chatterjee</Text>
            <Text fontSize={"xs"}>Senior Developer</Text>
          </Box>
        </Grid>
        <Heading
          as={"h2"}
          size={"lg"}
          fontWeight={"semibold"}
          textAlign={"center"}
          mt={[10, 12, 14, 16, 20]}
          mb={[6, 7, 8, 9, 10]}
        >
          Investors
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(3, 1fr)",
          }}
          gap={[6, 7, 8, 9, 10]}
        >
          <Box textAlign={"center"}>
            <Image
              src={"/team/rahil.jpg"}
              alt={""}
              width={150}
              height={150}
              layout={"fixed"}
              style={{ borderRadius: 6 }}
            />
            <Text size={"sm"}>Rahil Shaikh</Text>
            <Text fontSize={"xs"}>Advisor</Text>
          </Box>
          <Box textAlign={"center"}>
            <Image
              src={"/team/mahin.jpg"}
              alt={""}
              width={150}
              height={150}
              layout={"fixed"}
              style={{ borderRadius: 6 }}
            />
            <Text size={"sm"}> Mahin Gupta</Text>
            <Text fontSize={"xs"}>Advisor & Investor</Text>
          </Box>
          <Box textAlign={"center"}>
            <Image
              src={"/team/munider.jpg"}
              alt={""}
              width={150}
              height={150}
              layout={"fixed"}
              style={{ borderRadius: 6 }}
            />
            <Text size={"sm"}>Muninder K Anand</Text>
            <Text fontSize={"xs"}>Advisor & Investor</Text>
          </Box>
        </Grid>
        <Heading
          as={"h2"}
          size={"lg"}
          fontWeight={"semibold"}
          textAlign={"center"}
          mt={[10, 12, 14, 16, 20]}
          mb={[6, 7, 8, 9, 10]}
        >
          Advisors
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(3, 1fr)",
          }}
          gap={[6, 7, 8, 9, 10]}
        >
          <Box textAlign={"center"}>
            <Image
              src={"/team/rahul.jpg"}
              alt={""}
              width={150}
              height={150}
              layout={"fixed"}
              style={{ borderRadius: 6 }}
            />
            <Text size={"sm"}>Rahul Pagidipati</Text>
            <Text fontSize={"xs"}>
              Chairman, ZebPay and <br /> Managing Partner at Ayon <br />{" "}
              Capital
            </Text>
          </Box>
          <Box textAlign={"center"}>
            <Image
              src={"/team/nischal.jpg"}
              alt={""}
              width={150}
              height={150}
              layout={"fixed"}
              style={{ borderRadius: 6 }}
            />
            <Text size={"sm"}> Nischal Shetty</Text>
            <Text fontSize={"xs"}>
              Founder, WazirX
              <br />
              Committer
            </Text>
          </Box>
          <Box textAlign={"center"}>
            <Image
              src={"/team/ajeet.jpg"}
              alt={""}
              width={150}
              height={150}
              layout={"fixed"}
              style={{ borderRadius: 6 }}
            />
            <Text size={"sm"}>Ajeet Khurana</Text>
            <Text fontSize={"xs"}>
              Crypto Influencer, Founder,
              <br /> Reflexical and ex-CEO <br /> Zebpay
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
