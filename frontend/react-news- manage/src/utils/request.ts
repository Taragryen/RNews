// import NProgress from "nprogress";
import axios from 'axios';
import { notification } from 'antd';
// import "nprogress/nprogress.css";

const baseURL = import.meta.env.VITE_API_PREFIX as string;

const request = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  // withCredentials: true,
});

const handleError = (error: any) => {
  console.log(error);
  if (error.response) {
    const resp = error.response;

    notification.error({
      message: resp.status || 'Error',
      description:
        resp.data.msg || resp.data || 'There was an unexpected error!',
    });

    // NProgress.done(true)

    // if (resp.status === 401) {
    //   const encodedUrl = encodeURIComponent(window.location.href);
    //   window.location.href = `${process.env.REACT_APP_AUTH_URL}${encodedUrl}`;
    // }
    console.log(resp);
  }

  if (error) {
    notification.error({
      message: '请求出错',
      description: error.toString() || 'There was an unexpected error!',
    });
  }
  return Promise.reject(error);
};

request.interceptors.request.use(config => {
  // NProgress.start()
  // config.withCredentials = true;
  return config;
}, handleError);

request.interceptors.response.use(response => {
  // NProgress.done(true);
  if (response.data.msg && response.data.msg !== 'ok') {
    if (typeof response.data.msg === 'object') {
      handleError(response.data.msg.message);
    } else {
      handleError(response.data.msg);
    }
  }
  return response;
}, handleError);

export default request;
