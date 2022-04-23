import axios  from 'axios';
import Storage from "storage";
import {authenticateThunk} from "../slices/auth";
import {unwrapResult} from "@reduxjs/toolkit";

const Api = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 90000,
});


Api.interceptors.request.use(
  async (config) =>  {
    const response = await Storage.dispatch(authenticateThunk());

    if (response.type === authenticateThunk.fulfilled.type) {
      const result = unwrapResult(response);
      if (result?.accessToken) {
        config.headers['Authorization'] = `Bearer ${result.accessToken}`;
      }
    }

    return config
  },
  (error) => Promise.reject(error),
);

Api.interceptors.response.use(
  (response) => response,
  (error) =>  Promise.reject(error),
);

export default Api;
