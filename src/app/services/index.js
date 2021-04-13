import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

export const fetchBackend = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

const url = process.env.REACT_APP_API_URL;
const refreshAuthLogic = (failedRequest) =>
  axios({
    url: `${url}/auth/refreshToken`,
    method: "POST",
    withCredentials: true,
  }).then((tokenRefreshResponse) => {
    return Promise.resolve();
  });
createAuthRefreshInterceptor(fetchBackend, refreshAuthLogic);
