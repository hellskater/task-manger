import axios from "axios";

const instance = axios.create({
  baseURL: "https://devza.com/tests/tasks",
  headers: {
    AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a",
  },
});

export default instance;
