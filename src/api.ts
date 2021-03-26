import axios, {
  AxiosInstance,
  AxiosPromise,
  CancelTokenSource,
  AxiosError,
  AxiosRequestConfig,
  Method,
} from "axios";

interface Header {
  key: string;
  value: string;
}

class Api {
  private axios: AxiosInstance;
  private headers: Header[];
  private cancelableTokens: CancelTokenSource[];

  constructor() {
    this.axios = axios.create();
    this.headers = [];
    this.cancelableTokens = [];

    this.axios.interceptors.request.use(
      (config) => {
        if (this.headers.length) {
          for (let x = 0; x < this.headers.length; x++) {
            config.headers[this.headers[x].key] = this.headers[x].value;
          }
        }
        config.cancelToken = this.cancelableToken();
        return config;
      },
      (error) => Promise.reject(error)
    );
    this.axios.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (
          error.code === "ECONNABORTED" ||
          error.message === "Network Error"
        ) {
          error.message = "Não foi possível conectar com o servidor.";
        }

        return Promise.reject(error);
      }
    );
  }

  /**
   * Set BaseURL
   *
   * @param baseURL
   */
  public setBaseURL(baseURL: string) {
    this.axios.defaults.baseURL = baseURL;
  }

  /**
   * Configure Axios
   *
   * @param config
   */
  public configure(config: AxiosRequestConfig) {
    this.axios.defaults = {
      ...this.axios.defaults,
      ...config,
    };
  }

  /**
   * Axios Interceptors
   *
   * @param interceptors
   */
  public get interceptors() {
    return this.axios.interceptors;
  }

  /**
   * Subscribe header
   *
   * @param key
   * @param value
   */
  public subscribeHeader(key: any, value: any): void {
    this.headers.push({ key, value });
  }

  /**
   * Unsubscribe header
   *
   * @param key
   */
  public unsubscribeHeader(key: string): void {
    this.headers = this.headers.filter((header: any) => header.key !== key);
  }

  /**
   * Check if subscribed header
   *
   * @param key
   */
  public checkSubscribedHeader(key: string): boolean {
    return this.headers.findIndex((header: any) => header.key === key) !== -1;
  }

  /**
   * Get
   *
   * @param url
   * @param data
   * @param config
   */
  public get<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.fetch<T>("get", url, data, config);
  }

  /**
   * Post
   *
   * @param url
   * @param data
   * @param config
   */
  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.fetch<T>("post", url, data, config);
  }

  /**
   * Put
   *
   * @param url
   * @param data
   * @param config
   */
  public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.fetch<T>("put", url, data, config);
  }

  /**
   * Delete
   *
   * @param url
   * @param data
   * @param config
   */
  public delete<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.fetch<T>("delete", url, data, config);
  }

  /**
   * Patch
   *
   * @param url
   * @param data
   * @param config
   */
  public patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.fetch<T>("patch", url, data, config);
  }

  /**
   * Cancel all requests
   */
  public cancelAllRequests() {
    for (let i = 0; i < this.cancelableTokens.length; i++) {
      this.cancelableTokens[i].cancel();
    }
    this.cancelableTokens = [];
  }

  /**
   * Create a cancelable token
   */
  private cancelableToken() {
    const i = this.cancelableTokens.push(axios.CancelToken.source());
    return this.cancelableTokens[i - 1].token;
  }

  /**
   * Fetch
   *
   * @param method
   * @param url
   * @param data
   * @param config
   */
  private fetch<T>(
    method: Method,
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    if (!config) config = {};

    const p = ["put", "post", "patch"].indexOf(method) !== -1;

    return this.axios({
      url,
      method,
      [p ? `data` : `params`]: data,
      ...config,
    });
  }
}

export default new Api();
