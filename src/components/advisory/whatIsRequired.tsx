import React from "react";
import {
  Box,
  Heading,
  Container,
  Text,
} from "@chakra-ui/react";

const WhatIsRequired = () => {
  return (
    <Box py={[10, 12, 14, 16, 20]} bg={'linear-gradient(180deg, rgba(130, 0, 255, 0.06) 0%, rgba(130, 0, 255, 0.06) 100%)'}>
      <Container maxW={"xl"} textAlign={'center'}>
        <Heading
          as={"h2"}
          size={"lg"}
          fontWeight={"semibold"}
          mb={[3,null,4,null,5]}
        >
          What is required?
        </Heading>

        <Text size={'xs'} fontWeight={'medium'}>Taxnodes team will reach out to you through email once you register. Details of all required documents will be communicated to you before the call.</Text>
      </Container>
    </Box>
  );
};

export default WhatIsRequired;
