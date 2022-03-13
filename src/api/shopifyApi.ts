import axios from "axios";

const client = axios.create({
  baseURL: "https://shopfy-express.herokuapp.com",
});

export default client;
