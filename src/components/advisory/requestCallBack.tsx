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
import axios from "axios";

const RequestCallBack = () => {
  const [email, setEmail] = React.useState("");
  const [contactNo, setContactNo] = React.useState("");
  const toast = useToast();
  
  const emailHandleChange = (event:any)=>{ setEmail(event.target.value);}
  const contactNoHandleChange = (event:any)=>{ setContactNo(event.target.value);}

  const  apiCreateEnquiryCall = async()=>{

    console.log(window.location.hostname) 
    console.log(window.location.href)
    let url = '/api/createEnquiry';
    let params= {
      phone:contactNo,
      email:email
    }

    let response =await axios.post(url,{},{ params:params})

console.log("response:::",response);
    
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success", //error for error
        duration: 9000,
        isClosable: true,
      })
      setEmail('');
      setContactNo('');  


  }
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
                value={email}
                onChange={emailHandleChange}
              />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <FormControl>
              <Input type="phone" placeholder="Enter phone number" value={contactNo} onChange={contactNoHandleChange}/>
              <FormErrorMessage>Phone Number is required.</FormErrorMessage>
            </FormControl>
          </Flex>
          <Button
            mt={[3, null, 4, null, 5]}
            variant={"outline"}
            fontWeight={"semibold"}
            onClick={() =>apiCreateEnquiryCall()}
          >
            Request a Callback 
            {/* <Spinner  ml={3} size={'md'}/> */}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RequestCallBack;
