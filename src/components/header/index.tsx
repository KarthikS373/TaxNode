import { Box, Button, Container, HStack } from "@chakra-ui/react";

import Logo from "../logo";
import Navbar from "./navbar";

const Header = () => (
  <Box as="header" bg="white">
    <Container maxW={"7xl"}>
      <HStack justifyContent={"space-between"}>
        <Box pt={4} pb={3}>
          <Logo />
        </Box>
        <HStack>
          <Navbar />
        </HStack>
      </HStack>
    </Container>
  </Box>
);

export default Header;
