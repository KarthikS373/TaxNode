import { useState } from "react";
import { Box, Container, Text, Heading, Flex, VStack } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import type { TitleSubtitleWithRepeatableTabSwitchSlice } from "../../.slicemachine/prismicio";
import Image from "next/image";

const TitleSubtitleCta: React.FC<{
  slice: TitleSubtitleWithRepeatableTabSwitchSlice;
}> = ({ slice }) => {
  const [selection, setSelection] = useState<number>(0);
  const { primary, items } = slice;

  return (
    <>
      <Box
        pos={"relative"}
        py={[10, 12, 14, 16, 20]}
        background={"rgba(247, 247, 247, 0.5)"}
      >
        <Container mb={[10, 12, 14, 16]}>
          <Heading
            color={"themeDarkPurple"}
            as={"h2"}
            fontWeight={"semibold"}
            size={"2xl"}
            textAlign={"center"}
            lineHeight={"10"}
            fontFamily={"Inter"}
            mb={[1, null, 1.5, null, 2]}
          >
            {primary.title}
          </Heading>
          <Text
            fontFamily={"Inter"}
            size={"md"}
            fontWeight={"medium"}
            color={"placeholderColor"}
          >
            {primary.subtitle}
          </Text>
        </Container>
        <Container maxW={"7xl"}>
          <Flex gap={[3, null, 4, null, 5]}>
            <VStack flex={1} width={"100%"} gap={[3, null, 4, null, 5]}>
              {items &&
                items.map((item, i) => (
                  <Box
                    key={i}
                    w={"100%"}
                    borderColor={"rgba(201, 203, 217, 0.25)"}
                    borderWidth={1}
                    borderStyle={"solid"}
                    bgColor={"white"}
                    // onClick={() => selection !== i && setSelection(i)}
                    onMouseEnter={() => selection !== i && setSelection(i)}
                    p={[2, null, 3, null, 4]}
                    borderRadius={"xl"}
                    display={"flex"}
                    alignItems={"center"}
                    // transition={
                    //   "transform 0.5s ease 0s, opacity 0.5s ease 0.5s , visibility 0.5s ease 0.5s"
                    // }
                    _hover={{
                      boxShadow: "0px 2px 12px #E5D9FF",
                      transition:
                        "transform 0.1s ease 0s, boxShadow 0.1s ease 0.1s",
                      "& p": {
                        opacity: 1,
                        transition:
                          "transform 0.1s ease 0s, opacity 0.1s ease 0.1s",
                      },
                      "& svg": {
                        visibility: "visible",
                        transition:
                          "visibility 0.3s linear,opacity 0.3s linear",
                      },
                    }}
                    cursor={"pointer"}
                  >
                    <Box display={"flex"} alignItems={"center"} flex={1}>
                      <Text
                        color={"themeLightPurple"}
                        fontWeight={"medium"}
                        size={"md"}
                        opacity={0.75}
                        fontFamily={"Inter"}
                        mr={2}
                      >
                        {i + 1}
                      </Text>
                      <Text
                        fontWeight={"medium"}
                        size={"md"}
                        color={"themeDarkPurple"}
                        opacity={0.75}
                        fontFamily={"Inter"}
                      >
                        {item.tab_text}
                      </Text>
                    </Box>
                    <ChevronRightIcon
                      color={"themeLightPurple"}
                      w={8}
                      h={8}
                      stroke={"white"}
                      strokeWidth={1}
                      visibility={"hidden"}
                    />
                  </Box>
                ))}
            </VStack>
            <Box
              flex={1}
              width={"100%"}
              maxW={"5xl"}
              borderWidth={1}
              borderStyle={"solid"}
              borderColor={"rgba(201, 203, 217, 0.25)"}
              borderRadius={"2xl"}
              bgColor={"white"}
              p={[10, 12, 14, 16, 20]}
            >
              <Box
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                textAlign={"center"}
              >
                <Box
                  p={[7, null, 8, null, 9]}
                  bg={
                    "linear-gradient(120.1deg, rgba(223, 171, 255, 0.5) 2.05%, rgba(163, 233, 255, 0.5) 103.81%);"
                  }
                  transform={"matrix(-1, 0, 0, 1, 0, 0)"}
                  borderRadius={["xl", null, "4xl", "3xl", 36]}
                  w={[28, null, 32, null, 36]}
                  h={[28, null, 32, null, 36]}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Image
                    src={items[selection].featured_image.url!}
                    alt={items[selection].featured_image.alt!}
                    sizes={"100vw"}
                    width={items[selection].featured_image.dimensions?.width}
                    height={items[selection].featured_image.dimensions?.height}
                  />
                </Box>
                <Text
                  color={"themeDarkPurple"}
                  size={"xs"}
                  fontWeight={"medium"}
                  maxW={"sm"}
                  mt={[6, 7, 8, 9, 10]}
                >
                  {items[selection].featured_image_text}
                </Text>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default TitleSubtitleCta;
