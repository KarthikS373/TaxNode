import React from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Divider,
  Flex,
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  useToast,
  Spinner
} from "@chakra-ui/react";

const RequestCallBack = () => {
  const toast = useToast();
  return (
    <Box py={[10, 12, 14, 16, 20]} bg={"pinkOpac"}>
      <Container
        maxW={"3xl"}
        textAlign={"center"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading
          as={"h2"}
          size={"xl"}
          fontWeight={"semibold"}
          mb={[3, null, 4, null, 5]}
        >
          What is this Plan about?
        </Heading>

        <Text size={"md"} fontWeight={"medium"} color={"blackOpac"}>
          Get all your questions about crypto taxation answered through a
          one-on-one call with our tax experts. Our experts will recommend the
          right course of action to ensure 100% tax compliance.
        </Text>
        <Divider
          borderColor={"black"}
          opacity={0.3}
          maxW={"md"}
          my={[6, 7, 8, 9, 10]}
        />
        <Text
          size={"xs"}
          fontWeight={"normal"}
          color={"black"}
          mb={[3, null, 4, null, 5]}
        >
          Have queries? Talk to an expert
        </Text>
        <Box maxW={"md"}>
          <Flex gap={[3, null, 4, null, 5]} flexDir={['column',"row"]}>
            <FormControl>
              <Input
                type="email"
                borderColor={"themeGray"}
                size={"md"}
                placeholder={"Enter email address"}
              />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <FormControl>
              <Input type="phone" placeholder="Enter phone number" />
              <FormErrorMessage>Phone Number is required.</FormErrorMessage>
            </FormControl>
          </Flex>
          <Button
            mt={[3, null, 4, null, 5]}
            variant={"outline"}
            fontWeight={"semibold"}
            onClick={() =>
              toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success", //error for error
                duration: 9000,
                isClosable: true,
              })
            }
          >
            Request a Callback <Spinner  ml={3} size={'md'}/>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RequestCallBack;
