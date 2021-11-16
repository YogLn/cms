import localCache from '@/utils/cache'
import Request from './request'
import { BASE_URL, TIMEOUT } from './request/config'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config: any) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatcher: (err) => err,
    responseInterceptor: (res) => res,
    responseInterceptorCatcher: (err) => err
  }
})

export default request
