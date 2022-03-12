import Client from "shopify-buy";

const client = Client.buildClient({
  domain: process.env.REACT_APP_DOMAIN!,
  storefrontAccessToken: process.env.REACT_APP_TOKEN!,
});

export default client;
