import React from "react";
import {
  Box,
  Heading,
  Container,
  Text,
} from "@chakra-ui/react";

const WhatIsRequired = () => {
  return (
    <Box my={[10, 12, 14, 16, 20]} bg={'white'}>
      <Container maxW={"2xl"} textAlign={'center'}>
        <Heading
          as={"h2"}
          size={"lg"}
          fontWeight={"semibold"}
          mb={[3,null,4,null,5]}
        >
          How to prep for a satisfactory session?
        </Heading>

        <Text size={'xs'} fontWeight={'medium'} color={'blackOpac'}>Taxnodes team will reach out to you through email once you register. Details of all required documents will be communicated to you before the call.</Text>
      </Container>
    </Box>
  );
};

export default WhatIsRequired;
