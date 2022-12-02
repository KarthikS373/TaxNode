import React from "react";
import {
  Box,
  Heading,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Link,
} from "@chakra-ui/react";
import "swiper/css";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

const Faq = () => {
  return (
    <Box my={[10, 12, 14, 16, 20]}>
      <Container maxW={"3xl"}>
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
                    outline: "none",
                  }}
                  _focus={{
                    outline: "none",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    How will I know if the expert will be able to address their
                    queries?
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
                  color={"blackOpac"}
                  fontWeight={"medium"}
                  pl={0}
                  pr={[8, 12, 16, 20, 24]}
                >
                  Once you purchase our plan, our team will understand the
                  nature of your case and assign a crypto tax consultant with
                  experience in handling similar cases
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
                    outline: "none",
                  }}
                  _focus={{
                    outline: "none",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    How can I utilise this session efficiently?
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
                  color={"blackOpac"}
                  fontWeight={"medium"}
                  pl={0}
                  pr={[8, 12, 16, 20, 24]}
                >
                  You need to keep a list of questions and relevant documents
                  handy. Make sure you ask specific questions so that our expert
                  can guide you in a precise manner.
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
                    outline: "none",
                  }}
                  _focus={{
                    outline: "none",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    What documents need to be submitted?
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
                  color={"blackOpac"}
                  fontWeight={"medium"}
                  pl={0}
                  pr={[8, 12, 16, 20, 24]}
                >
                  You will need to put your query in a word or pdf document and
                  upload it. Additionally, you can also put your transactions as
                  .csv to explain the specific instance where you would need our
                  expert advice. You can download your transactions data from
                  different exchanges as a .csv/.xls file which you can get in
                  the respective order/transaction report section.
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
                    outline: "none",
                  }}
                  _focus={{
                    outline: "none",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    What if my queries don't get resolved in a single session?
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
                  color={"blackOpac"}
                  fontWeight={"medium"}
                  pl={0}
                  pr={[8, 12, 16, 20, 24]}
                >
                  You can opt for multiple sessions. In case you wish to
                  continue your existing session, you can pay and avail the
                  service again by mentioning the ticket number in the mail or
                  book a completely new session.
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
                    outline: "none",
                  }}
                  _focus={{
                    outline: "none",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    What should I do if I need regular advice from an expert?
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
                  color={"blackOpac"}
                  fontWeight={"medium"}
                  pl={0}
                  pr={[8, 12, 16, 20, 24]}
                >
                  Our team will be happy to assist you with customised offerings
                  wherein you can book multiple sessions with our experts.
                  Please write to us at{" "}
                  <Link href="mailto:care@taxnodes.com">care@taxnodes.com</Link>{" "}
                  for the same and we will assist you.
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
                    outline: "none",
                  }}
                  _focus={{
                    outline: "none",
                  }}
                >
                  <Box flex="1" textAlign="left">
                    I want to know more about Taxnodes advisory offerings
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
                  color={"blackOpac"}
                  fontWeight={"medium"}
                  pl={0}
                  pr={[8, 12, 16, 20, 24]}
                >
                  Interested customers who want to know more about the services
                  can opt for ‘Request a Callback’ feature on our website or
                  send email to us at{" "}
                  <Link href="mailto:care@taxnodes.com">care@taxnodes.com</Link>{" "}
                  to know more about our offerings
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
