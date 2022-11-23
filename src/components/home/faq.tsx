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
                  _focusWithin={{
                    outline:'none'
                  }}
                  _focus={{
                    outline:'none'
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Are Cryptos taxable?
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
                  Cryptos fall under Virtual Digital Assets as per the Finance
                  Bill 2022. Taxes on Crypto gains is a flat rate of 30% without
                  exception
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
                  _focusWithin={{
                    outline:'none'
                  }}
                  _focus={{
                    outline:'none'
                  }}
                >
                  <Box flex="1" textAlign="left">
                    What is the Crypto tax in India?
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
                  Income or Profits made from VDAs are taxable at a flat rate of
                  30%.
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
                  _focusWithin={{
                    outline:'none'
                  }}
                  _focus={{
                    outline:'none'
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Can Crypto gains be offset by Crypto losses?
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
                  Capital gains cannot offset capital losses. While no tax is
                  applicable to losses on the sale of Crypto, profits are
                  taxable at a flat rate of 30%.
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
                  _focusWithin={{
                    outline:'none'
                  }}
                  _focus={{
                    outline:'none'
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Are there any Crypto transactions that are not taxable?
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
                  Transfer of Crypto assets from one wallet to another of the
                  same person is not Taxable HODLing is not taxable. HODLing is
                  when an investor holds a Crypto asset or stores a Crypto asset
                  in his/her wallet ( wallet could be an exchange wallet or a
                  personal wallet) without selling it.
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
                  _focusWithin={{
                    outline:'none'
                  }}
                  _focus={{
                    outline:'none'
                  }}
                >
                  <Box flex="1" textAlign="left">
                    How does Taxnodes simplify my tax journey?
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
                  Taxnodes integrates all your transactions from different
                  exchanges and gives your tax reports in minutes. Our seamless
                  password-less sign-in process helps you set up your account in
                  minutes. Crypto tax calculation has never been easier.
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
                  _focusWithin={{
                    outline:'none'
                  }}
                  _focus={{
                    outline:'none'
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Where can I access information about Crypto taxes in India?
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
                  You can access all the necessary information about tax on
                  Crypto in India in the free downloadable Tax guide.
                  Information about the Crypto tax has been taken from the
                  Crypto tax bill ( Finance Bill 2022).
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
                  _focusWithin={{
                    outline:'none'
                  }}
                  _focus={{
                    outline:'none'
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Where can I access the Crypto tax calculator?
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
                  You can sign up on Taxnodes and calculate your taxes in less
                  than 5 minutes
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
                  _focusWithin={{
                    outline:'none'
                  }}
                  _focus={{
                    outline:'none'
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Where can I access the latest Crypto tax news?
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
                  You can access the latest tax news in the Resources section on
                  the Taxnodes homepage I have kept the stripped down version
                  next to the original figma file with the modification
                  requested by samir
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
