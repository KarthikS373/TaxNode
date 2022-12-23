import { Box, Text } from "@chakra-ui/react";

import type { RequestCallBackSlice } from "../../.slicemachine/prismicio";

const TitleSubtitleCta: React.FC<{ slice: RequestCallBackSlice }> = ({
  slice,
}) => {
  const { primary } = slice;

  return (
    <>
      <Box pos={"relative"} my={[10, 12, 14, 16, 20]}>
        {/* <Text color={"themeDarkPurple"}>{primary.title}</Text> */}
      </Box>
    </>
  );
};

export default TitleSubtitleCta;
