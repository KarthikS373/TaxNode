import { Box, Container, Heading, Text } from "@chakra-ui/react";

import type { TitleSubtitleCtaSlice } from "../../.slicemachine/prismicio";
import { PrismicRichText } from "@prismicio/react";

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
        <Container maxW={"3xl"}>
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
        </Container>
      </Box>
    </>
  );
};

export default TitleSubtitleCta;
