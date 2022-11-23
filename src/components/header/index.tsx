import { Box, Container } from "@chakra-ui/react";

import Logo from "../logo";
import Navbar from "./navbar";

const Header = () => (
  <Box as="header" bg="white">
    <Container maxW={'7xl'}>
      <Box pt={4} pb={3}>
        <Logo />
      </Box>
      {/* <Navbar /> */}
    </Container>
  </Box>
);

export default Header;
