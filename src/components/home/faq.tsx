import React from "react";
import {
  Box,
  Heading,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import "swiper/css";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

const Faq = () => {
  return (
    <Box my={[10, 12, 14, 16, 20]}>
      <Container maxW={"7xl"}>
        <Heading
          as={"h2"}
          size={"lg"}
          fontWeight={"semibold"}
          textAlign={"center"}
          mb={[6, 7, 8, 9, 10]}
        >
          FAQs
        </Heading>

        <Accordion allowToggle>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <AccordionButton
                  pl={0}
                  fontSize={["xs", null, "sm", null, "md"]}
                  fontWeight={"semibold"}
                  _hover={{
                    bgColor: "transparent",
                  }}
                  _expanded={{
                    color: "#4A00E0",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" color={"#4A00E0"} />
                  ) : (
                    <AddIcon fontSize="12px" color={"#4A00E0"} />
                  )}
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  fontSize={["xs", null, null, "sm", null]}
                  color={"rgba(0,0,0,0.5)"}
                  fontWeight={"medium"}
                  pl={0}
                  pr={[8, 12, 16, 20, 24]}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <AccordionButton
                  pl={0}
                  fontSize={["xs", null, "sm", null, "md"]}
                  fontWeight={"semibold"}
                  _hover={{
                    bgColor: "transparent",
                  }}
                  _expanded={{
                    color: "#4A00E0",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" color={"#4A00E0"} />
                  ) : (
                    <AddIcon fontSize="12px" color={"#4A00E0"} />
                  )}
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  fontSize={["xs", null, null, "sm", null]}
                  color={"rgba(0,0,0,0.5)"}
                  fontWeight={"medium"}
                  pl={0}
                  pr={[8, 12, 16, 20, 24]}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <AccordionButton
                  pl={0}
                  fontSize={["xs", null, "sm", null, "md"]}
                  fontWeight={"semibold"}
                  _hover={{
                    bgColor: "transparent",
                  }}
                  _expanded={{
                    color: "#4A00E0",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" color={"#4A00E0"} />
                  ) : (
                    <AddIcon fontSize="12px" color={"#4A00E0"} />
                  )}
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  fontSize={["xs", null, null, "sm", null]}
                  color={"rgba(0,0,0,0.5)"}
                  fontWeight={"medium"}
                  pl={0}
                  pr={[8, 12, 16, 20, 24]}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Faq;
