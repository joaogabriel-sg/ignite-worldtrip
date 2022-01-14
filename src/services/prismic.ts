import * as prismic from "@prismicio/client";

export const prismicClient = prismic.createClient(process.env.PRISMIC_ENDPOINT);
