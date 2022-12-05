import React, {  } from "react";
import {
  Box,
  Heading,
  Container,
  FormControl,
  Input,
  Button,
  Flex,
  FormErrorMessage,
  Spinner
} from "@chakra-ui/react";
import "swiper/css";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const DownloadGuide = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const toast = useToast();
  
  const emailHandleChange = (event:any)=>{ setEmail(event.target.value);}
  const nameHandleChange = (event:any)=>{ setName(event.target.value);}

  const  apiDwnldtaxguideCall = async()=>{

    let url = '/api/dwnldtaxguide';
    let params= {
      name:name,
      email:email
    }

    let response =await axios.get(url,{params:params})

      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success", //error for error
        duration: 9000,
        isClosable: true,
      })
      setName('');
      setEmail('');
  }
  return (
    <Box
      py={[10, 12, 14, 16, 20]}
      bgImage={
        "linear-gradient(180deg, rgba(130, 0, 255, 0.06) 0%, rgba(130, 0, 255, 0.06) 100%)"
      }
    >
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
          alignItems={{base:'center',sm:"flex-start"}}
        >
          <Flex
            flex={1}
            gap={[3, null, 4, null, 5]}
            flexDir={{ base: "column", sm: "row" }}
            alignItems={"flex-start"}
          >
            <FormControl>
              <Input placeholder="Name" variant={"secondary"} value={name} onChange={nameHandleChange}/>
              <FormErrorMessage>Name is required.</FormErrorMessage>
            </FormControl>
            <FormControl>
<<<<<<< HEAD
              <Input type = "email" placeholder="Email" variant={"secondary"} value={email} onChange={emailHandleChange}/>
=======
              <Input placeholder="Email" variant={"secondary"} value={email} onChange={emailHandleChange}/>
>>>>>>> taxnodes/payu-backend
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
          </Flex>
          <Button
            
            variant={"tertiary"}
            onClick={() => apiDwnldtaxguideCall()}
          >
            Download FreeTax Guide 
            {/* <Spinner  ml={3} size={'md'}/> */}
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default DownloadGuide;
