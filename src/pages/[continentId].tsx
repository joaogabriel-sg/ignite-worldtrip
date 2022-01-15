import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { ContinentBanner } from "../components/ContinentBanner";
import { ContinentInfo } from "../components/ContinentInfo";
import { ContinentTopCities } from "../components/ContinentTopCities";

import { prismicClient } from "../services/prismic";

type Params = {
  continentId: string;
};

type Country = {
  flag_image: {
    url: string;
  };
  thumbnail: {
    url: string;
  };
  name: string;
  city: string;
};

type PrismicDataApiResponse = {
  continent: string;
  description: string;
  number_of_countries: number;
  number_of_languages: number;
  number_of_most_visited_cities: number;
  banner_image: {
    url: string;
  };
  countries: Country[];
};

type ContinentProps = {
  continent: {
    name: string;
    description: string;
    numberOfCountries: number;
    numberOfLanguages: number;
    numberOfTopCities: number;
    banner: string;
    countries: Country[];
  };
};

export default function Continent({ continent }: ContinentProps) {
  return (
    <Flex direction="column">
      <Head>
        <title>worldtrip - {continent.name}</title>
      </Head>

      <Header goBack />

      <ContinentBanner banner={continent.banner} title={continent.name} />

      <ContinentInfo
        description={continent.description}
        numberOfCountries={continent.numberOfCountries}
        numberOfLanguages={continent.numberOfLanguages}
        numberOfTopCities={continent.numberOfTopCities}
      />

      <ContinentTopCities countries={continent.countries} />
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: [],
  };
};

export const getStaticProps: GetStaticProps<ContinentProps> = async ({
  params,
}) => {
  const { continentId } = params as Params;

  const response = await prismicClient.getByUID("continents", continentId);

  const {
    banner_image,
    continent: name,
    countries,
    description,
    number_of_countries,
    number_of_languages,
    number_of_most_visited_cities,
  } = response.data as unknown as PrismicDataApiResponse;

  const continent = {
    name,
    description,
    numberOfCountries: number_of_countries,
    numberOfLanguages: number_of_languages,
    numberOfTopCities: number_of_most_visited_cities,
    banner: banner_image.url,
    countries,
  };

  return {
    props: {
      continent,
    },
  };
};
