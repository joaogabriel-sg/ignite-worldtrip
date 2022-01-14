import { Flex, Heading, Text } from "@chakra-ui/react";
import SwiperCore, { A11y, Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([A11y, Autoplay, Navigation, Pagination]);

type Continent = {
  id: string;
  name: string;
  excerpt: string;
  image: string;
};

export type ContinentsSliderProps = {
  continents: Continent[];
};

export function ContinentsSlider({ continents }: ContinentsSliderProps) {
  return (
    <Flex w="100%" maxW={1160} h="450px" mx="auto" mb="10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 5000 }}
        navigation
        pagination={{ clickable: true }}
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <Flex
              w="100%"
              h="100%"
              bgImage={`url('${continent.image}')`}
              bgRepeat="no-repeat"
              bgPosition="center"
              bgSize="cover"
            >
              <Flex
                w="100%"
                h="100%"
                bg="rgba(28, 20, 1, 0.35)"
                direction="column"
                align="center"
                justify="center"
              >
                <Heading as="h3" color="gray.100">
                  {continent.name}
                </Heading>
                <Text mt="4" color="gray.300">
                  {continent.excerpt}
                </Text>
              </Flex>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
