import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Box, Flex, Heading } from "@chakra-ui/react";
import * as prismic from "@prismicio/client";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { ContinentsSliderProps } from "../components/ContinentsSlider";

const ContinentsSlider = dynamic<ContinentsSliderProps>(
  () =>
    import("../components/ContinentsSlider").then(
      (mod) => mod.ContinentsSlider
    ),
  { ssr: false }
);

import { prismicClient } from "../services/prismic";

type Continent = {
  id: string;
  name: string;
  excerpt: string;
  image: string;
};

type HomeProps = {
  continents: Continent[];
};

export default function Home({ continents }: HomeProps) {
  return (
    <Flex direction="column">
      <Head>
        <title>worldtrip</title>
      </Head>

      <Header />
      <Banner />
      <TravelTypes />

      <Box bg="gray.700" w="90px" h="2px" mt="20" alignSelf="center" />

      <Heading fontSize="4xl" fontWeight="medium" my="14" align="center">
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <ContinentsSlider continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await prismicClient.get({
    predicates: prismic.predicate.at("document.type", "continents"),
    fetch: [
      "continents.continent",
      "continents.excerpt",
      "continents.carousel_image",
    ],
  });

  const continents = response.results.map((continent) => {
    const carouselImageData = continent.data.carousel_image as { url: string };
    const image = carouselImageData.url;

    return {
      id: continent.uid,
      name: continent.data.continent,
      excerpt: continent.data.excerpt,
      image,
    };
  });

  return {
    props: { continents },
  };
};
