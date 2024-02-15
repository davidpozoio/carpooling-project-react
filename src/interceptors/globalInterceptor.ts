import axios from "axios";

axios.interceptors.request.use((config) => {
  config.withCredentials = true;

  return config;
});

axios.interceptors.response.use((config) => {
  if (config.status >= 300) {
    throw new Error(config.statusText);
  }

  return config;
});

export default axios;
