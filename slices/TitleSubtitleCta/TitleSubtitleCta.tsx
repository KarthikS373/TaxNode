import { Box, Text } from "@chakra-ui/react";

import type { TitleSubtitleCtaSlice } from "../../.slicemachine/prismicio";

const TitleSubtitleCta: React.FC<{ slice: TitleSubtitleCtaSlice }> = ({
  slice,
}) => {
  const { primary } = slice;

  return (
    <>
      <Box pos={"relative"} id={slice.id}>
        <Text size={"4xl"} fontWeight={"bold"} lineHeight={"normal"} color={'black'}>
          {primary.title}
        </Text>
      </Box>
    </>
  );
};

export default TitleSubtitleCta;
