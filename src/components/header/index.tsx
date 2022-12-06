import { Box, Button, Container, HStack } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "../logo";
import Navbar from "./navbar";

const Header = () => (
  <Box
    as="header"
    bg="white"
    pos={"fixed"}
    w={"100%"}
    boxShadow={"xs"}
    zIndex={9}
  >
    <Container maxW={"7xl"}>
      <HStack justifyContent={"space-between"}>
        <Box pt={4} pb={3}>
          <Logo />
        </Box>
        <HStack>
          <Navbar />
          <Link href={"/advisory"}>
            <Button variant={"outline"} size={"sm"}>
              <Box as="span">Advisory</Box>{" "}
              <Box color={"lightGray"} px={1}>
                |
              </Box>{" "}
              <Box color={"veryDarkGray"} className={"live"}>
                Live{" "}
              </Box>
              <Box
                as="span"
                bgColor={"themeGreen"}
                w={2}
                h={2}
                borderRadius={"full"}
                ml={1}
              ></Box>
            </Button>
          </Link>
        </HStack>
      </HStack>
    </Container>
  </Box>
);

export default Header;
