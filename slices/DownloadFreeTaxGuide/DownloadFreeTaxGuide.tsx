import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

import type { DownloadFreeTaxGuideSlice } from "../../.slicemachine/prismicio";

const TitleSubtitleCta: React.FC<{ slice: DownloadFreeTaxGuideSlice }> = ({
  slice,
}) => {
  const { primary } = slice;
  const toast = useToast()

  return (
    <>
      <Box pos={"relative"} my={[10, 12, 14, 16, 20]}>
        <Container>
          <Heading
            color={"themeDarkPurple"}
            as={"h2"}
            fontWeight={"semibold"}
            size={"2xl"}
            textAlign={"center"}
            lineHeight={"10"}
            fontFamily={"Inter"}
            mb={[3, null, 4, null, 5]}
          >
            {primary.title}
          </Heading>

          <Flex
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            gap={[3, null, 4, null, 5]}
          >
            <Flex
              flexDir={{ base: "column", sm: "row" }}
              alignItems={"flex-start"}
              gap={[3, null, 4, null, 5]}
            >
              <FormControl isRequired flex={1}>
                <Input
                  placeholder={primary.name_placeholder}
                  variant={"secondary"}
                  size={"lg"}
                />
                <FormErrorMessage>{primary.name_error_text}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired flex={1}>
                <Input
                  type="email"
                  placeholder={primary.email_placeholder}
                  variant={"secondary"}
                  size={"lg"}
                />
                <FormErrorMessage>{primary.email_placeholder}</FormErrorMessage>
              </FormControl>
            </Flex>
            <Box pos={"relative"} w={"fit-content"}>
              <Button
                variant={"tertiary"}
                // disabled
                size={"lg"}
                w={"fit-content"}
                rightIcon={
                  <>
                    <DownloadIcon />
                  </> 
                }
                onClick={() =>
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                }
              >
                Download FreeTax Guide
              </Button>
              <Spinner
                size={"sm"}
                pos={"absolute"}
                top={0}
                bottom={0}
                right={"50%"}
                left={"50%"}
                margin={"auto"}
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default TitleSubtitleCta;
