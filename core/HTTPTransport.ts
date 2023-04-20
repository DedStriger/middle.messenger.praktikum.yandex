enum METHODS  {
    GET = "GET",
    PUT = "PUT",
    POST = "POST",
    DELETE = "DELETE"
  };
  
  function queryStringify(data: Record<string, string>) {
    const searchParams = new URLSearchParams(data);
  
    return `?${decodeURIComponent(searchParams.toString()).replace(/object\+Object/gi, 'object Object')}`;
  }

  type Options = {
    data: Record<string, string | number | string[] | number[]> | FormData;
    isFormData?: boolean;
    timeout?: number;
    headers?: {value: string, name: string}[];
    other?: Omit<RequestInit, 'method'>
  }
  
  export default class HTTPTransport {
    get = (url: string, options = {} as Options) => {
      const query = queryStringify(options.data as Record<string, string>);
      return this.request(
        url+query,
        { ...options, method: METHODS.GET, },
        options.timeout
      );
    };
  
    put = (url: string, options = {} as Options) => {
      return this.request(
        url,
        { ...options, method: METHODS.PUT,},
        options.timeout
      );
    };
  
    post = (url: string, options = {} as Options) => {
      return this.request(
        url,
        { ...options, method: METHODS.POST,},
        options.timeout
      );
    };
  
    delete = (url: string, options = {} as Options) => {
      return this.request(
        url,
        { ...options, method: METHODS.DELETE },
        options.timeout
      );
    };
  
    request = (url: string, options: Options & {method: METHODS}, timeout = 5000) => {
      const { method, data, headers, isFormData } = options;
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
  
        xhr.open(method, url);
        xhr.withCredentials = true;
        !isFormData && xhr.setRequestHeader('Content-Type', 'application/json')
        if (headers) {
          headers.forEach(h => xhr.setRequestHeader(h.name, h.value))
        }
  
        xhr.onload = function () {
          resolve(xhr);
        };
  
        xhr.timeout = timeout;
  
        xhr.onabort = reject;
        xhr.onerror = reject;
        xhr.ontimeout = reject;
  
        if (method === METHODS.GET || !data) {
          xhr.send();
        } else {
          xhr.send(!isFormData ? JSON.stringify(data) : data as FormData);
        }
      });
    };
  }
