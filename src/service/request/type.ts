import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatcher?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatcher?: (error: any) => any
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
  showLoading?: boolean
}
