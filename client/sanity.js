import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SANITY_SECRTKEY } from "@env";

const client = sanityClient({
  projectId: SANITY_SECRTKEY,
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
export default client;

// ADD http://localhost:3000 to whitelist on sanity client
