import axios, { AxiosError, AxiosResponse } from "axios";
import * as Yup from "yup";
import "yup-phone";
import React, { useState } from "react";
import { useFormik } from "formik";
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
  useToast,
} from "@chakra-ui/react";

import states from "../lib/statesIndia";

const OrderSummary = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      state: "",
      termsAndCondition: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .required()
        .matches(/^[aA-zZ\s]+$/),
      email: Yup.string().trim().email().required(),
      phone: Yup.string().trim().phone().required(),
      state: Yup.string().trim().required(),
      termsAndCondition: Yup.boolean().oneOf([true]),
    }),
    onSubmit: (value) => {
      setIsLoading(true);

      axios
        .post("/api/txreqtopayu", {
          phone: formik.values.phone,
          email: formik.values.email,
          firstname: formik.values.name,
          state: formik.values.state,
        })
        .then((response: AxiosResponse) => {
          window.location.href = response.data.responseUrl;
          if (response.status == 200) {
            toast({
              title: "order placed",
              description: "",
              status: "success",
              duration: 1500,
              isClosable: true,
            });
            formik.resetForm();
          } else if (response.status == 400) {
            throw new Error(response.data.message);
          }
        })
        .catch((error: AxiosError) => {
          console.log(error.message);
          toast({
            title: "An Error occured",
            description: "",
            status: "error",
            duration: 1500,
            isClosable: true,
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
  });

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

          <form onSubmit={formik.handleSubmit} noValidate>
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
                  <FormControl
                    isInvalid={formik.touched.email && !!formik.errors.email}
                  >
                    <FormLabel color={"darkGray"}>
                      Email
                      <Box as="span" color={"red"}>
                        *
                      </Box>
                    </FormLabel>
                    <Input
                      type="email"
                      borderColor={"themeGray"}
                      size={"md"}
                      placeholder={"Enter your email address here"}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      name={"email"}
                    />
                    <FormErrorMessage>
                      Please enter a valid Email ID
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={formik.touched.name && !!formik.errors.name}
                  >
                    <FormLabel color={"darkGray"}>
                      Name
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
                          placeholder={"Name"}
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          name={"name"}
                        />
                        <FormErrorMessage>
                          Please enter a valid name
                        </FormErrorMessage>
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
                        value={"+91"}
                      />
                    </FormControl>
                    <FormControl
                      isInvalid={formik.touched.phone && !!formik.errors.phone}
                    >
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
                        value={formik.values.phone}
                        onChange={(e) => {
                          formik.setFieldValue("phone", e.target.value);
                        }}
                      />
                      <FormErrorMessage>
                        Please enter a valid mobile number
                      </FormErrorMessage>
                    </FormControl>
                  </Flex>

                  {/* <FormControl
                    isInvalid={formik.touched.state && !!formik.errors.state}
                  >
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
                    />
                    <FormErrorMessage>
                      Please enter a valid state name
                    </FormErrorMessage>
                  </FormControl> */}
                  <FormControl
                    isInvalid={formik.touched.state && !!formik.errors.state}
                  >
                    <FormLabel color={"darkGray"}>
                      State
                      <Box as="span" color={"red"}>
                        *
                      </Box>
                    </FormLabel>
                    <Select
                      placeholder="Please select your state of residence / operation"
                      onChange={(e) => {
                        formik.setFieldValue("state", e.target.value);
                      }}
                      value={formik.values.state}
                    >
                      {states.map((state, index) => (
                        <option key={state.id} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>State is required.</FormErrorMessage>
                  </FormControl>
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
                  isInvalid={
                    formik.touched.termsAndCondition &&
                    !!formik.errors.termsAndCondition
                  }
                  my={[3, null, 4, null, 5]}
                >
                  <Checkbox
                    checked={formik.values.termsAndCondition}
                    onChange={(e) => {
                      console.log(e.target.checked);
                      formik.setFieldValue(
                        "termsAndCondition",
                        e.target.checked
                      );
                    }}
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
                  type="submit"
                  onClick={() => {}}
                >
                  {isLoading ? (
                    <CircularProgress
                      isIndeterminate
                      size="24px"
                      color="teal"
                    />
                  ) : (
                    "Proceed to Payment "
                  )}
                </Button>
              </Box>
            </Flex>
          </form>
        </Flex>
      </Container>
    </>
  );
};

export default OrderSummary;
