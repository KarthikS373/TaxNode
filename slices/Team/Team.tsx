import { Box, Container, Grid, Text } from "@chakra-ui/react";
import type { TeamSlice } from "../../.slicemachine/prismicio";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Image from "next/image";

const TitleSubtitleCta: React.FC<{ slice: TeamSlice }> = ({ slice }) => {
  const { primary } = slice;

  return (
    <>
      <Box
        pos={"relative"}
        bgColor={"lightCreamColor"}
      >
        <Tabs align="center">
          <TabList
            borderBottom={0}
            pt={[4, 5, 6, 7, 8]}
            background={"rgba(247, 247, 247, 0.5)"}
          >
            <Container display={"flex"} justifyContent={"center"}>
              <Tab
                fontSize={["sm", null, "md", null, "lg"]}
                fontWeight={"semibold"}
                pb={3}
                color={"placeholderColor"}
                _selected={{
                  color: "themeDarkPurple",
                  borderBottomColor: "themeDarkPurple",
                  borderBottomWidth: 4,
                  borderStyle: "solid",
                }}
                _focus={{ outline: "none" }}
                _focusWithin={{ outline: "unset" }}
                px={[6, 7, 8, 9, 10]}
                _active={{
                  bgColor: "transparent",
                }}
              >
                One
              </Tab>
              <Tab
                fontSize={["sm", null, "md", null, "lg"]}
                fontWeight={"semibold"}
                pb={3}
                color={"placeholderColor"}
                _selected={{
                  color: "themeDarkPurple",
                  borderBottomColor: "themeDarkPurple",
                  borderBottomWidth: 4,
                  borderStyle: "solid",
                }}
                _focus={{ outline: "none" }}
                _focusWithin={{ outline: "unset" }}
                px={[6, 7, 8, 9, 10]}
                _active={{
                  bgColor: "transparent",
                }}
              >
                Two
              </Tab>
              <Tab
                fontSize={["sm", null, "md", null, "lg"]}
                fontWeight={"semibold"}
                pb={3}
                color={"placeholderColor"}
                _selected={{
                  color: "themeDarkPurple",
                  borderBottomColor: "themeDarkPurple",
                  borderBottomWidth: 4,
                  borderStyle: "solid",
                }}
                _focus={{ outline: "none" }}
                _focusWithin={{ outline: "unset" }}
                px={[6, 7, 8, 9, 10]}
                _active={{
                  bgColor: "transparent",
                }}
              >
                Three
              </Tab>
            </Container>
          </TabList>
          <Container maxW={'7xl'} py={[10, 12, 14, 16, 20]}>
            <TabPanels>
              <TabPanel>
                <Grid
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                    sm: "repeat(3, 1fr)",
                    md: "repeat(4, 1fr)",
                  }}
                  gap={[6, 7, 8, 9, 10]}
                >
                  <Box
                    display={"flex"}
                    flexDir={"column"}
                    alignItems={"center"}
                    textAlign={"center"}
                  >
                    <Image
                      src={"/team/avinash.jpg"}
                      alt={""}
                      width={150}
                      height={150}
                      style={{ borderRadius: 6 }}
                    />
                    <Text size={"sm"} mt={[1, null, 3, null, 4]}>
                      Avinash Shekhar
                    </Text>
                    <Text fontSize={"xs"}>
                      Founder & CEO <br /> Former CEO & CFO <br /> of Zebpay
                    </Text>
                  </Box>
                  <Box
                    display={"flex"}
                    flexDir={"column"}
                    alignItems={"center"}
                    textAlign={"center"}
                  >
                    <Image
                      src={"/team/karthikeyan.jpg"}
                      alt={""}
                      width={150}
                      height={150}
                      style={{ borderRadius: 6 }}
                    />
                    <Text size={"sm"} mt={[1, null, 3, null, 4]}>
                      {" "}
                      Karthikeyan NG
                    </Text>
                    <Text fontSize={"xs"}>CTO</Text>
                  </Box>
                  <Box
                    display={"flex"}
                    flexDir={"column"}
                    alignItems={"center"}
                    textAlign={"center"}
                  >
                    <Image
                      src={"/team/samir.jpg"}
                      alt={""}
                      width={150}
                      height={150}
                      style={{ borderRadius: 6 }}
                    />
                    <Text size={"sm"} mt={[1, null, 3, null, 4]}>
                      Samir Rajpurkar
                    </Text>
                    <Text fontSize={"xs"}>CEO at Leap Fintech</Text>
                  </Box>
                  <Box
                    display={"flex"}
                    flexDir={"column"}
                    alignItems={"center"}
                    textAlign={"center"}
                  >
                    <Image
                      src={"/team/siddhartha.jpg"}
                      alt={""}
                      width={150}
                      height={150}
                      style={{ borderRadius: 6 }}
                    />
                    <Text size={"sm"} mt={[1, null, 3, null, 4]}>
                      Siddhartha Chatterjee
                    </Text>
                    <Text fontSize={"xs"}>Senior Developer</Text>
                  </Box>
                </Grid>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Container>
        </Tabs>
      </Box>
    </>
  );
};

export default TitleSubtitleCta;
