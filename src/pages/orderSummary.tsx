import React from "react";
import { NextSeo } from "next-seo";
import {
  Box,
  Text,
  Container,
  Flex,
  Heading,
  FormLabel,
  FormControl,
  Input,
  FormErrorMessage,
  VStack,
  HStack,
  Button,
  Checkbox,
  Link,
  CircularProgress,
  Select,
} from "@chakra-ui/react";
import axios from "axios";

const OrderSummary = () => {
  const [firstName, setFirstName] = React.useState(null as any);
  const [lastName, setLastName] = React.useState(null as any);
  const [email, setEmail] = React.useState(null as any);
  const [contactNo, setContactNo] = React.useState(null as any);
  const [state, setState] = React.useState(null as any);
  const [isLoading, setIsLoading] = React.useState(false);
  const [tnc, setTnc] = React.useState(false);

  const emailHandleChange = (event: any) => {
    setEmail(event.target.value);
  };
  const firstNameHandleChange = (event: any) => {
    setFirstName(event.target.value);
  };
  const lastNameHandleChange = (event: any) => {
    setLastName(event.target.value);
  };
  const contactNoHandleChange = (event: any) => {
    setContactNo(event.target.value);
  };
  const stateHandleChange = (event: any) => {
    setState(event.target.value);
  };

  const tncHandleChange = (event: any) => {
    setTnc(event.target.checked);
  };

  const isErrorEmail = email === "";
  const isErrorContactNo = contactNo === "";// || !/^[0-9]{10}$/.test(contactNo);
  const isErrorFirstName = firstName === "";// || firstName === null;
  const isErrorState = state === "";// || state === null;
  const isTncUnchecked = !tnc;

  const apiTxreqtopayuCall = async () => {
    const mob_regex_old = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    const mob_regex = /^[0-9]{10}$/;
    const mobileValidation = mob_regex.test(contactNo);
    const email_regex =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;
    const emailValidation = email_regex.test(email);

    console.log("TNC: ", tnc);
    if (
      !tnc ||
      !mobileValidation ||
      !emailValidation ||
      email === "" ||
      contactNo === "" ||
      firstName === null ||
      firstName.trim === "" ||
      state === null ||
      state.trim() === ""
    ) {
      if (firstName === "") {
        setFirstName("");
      }
      if (state === "") {
        setState("");
      }
      if (contactNo === "" || !mobileValidation) {
        setContactNo("");
      }
      if (!emailValidation || email === "") {
        setEmail("");
      }

      return;
    }
    setIsLoading(true);
    let url = "/api/txreqtopayu";
    let body = {
      phone: contactNo,
      email: email,
      firstname: firstName,
      state: state,
    };

    let response = await axios
      .post(url, body)
      .then((response) => (window.location.href = response?.data.responseUrl));
    setEmail("  ");
    setFirstName("  ");
    setLastName("  ");
    setContactNo("");
    setState("  ");
    setIsLoading(false);
  };

  return (
    <>
      <NextSeo title="Order Summary" />
      <Container
        maxW={"6xl"}
        pt={[24, 28, 32, 36, 40]}
        pb={[10, 12, 14, 16, 20]}
        minH={"93vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
        >
          <Heading as={"h1"} size={"3xl"} fontWeight={"semibold"}>
            Your order summary
          </Heading>
          <Text
            size={"lg"}
            fontWeight={"semibold"}
            mt={[2, null, 3, null, 4]}
            mb={[6, 7, 8, 9, 10]}
          >
            Cryptocurrency Taxation Advisory
          </Text>

          <Flex
            flexDir={{ base: "column", md: "row" }}
            gap={[3, null, 4, null, 5]}
            w={"100%"}
          >
            <Box
              flex={1}
              borderWidth={1}
              borderStyle={"solid"}
              borderColor={"rgba(0, 0, 0, 0.08)"}
              bgColor={"lightThemeGray"}
              p={[3, null, 4, null, 5]}
              borderRadius={"md"}
              h={"100%"}
            >
              <Text
                fontWeight={"bold"}
                size={"md"}
                color={"blackOpac"}
                mb={[3]}
              >
                Contact Information
              </Text>
              <VStack spacing={3}>
                <FormControl isInvalid={isErrorEmail}>
                  <FormLabel color={"darkGray"}>
                    Email{" "}
                    <Box as="span" color={"red"}>
                      *
                    </Box>
                  </FormLabel>
                  <Input
                    type="email"
                    borderColor={"themeGray"}
                    size={"md"}
                    placeholder={"Enter your email address here"}
                    value={email}
                    onChange={emailHandleChange}
                  />
                  <FormErrorMessage>
                    Please enter a valid Email ID
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={isErrorFirstName}>
                  <FormLabel color={"darkGray"}>
                    Name{" "}
                    <Box as="span" color={"red"}>
                      *
                    </Box>
                  </FormLabel>
                  <Flex flexDir={{ base: "column", sm: "row" }} gap={3}>
                    <Box>
                      <Input
                        type="text"
                        borderColor={"themeGray"}
                        size={"md"}
                        placeholder={"First Name"}
                        value={firstName}
                        onChange={firstNameHandleChange}
                      />
                      <FormErrorMessage>
                        Please enter a valid name
                      </FormErrorMessage>
                    </Box>
                    <Box>
                      <Input
                        borderColor={"themeGray"}
                        size={"md"}
                        placeholder={"Last Name"}
                        value={lastName}
                        onChange={lastNameHandleChange}
                      />
                    </Box>
                  </Flex>
                </FormControl>

                <Flex flexDir={{ base: "column", sm: "row" }} gap={3}>
                  <FormControl>
                    <FormLabel color={"darkGray"}>
                      Country Code
                      <Box as="span" color={"red"}>
                        *
                      </Box>
                    </FormLabel>
                    <Input
                      borderColor={"themeGray"}
                      size={"md"}
                      placeholder={"IN +91"}
                      disabled
                    />
                  </FormControl>
                  <FormControl isInvalid={isErrorContactNo}>
                    <FormLabel color={"darkGray"}>
                      Contact No
                      <Box as="span" color={"red"}>
                        *
                      </Box>
                    </FormLabel>
                    <Input
                      type="number"
                      borderColor={"themeGray"}
                      size={"md"}
                      placeholder={"*** *** ****"}
                      value={contactNo}
                      onChange={contactNoHandleChange}
                    />
                    <FormErrorMessage>
                      Please enter a valid mobile number
                    </FormErrorMessage>
                  </FormControl>
                </Flex>

                <FormControl isInvalid={isErrorState}>
                  <FormLabel color={"darkGray"}>
                    State
                    <Box as="span" color={"red"}>
                      *
                    </Box>
                  </FormLabel>
                  <Input
                    type="text"
                    borderColor={"themeGray"}
                    size={"md"}
                    placeholder={
                      "Please select your state of residence / operation"
                    }
                    value={state}
                    onChange={stateHandleChange}
                  />
                  <FormErrorMessage>
                    Please enter a valid state name
                  </FormErrorMessage>
                </FormControl>
                {/* <FormControl isInvalid={isErrorState}>
                  <FormLabel color={"darkGray"}>
                    State
                    <Box as="span" color={"red"}>
                      *
                    </Box>
                  </FormLabel>
                  <Select placeholder='Select option'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                    onChange={stateHandleChange}
                    value={state}                  
                  </Select> 
                  <FormErrorMessage>State is required.</FormErrorMessage>
                </FormControl> */}
              </VStack>
            </Box>
            <Box
              flex={1}
              borderWidth={1}
              borderStyle={"solid"}
              borderColor={"rgba(0, 0, 0, 0.08)"}
              bgColor={"veryLightPurple"}
              p={[3, null, 4, null, 5]}
              borderRadius={"md"}
              h={"100%"}
            >
              <Text
                fontWeight={"bold"}
                size={"md"}
                color={"blackOpac"}
                mb={[3]}
              >
                Amount Pay
              </Text>
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={[3, null, 4, null, 5]}
                my={[3, null, 4, null, 5]}
              >
                <Text fontWeight={"bold"} size={"md"} color={"black"}>
                  Plan Amount
                </Text>
                <Text fontWeight={"bold"} size={"md"} color={"black"}>
                  ₹2,999
                </Text>
              </Flex>
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={[3, null, 4, null, 5]}
                my={[3, null, 4, null, 5]}
              >
                <Text fontWeight={"semibold"} size={"xs"} color={"blackOpac"}>
                  Discount
                </Text>
                <Text fontWeight={"semibold"} size={"xs"} color={"black"}>
                  ₹2500
                </Text>
              </Flex>
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={[3, null, 4, null, 5]}
                my={[3, null, 4, null, 5]}
              >
                <Text fontWeight={"semibold"} size={"xs"} color={"blackOpac"}>
                  Goods and Services Tax @ 18%
                </Text>
                <Text fontWeight={"semibold"} size={"xs"} color={"black"}>
                  ₹89.82
                </Text>
              </Flex>
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={[3, null, 4, null, 5]}
                my={[3, null, 4, null, 5]}
              >
                <Text fontWeight={"bold"} size={"md"} color={"black"}>
                  Total
                </Text>
                <Text fontWeight={"bold"} size={"md"} color={"black"}>
                  ₹588.82
                </Text>
              </Flex>
              <Text size={"xs"} color={"blacOpac"} my={[3, null, 4, null, 5]}>
                Service Providers GSTIN:{" "}
                <Box as="span" fontWeight={"bold"} color={"black"}>
                  24AAPCM2255H1ZE
                </Box>
              </Text>
              <FormControl
                isInvalid={isTncUnchecked}
                my={[3, null, 4, null, 5]}
              >
                <Checkbox
                  checked={tnc}
                  onChange={tncHandleChange}
                  borderColor={"black"}
                  color={"blackOpac"}
                  alignItems={"flex-start"}
                  colorScheme={"facebook"}
                >
                  I accept Taxnodes{" "}
                  <Link
                    href="/termsOfUse.pdf"
                    target={"_blank"}
                    color={"themeBlue"}
                    mx={1}
                  >
                    Terms of use
                  </Link>
                  ,{" "}
                  <Link
                    href="/privacyPolicy.pdf"
                    color={"themeBlue"}
                    target={"_blank"}
                    mx={1}
                  >
                    Privacy Policy
                  </Link>
                </Checkbox>
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <Button
                variant={"gradient"}
                w={"100%"}
                onClick={() => apiTxreqtopayuCall()}
              >
                {isLoading ? (
                  <CircularProgress isIndeterminate size="24px" color="teal" />
                ) : (
                  "Proceed to Payment "
                )}
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default OrderSummary;
