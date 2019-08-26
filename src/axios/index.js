/**
 * 
 * 默认接口请求配置
 */
import axios from 'axios'
import router from '@/router'
const API_BASE = ""  // https://api.api.com

/**
 * 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = (code) => {
  console.log(code);
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
}

/**
 * 
 * 请求失败后的错误统一处理
 * @param {Number} status 
 * @param {other} other 
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    case 401:
      // xxx
      break;
    case 403:
      // xxx
      break;
    case 404:
      // xxx
      break;
    default:
    // xxx
  }
}

/**
 * 
 * 请求成功统一处理
 * @param {Number} status 
 * @param {other} other 
 */
const successHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    case -2:
      // xxx
      break;
    case -5:
      // xxx
      break;
    case 404:
      // xxx
      break;
    default:
    // xxx
  }
}

// 创建axios实例
let defaultAxios = axios.create({
  baseURL: API_BASE,
  // timeout: 6000,
  headers: {
    'Content-Type': 'application/json',
  }
})

/**
 * 
 * 添加一个请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
defaultAxios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  const token = sessionStorage.getItem("token");
  token && (config.headers.Authorization = "Bearer " + token);
  return config;
}, error => {
  // 请求错误处理
  return Promise.reject(error);
});

/**
 * 
 * 添加一个响应拦截器
 */
defaultAxios.interceptors.response.use(response => {
  // 响应数据处理
  if (response) {
    // successHandle(response.data.code, response.data.msg)
  }
  return response;
}, error => {
  // 响应错误处理
  const { response } = error;
  if (response) {
    errorHandle(response.status, response.data.message);
    return Promise.reject(response);
  }
});

export default defaultAxios
