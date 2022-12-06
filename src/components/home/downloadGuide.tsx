import React, { } from "react";
import {
  Box,
  Heading,
  Container,
  FormControl,
  Input,
  Button,
  Flex,
  FormErrorMessage,
  CircularProgress,
  FormLabel
} from "@chakra-ui/react";
import "swiper/css";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const DownloadGuide = () => {
  const [email, setEmail] = React.useState(null as any);
  const [name, setName] = React.useState(null as any);
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    alert(`email: ${email} & name: ${name}`);
  };
  const toast = useToast();

  const emailHandleChange = (event: any) => { setEmail(event.target.value); }
  const nameHandleChange = (event: any) => { setName(event.target.value); }

  const isErrorEmail = email === '';
  const isErrorName = name === '';
  

  const apiDwnldtaxguideCall = async () => {

    const email_regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const emailValidation = email_regex.test(email);
    if (!emailValidation || email === null ||  name === null) {       
      if ( name === null) {
        setName('');
      }
      if (!emailValidation) {
        setEmail('');
      }
      if (email === null) {
        setEmail('');
      }
      return;
    }
    setIsLoading(true);
    let url = '/api/dwnldtaxguide';
    let params = {
      name: name,
      email: email
    }

    let response = await axios.get(url, { params: params })

    toast({
      title: "Tax Guide",
      description: "Please check your email for download link.",
      status: "success", //error for error
      duration: 9000,
      isClosable: true,
    })
    setName(' ');
    setEmail(' ');
    setIsLoading(false);
  }

  return (
    <Box
      py={[10, 12, 14, 16, 20]}
      bgImage={
        "linear-gradient(180deg, rgba(130, 0, 255, 0.06) 0%, rgba(130, 0, 255, 0.06) 100%)"
      }
    >
      <form onSubmit={handleSubmit}>
        <Container maxW={"4xl"}>
          <Heading
            as={"h2"}
            size={"xl"}
            fontWeight={"semibold"}
            textAlign={"center"}
            mb={[6, 7, 8, 9, 10]}
          >
            Know everything about Crypto taxation in India
          </Heading>
          <Flex
            gap={[3, null, 4, null, 5]}
            flexDir={{ base: "column", md: "row" }}
            alignItems={{ base: 'center', sm: "center" }}
          >
            <Flex
              flex={1}
              gap={[3, null, 4, null, 5]}
              flexDir={{ base: "column", sm: "row" }}
            >
              <FormControl isRequired isInvalid={isErrorName}>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Name" variant={"secondary"} value={name} onChange={nameHandleChange} />
                <FormErrorMessage>Name is required.</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={isErrorEmail}>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder="Email" variant={"secondary"} value={email} onChange={emailHandleChange} />
                <FormErrorMessage>Email is required.</FormErrorMessage>
              </FormControl>
            </Flex>
            <Button
              variant={"tertiary"}
              onClick={() => apiDwnldtaxguideCall()}
              mt={[1,2,8,]}
            >
              {isLoading ? (
                <CircularProgress
                  isIndeterminate
                  size="24px"
                  color="teal"
                />
              ) : (
                'Download FreeTax Guide '
              )}
            </Button>
          </Flex>
        </Container>
      </form>
    </Box>
  );
};

export default DownloadGuide;
