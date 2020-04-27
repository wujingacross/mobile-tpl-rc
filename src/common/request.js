import axios from 'axios';
import { Toast } from 'antd-mobile';
import { apiUrl } from '@/common/config';

const request = options => {
  const {
    url, //请求地址
    method = 'get', //请求方式
    data, //数据体
    origin = apiUrl
  } = options;

  const defaultConfig = {
    headers: {
      'content-type': 'application/json',
      Authorization: `${localStorage.getItem('Authorization')}`
    }
  };

  axios.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      const { status } = (error && error.response) || {};
      // error.response is undefined in case of POST and 401 response
      // only get a Network Error
      switch (status) {
        case 401:
          // todos 处理认证失效，http401的情况
          break;
        default:
          break;
      }
      return Promise.reject(error);
    }
  );

  return new Promise(resolve =>
    axios({
      method,
      url: `${origin}${url}`,
      data,
      ...defaultConfig,
      timeout: 10 * 1000, // 单位ms, 10s接口超时
      // withCredentials: true, // 解决认证超时情况下, 前端获取不到的http的401状态码问题
      crossDomain: true
    })
      .then((res = {}) => {
        const { code, data, msg } = (res && res.data) || {};
        switch (code) {
          case 0:
            resolve({ code, data });
            break;
          default:
            Toast.fail(msg, 1.5);
            break;
        }
      })
      .catch(err => {
        const errMsg = err.message;
        Toast.fail(errMsg, 1.5);
      })
  );
};

export default request;
