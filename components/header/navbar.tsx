import { useState } from "react";

import { Box, useColorMode } from "@chakra-ui/react";

import Links from "./links";
import HamburgerMenu from "./hamburgerMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="nav"
      display="flex"
      flexDir={{ base: "row-reverse", sm: "row" }}
      alignItems="center"
    >
      <HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
      <Box
        as="ul"
        fontWeight="regular"
        bg={{ base: "white", sm: "transparent" }}
        display={{
          base: isOpen ? "block" : "none",
          sm: "flex",
        }}
        position={{ base: "absolute", sm: "static" }}
        top="5rem"
        left={4}
        right={4}
        // rounded={{ base: "lg", sm: "none" }}
        py={{ base: "4  ", sm: "0" }}
        px={{ base: "0", sm: "0" }}
        alignItems={{ sm: "center" }}
        boxShadow={{ base: "xl", sm: "none" }}
        zIndex="2"
      >
        <Links onClick={() => setIsOpen(false)}/>
      </Box>
    </Box>
  );
};

export default Navbar;
