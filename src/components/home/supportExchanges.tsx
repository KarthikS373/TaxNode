import React, { useEffect, useRef, useState } from "react";
import { Box, Heading, Container } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import Image from "next/image";

const SupportExchanges = () => {
  const swiperRef = useRef<SwiperCore>();
  const [slides, setSlides] = useState([]) as any;

  useEffect(() => {
    setSlides(swiperRef.current?.slides);
  }, [swiperRef]);
  return (
    <Box my={[10, 12, 14, 16, 20]}>
      <Container maxW={"7xl"}>
        <Heading
          as={"h2"}
          size={"lg"}
          fontWeight={"semibold"}
          textAlign={"center"}
          mb={[6, 7, 8, 9, 10]}
        >
          Supported exchanges
        </Heading>
        <Swiper
          style={{
            paddingLeft: 16,
            paddingRight: 8,
            paddingTop: 16,
            paddingBottom: 16,
          }}
          onSwiper={(swiper: SwiperCore) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={24}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide>
            <Box
              boxShadow={"0px 0px 12px 4px rgba(0, 0, 0, 0.05)"}
              borderRadius={["lg", null, "xl", null, "2xl"]}
              w={"11.6rem"}
              h={"10.5rem"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              p={2}
            >
              <Image
                src={"/logos/binance.png"}
                alt={""}
                width={120}
                height={69}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              boxShadow={"0px 0px 12px 4px rgba(0, 0, 0, 0.05)"}
              borderRadius={["lg", null, "xl", null, "2xl"]}
              w={"11.6rem"}
              h={"10.5rem"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              p={2}
            >
              <Image
                src={"/logos/zebpay.png"}
                alt={""}
                width={120}
                height={27}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              boxShadow={"0px 0px 12px 4px rgba(0, 0, 0, 0.05)"}
              borderRadius={["lg", null, "xl", null, "2xl"]}
              w={"11.6rem"}
              h={"10.5rem"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              p={2}
            >
              <Image
                src={"/logos/coindcx.png"}
                alt={""}
                width={120}
                height={24}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              boxShadow={"0px 0px 12px 4px rgba(0, 0, 0, 0.05)"}
              borderRadius={["lg", null, "xl", null, "2xl"]}
              w={"11.6rem"}
              h={"10.5rem"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              p={2}
            >
              <Image
                src={"/logos/coinswitch.png"}
                alt={""}
                width={120}
                height={36}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              boxShadow={"0px 0px 12px 4px rgba(0, 0, 0, 0.05)"}
              borderRadius={["lg", null, "xl", null, "2xl"]}
              w={"11.6rem"}
              h={"10.5rem"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              p={2}
            >
              <Image
                src={"/logos/wazirx.png"}
                alt={""}
                width={120}
                height={30}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              boxShadow={"0px 0px 12px 4px rgba(0, 0, 0, 0.05)"}
              borderRadius={["lg", null, "xl", null, "2xl"]}
              w={"11.6rem"}
              h={"10.5rem"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              p={2}
            >
              <Image
                src={"/logos/bitdn.png"}
                alt={""}
                width={120}
                height={36}
              />
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default SupportExchanges;
