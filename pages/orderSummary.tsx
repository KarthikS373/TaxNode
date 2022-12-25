import axios, { AxiosError, AxiosResponse } from "axios";
import * as Yup from "yup";
import "yup-phone";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { NextSeo } from "next-seo";
import { CloseIcon } from "@chakra-ui/icons";
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
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import states from "../lib/statesIndia";

const OrderSummary = () => {
  const [amount, setAmount] = useState<number | null>(null);
  const [discount, setDiscount] = useState<number | null>(null);
  const [coupon, setCoupon] = useState<string | null>(null);
  const [couponDiscount, setCouponDiscount] = useState<number | null>(null);
  const [gst, setGst] = useState<string>("");
  const [total, setTotal] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      state: "",
      termsAndCondition: false,
      coupon: null,
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
          coupon: formik.values.coupon,
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

  const handleApplyCoupon = () => {
    if (formik.values.coupon) {
      formik.setFieldValue("coupon", null);
      setCoupon(null);
      return;
    }

    if (coupon && coupon.trim().length) {
      axios
        .post(
          "/api/verifycoupon",
          {},
          {
            params: {
              coupon: coupon,
            },
          }
        )
        .then((response: AxiosResponse) => {
          if (response.status === 202) {
            throw new Error("Invalid coupon code");
          }

          if (response.status === 200) {
            formik.setFieldValue("coupon", coupon);
            setCouponDiscount(+response.data.data.discount);
            return toast({
              status: "success",
              title: `₹${(Math.round(+response.data.data.discount * 100) / 100)
                .toFixed(2)
                .toString()} Discount applied`,
              duration: 1000,
              isClosable: true,
            });
          } else if (response.data.discount) {
            formik.setFieldValue("coupon", coupon);
            setCouponDiscount(+response.data.data.discount);
          }
        })
        .catch((error: AxiosError) => {
          if (error.message.toString().toLowerCase().includes("invalid")) {
            setCoupon(null);
            return toast({
              status: "error",
              title: "Invalid coupon code",
              duration: 1000,
              isClosable: true,
            });
          }

          return toast({
            status: "error",
            title: "An error occured",
            duration: 1000,
            isClosable: true,
          });
        });
    }
  };

  const calculateTotal = () => {
    let _total: number = 0;
    if (amount && discount) _total = +amount - +discount;
    if (formik.values.coupon && couponDiscount) {
      if (_total >= couponDiscount) _total -= +couponDiscount;
    }

    return _total;
  };

  useEffect(() => {
    axios
      .get("/api/fetchOrderAmountandDiscount")
      .then((response: AxiosResponse) => {
        const { amount: amt, discount: dct } = response.data.data;
        setAmount(amt);
        setDiscount(dct);
      })
      .catch((error: AxiosError) => {
        toast({
          status: "error",
          title: "An error occured",
          duration: 1000,
          isClosable: true,
        });
      });
  }, []);

  useEffect(() => {
    let _total: number = calculateTotal();
    const _gst: number = 0.18 * _total;

    setGst((Math.round(_gst * 100) / 100).toFixed(2).toString());
  }, [amount, couponDiscount, discount, formik.values.coupon]);

  useEffect(() => {
    let _total: number = calculateTotal();

    setTotal((Math.round(_total * 100) / 100).toFixed(2).toString());
  }, [amount, couponDiscount, discount, formik.values.coupon]);

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
                    ₹{amount}
                  </Text>
                </Flex>
                <Flex
                  alignItems={"start"}
                  flexDir={"column"}
                  justifyContent={"space-between"}
                  gap={[3, null, 4, null, 5]}
                  my={[3, null, 4, null, 5]}
                >
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      name="coupon"
                      value={coupon || ""}
                      disabled={formik.values.coupon ? true : false}
                      onChange={(e) => {
                        setCoupon(e.target.value);
                      }}
                      color={formik.values.coupon ? "green" : "inherit"}
                      placeholder="Enter Coupon code"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        variant={"gradient"}
                        mr={10}
                        w={"100%"}
                        h="1.75rem"
                        p="1rem 3rem"
                        size="sm"
                        onClick={handleApplyCoupon}
                      >
                        {formik.values.coupon &&
                        !(formik.touched.coupon && !!formik.errors.coupon)
                          ? "Remove"
                          : "Apply"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={[3, null, 4, null, 5]}
                  my={[2, null, 3, null, 4]}
                >
                  <Text fontWeight={"semibold"} size={"xs"} color={"blackOpac"}>
                    Discount
                  </Text>
                  <Text fontWeight={"semibold"} size={"xs"} color={"black"}>
                    ₹{discount}
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
                    ₹{gst}
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
                    ₹{total}
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
