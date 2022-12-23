import { Box, Text } from "@chakra-ui/react";

import type { TeamSlice } from "../../.slicemachine/prismicio";

const TitleSubtitleCta: React.FC<{ slice: TeamSlice }> = ({ slice }) => {
  const { primary } = slice;

  return (
    <>
      <Box pos={"relative"} my={[10, 12, 14, 16, 20]}></Box>
    </>
  );
};

export default TitleSubtitleCta;
