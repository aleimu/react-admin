import { message } from 'antd';
import Axios from 'axios';

// 统一配置
const baseURL = '';
export const service = Axios.create({
  baseURL,
  responseType: 'json',
  timeout: 600000,
});

// 请求拦截
service.interceptors.request.use((res) => {
  // get token from local storage and add it to the header
  res.headers.token = window.localStorage.getItem('token');
  return res;
});

// 拦截响应
service.interceptors.response.use(
  (response) => {
    if (response.code) {
      switch (response.code) {
        case 200:
          return response.data;
        case 401:
          //未登录处理方法
          window.location.href = '/login';
          break;
        case 403:
          //token过期处理方法
          break;
        default:
          message.error(response.data.msg);
      }
    } else {
      return response;
    }
  },
  (err) => {
    message.error(err.message, 5);
    return Promise.reject(err);
  }
);

// 设置返回值和请求值范型
export default function request(req) {
  return service(req).then(
    (res) => {
      return res.data;
    },
    (res) => {
      return Promise.reject(res.data || res);
    }
  );
}
