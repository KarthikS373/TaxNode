import { Box, Container, Text } from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => (
  <Box as="header" bg="#590AE0">
    <Container
      maxW={"7xl"}
      display={"flex"}
      flexDir={'column'}
      alignItems={"center"}
      justifyContent={"center"}
      py={[8, 9, 10, 12, 14]}
    >
      <Image src={"/taxnodeWhite.png"} alt={""} width={170} height={46} />
      <Text fontSize={"xs"} fontWeight={"medium"} textAlign={"center"} color={'white'} mt={[6,7,8,9,10]}>
        Copyright ©2022 TaxNodes. All rights reserved
      </Text>
    </Container>
  </Box>
);

export default Footer;
