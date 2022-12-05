import React, { useEffect, useRef, useState } from "react";
import { Box, Text, Container, Flex, IconButton } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import Image from "next/image";

const Slider = () => {
  const swiperRef = useRef<SwiperCore>();
  const [slides, setSlides] = useState([]) as any;

  useEffect(() => {
    setSlides(swiperRef.current?.slides);
  }, [swiperRef]);
  return (
    <Box
      py={[10, 12, 14, 16, 20]}
      bg={
        "linear-gradient(180deg, rgba(130, 0, 255, 0.12) 0%, rgba(130, 0, 255, 0) 100%)"
      }
    >
      <Container maxW={"fit-content"}>
        <Flex
          gap={[0, 1, 12, 16, 20]}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <IconButton
            aria-label={""}
            variant={"unstyled"}
            onClick={() => swiperRef.current?.slidePrev()}
            minW={"unset"}
            ml={[-2, 0]}
            mr={[2, 0]}
            _focus={{
              outline:'none'
            }}
            _focusWithin={{
              outline:'none'
            }}
          >
            <Image src={"/leftArrow.svg"} alt={""} width={16} height={32} />
          </IconButton>
          <Swiper
            style={{
              maxWidth: 800,
            }}
            onSwiper={(swiper: SwiperCore) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={24}
          >
            <SwiperSlide>
              <Flex
                borderRadius={["lg", null, "xl", null, "2xl"]}
                flexDir={{ base: "column", sm: "row" }}
                alignItems={'center'}
                textAlign={{base:'center',sm:'left'}}
                justifyContent={"center"}
                p={[6, 7, 8, 9, 10]}
                bg={"white"}
                gap={[10, 12, 14, 16, 20]}
              >
                <Image
                  src={"/sliders/robust.png"}
                  alt={""}
                  width={144}
                  height={136}
                />
                <Box>
                  <Text size={"lg"} fontWeight={"semibold"}>
                    Robust Tax Reconciliation Engine
                  </Text>
                  <Text
                    size={"xs"}
                    fontWeight={"normal"}
                    mt={[3, null, 4, null, 5]}
                  >
                    Our expertly engineered tax reconciliation engine
                    effortlessly imports and processes complex digital asset
                    transaction data including purchase & sale of crypto,
                    airdrops, mining, staking and even airdrops.
                  </Text>
                </Box>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                borderRadius={["lg", null, "xl", null, "2xl"]}
                flexDir={{ base: "column", sm: "row" }}
                alignItems={'center'}
                textAlign={{base:'center',sm:'left'}}
                justifyContent={"center"}
                p={[6, 7, 8, 9, 10]}
                bg={"white"}
                gap={[10, 12, 14, 16, 20]}
              >
                <Image
                  src={"/sliders/compliance.png"}
                  alt={""}
                  width={144}
                  height={136}
                />
                <Box>
                  <Text size={"lg"} fontWeight={"semibold"}>
                    100% India Tax Compliant Reports
                  </Text>
                  <Text
                    size={"xs"}
                    fontWeight={"normal"}
                    mt={[3, null, 4, null, 5]}
                  >
                    Built by a highly experienced team of chartered accountants
                    and tax professionals with regular process audits to ensure
                    maximum accuracy and compliance with India’s latest tax
                    laws.
                  </Text>
                </Box>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                borderRadius={["lg", null, "xl", null, "2xl"]}
                flexDir={{ base: "column", sm: "row" }}
                alignItems={'center'}
                textAlign={{base:'center',sm:'left'}}
                justifyContent={"center"}
                p={[6, 7, 8, 9, 10]}
                bg={"white"}
                gap={[10, 12, 14, 16, 20]}
              >
                <Image
                  src={"/sliders/protocols.png"}
                  alt={""}
                  width={144}
                  height={136}
                />
                <Box>
                  <Text size={"lg"} fontWeight={"semibold"}>
                    State-of-the-art Security Protocols
                  </Text>
                  <Text
                    size={"xs"}
                    fontWeight={"normal"}
                    mt={[3, null, 4, null, 5]}
                  >
                    Your data and privacy remains secure round-the-clock with
                    stringent, industry-leading security protocols and built-in
                    failsafes for multi-layer protection.
                  </Text>
                </Box>
              </Flex>
            </SwiperSlide>
          </Swiper>
          <IconButton
            aria-label={""}
            variant={"unstyled"}
            onClick={() => swiperRef.current?.slideNext()}
            minW={"unset"}
            mr={[-2, 0]}
            ml={[2, 0]}
            _focus={{
              outline:'none'
            }}
            _focusWithin={{
              outline:'none'
            }}
          >
            <Image src={"/rightArrow.svg"} alt={""} width={16} height={32} />
          </IconButton>
        </Flex>
      </Container>
    </Box>
  );
};

export default Slider;
