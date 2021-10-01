import axios from "axios";

const instance = axios.create({
  baseURL: "",
  headers: {
    AuthToken: "",
  },
});

export default instance;
