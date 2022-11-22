import NextImage from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Box, Heading, Text, Button, Container, Grid } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
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
          freeMode={true}
          centerInsufficientSlides={true}
          spaceBetween={24}
          breakpoints={{
            480: {
              slidesPerView: 2.4,
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
                src={"/team-bro.png"}
                alt={""}
                width={"100%"}
                height={"100%"}
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
                src={"/team-bro.png"}
                alt={""}
                width={"100%"}
                height={"100%"}
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
                src={"/team-bro.png"}
                alt={""}
                width={"100%"}
                height={"100%"}
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
                src={"/team-bro.png"}
                alt={""}
                width={"100%"}
                height={"100%"}
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
                src={"/team-bro.png"}
                alt={""}
                width={"100%"}
                height={"100%"}
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
                src={"/team-bro.png"}
                alt={""}
                width={"100%"}
                height={"100%"}
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
                src={"/team-bro.png"}
                alt={""}
                width={"100%"}
                height={"100%"}
              />
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default SupportExchanges;
