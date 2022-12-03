import React from "react";
import { NextSeo } from "next-seo";
import {
  Box,
  Text,
  Container,
  Flex,
  IconButton,
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
} from "@chakra-ui/react";

const OrderSummary = () => {
  return (
    <>
      <NextSeo title="Order Summary" />
      <Container
        maxW={"6xl"}
        pt={[24, 28, 32, 36, 40]}
        pb={[10, 12, 14, 16, 20]}
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
                <FormControl>
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
                  />
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel color={"darkGray"}>
                    Name{" "}
                    <Box as="span" color={"red"}>
                      *
                    </Box>
                  </FormLabel>
                  <Flex flexDir={{ base: "column", sm: "row" }} gap={3}>
                    <Box>
                      <Input
                        borderColor={"themeGray"}
                        size={"md"}
                        placeholder={"First Name"}
                      />
                      <FormErrorMessage>Email is required.</FormErrorMessage>
                    </Box>
                    <Box>
                      <Input
                        borderColor={"themeGray"}
                        size={"md"}
                        placeholder={"Last Name"}
                      />
                      <FormErrorMessage>Email is required.</FormErrorMessage>
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
                  <FormControl>
                    <FormLabel color={"darkGray"}>
                      Contact No
                      <Box as="span" color={"red"}>
                        *
                      </Box>
                    </FormLabel>
                    <Input
                      borderColor={"themeGray"}
                      size={"md"}
                      placeholder={"*** *** ****"}
                    />
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  </FormControl>
                </Flex>
                <FormControl>
                  <FormLabel color={"darkGray"}>
                    State
                    <Box as="span" color={"red"}>
                      *
                    </Box>
                  </FormLabel>
                  <Input
                    type="email"
                    borderColor={"themeGray"}
                    size={"md"}
                    placeholder={
                      "Please select your state of residence / operation"
                    }
                  />
                  <FormErrorMessage>Email is required.</FormErrorMessage>
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
                  Goods and Services Tax @ 18%
                </Text>
                <Text fontWeight={"semibold"} size={"xs"} color={"black"}>
                  ₹539.82
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
                  ₹3538.82
                </Text>
              </Flex>
              <Text size={"xs"} color={"blacOpac"} my={[3, null, 4, null, 5]}>
                Service Provider's GSTIN:{" "}
                <Box as="span" fontWeight={"bold"} color={"black"}>
                  29AAECC3822D1ZY
                </Box>
              </Text>
              <Checkbox
                my={[3, null, 4, null, 5]}
                borderColor={"black"}
                color={"blackOpac"}
                alignItems={"flex-start"}
                colorScheme={"facebook"}
                sx={{
                  "& .chakra-checkbox__label": {
                    ml: [4, 5, 6, 7, 8],
                  },
                }}
              >
                I accept ClearTax{" "}
                <Link href="" target={"_blank"} color={"themeBlue"} mx={1}>
                  Terms of use
                </Link>
                ,{" "}
                <Link href="" color={"themeBlue"} target={"_blank"} mx={1}>
                  Privacy Policy
                </Link>
                and{" "}
                <Link href="" color={"themeBlue"} target={"_blank"} mx={1}>
                  Refund Policy
                </Link>
              </Checkbox>
              <Button variant={"gradient"} w={"100%"}>
                Proceed to Payment
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default OrderSummary;
