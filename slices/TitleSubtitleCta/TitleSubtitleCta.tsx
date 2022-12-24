import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

import type { TitleSubtitleCtaSlice } from "../../.slicemachine/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

const TitleSubtitleCta: React.FC<{ slice: TitleSubtitleCtaSlice }> = ({
  slice,
}) => {
  const { primary } = slice;

  return (
    <>
      <Box
        bg={
          "linear-gradient(96.51deg, rgba(254, 244, 255, 0.36) 1.77%, rgba(226, 248, 255, 0.36) 98.46%);"
        }
        py={[10, 12, 14, 16, 20]}
      >
        <Container
          maxW={"3xl"}
          fontFamily={"Inter"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => (
                <Heading
                  as={"h1"}
                  size={"4xl"}
                  fontWeight={"bold"}
                  color={"themeDarkPurple"}
                  textAlign={"center"}
                  sx={{
                    "& .highlight": {
                      backgroundClip: "text",
                      backgroundImage:
                        "linear-gradient(90deg, #8E2DE2 0.19%, #4A00E0 99.81%);",
                    },
                  }}
                >
                  {children}
                </Heading>
              ),
            }}
          />

          {primary.subtitle && (
            <Text
              textAlign={"center"}
              color={"placeholderColor"}
              size={"md"}
              maxW={"lg"}
              mt={[1, null, 2, null, 3]}
              mb={[3, null, 4, null, 5]}
            >
              {primary.subtitle}
            </Text>
          )}
          {primary.cta_label && (
            <Button variant={"gradient"} size={"lg"}>
              {primary.cta_label}
            </Button>
          )}
          <Box
            boxShadow={"0px 4px 15px rgba(134, 40, 226, 0.14)"}
            borderRadius={["xl", null, "2xl", null, "3xl"]}
            bgColor={"white"}
            py={[3, null, 4, null, 5]}
            px={[6, null, 7, null, 8]}
            w={"fit-content"}
            mt={[6, 7, 8, 9, 10]}
          >
            <Text
              size={"md"}
              fontWeight={"medium"}
              textAlign={"center"}
              color={"placeholderColor"}
            >
              Exclusive early-bird offer!
            </Text>
            <Flex
              mt={[3, null, 4, null, 5]}
              gap={[3, null, 4, null, 5]}
              flexDir={{ base: "column", sm: "row" }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text
                fontWeight={"semibold"}
                color={"themeDarkPurple"}
                size={"2xl"}
              >
                1999
              </Text>
              <Button variant={"gradient"} size={"lg"} minW={"207px"}>
                Buy Now
              </Button>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default TitleSubtitleCta;
