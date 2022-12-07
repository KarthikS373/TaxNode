import { Box, Text, Flex, Button, Link } from "@chakra-ui/react";
import Image from "next/image";

const BuyNow = () => (
  <Box
    borderWidth={1}
    borderStyle={"solid"}
    borderColor={"rgba(0, 0, 0, 0.1)"}
    p={[6, 7, 8, 9, 10]}
    borderRadius={"lg"}
    maxW={"fit-content"}
    display={"flex"}
    flexDir={"column"}
    alignItems={"center"}
    justifyContent={"center"}
  >
    <Text
      size={"xs"}
      color={"black"}
      display={"flex"}
      flexDir={{ base: "column", sm: "row" }}
      alignItems={"center"}
      mb={[6, 7, 8, 9, 10]}
    >
      An early-bird offer for{" "}
      <Box as="span" mx={2}>
        {" "}
        <Image src={"/zebpay.svg"} alt={""} width={80} height={18} />
      </Box>
      employees
    </Text>
    <Flex gap={[3, null, 4, null, 5]} alignItems={"flex-end"} w={"fit-content"}>
      <Box>
        <Text
          size={"md"}
          fontWeight={"medium"}
          textDecor={"line-through"}
          color={"blackOpac"}
        >
          ₹2,999
        </Text>
        <Text
          fontWeight={"semibold"}
          size={"3xl"}
          color={"black"}
          lineHeight={"normal"}
          mb={{ base: -2, sm: -3, xl: -4 }}
        >
          ₹499
        </Text>
      </Box>
      <Link href="/orderSummary">
        <Button variant={"gradient"}>Buy Now</Button>
      </Link>
    </Flex>
    {/* <VStack
      bgColor={"white"}
      borderRadius={"md"}
      borderWidth={1}
      borderStyle={"solid"}
      borderColor={"rgba(0, 0, 0, 0.08)"}
      px={[3, null, 4, null, 5]}
      py={[4, 5, 6, 7, 8]}
      spacing={5}
      color={"black"}
    >
      <Text fontWeight={"semibold"} size={"2xl"}>
        ₹2,999
      </Text>
      <Button variant={"gradient"} w={"100%"} onClick={onOpen}>
        Buy Now
      </Button>
    </VStack> */}
  </Box>
);

export default BuyNow;
