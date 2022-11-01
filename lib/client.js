import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "m02r2umv",
  useCdn: true,
  dataset: "production",
  token: process.env.PUBLIC_NEXT_SANITY_TOKEN,
  apiVersion: "2022-09-30",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
