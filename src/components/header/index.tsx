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
          {/* <Button variant={"gradient"} size={"sm"}>
            Sign in
          </Button> */}
        </HStack>
      </HStack>
    </Container>
  </Box>
);

export default Header;
