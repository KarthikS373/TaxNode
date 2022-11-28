import { Box, Container, Text } from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => (
  <Box as="header" bg="#590AE0">
    <Container
      maxW={"7xl"}
      display={"flex"}
      flexDir={{base:'column',sm:'row'}}
      alignItems={"center"}
      justifyContent={{base:'center',sm:"space-between"}}
      py={[3,null,4,null,5]}
    >
      <Image src={"/taxnodeWhite.png"} alt={""} width={170} height={46} />
      <Text fontSize={"xs"} fontWeight={"medium"} textAlign={"center"} color={'white'} mt={{base:2,sm:'unset'}}>
        Copyright ©2022 TaxNodes. All rights reserved
      </Text>
    </Container>
  </Box>
);

export default Footer;
