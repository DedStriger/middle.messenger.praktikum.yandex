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
    data: Record<string, string>;
    timeout: number;
    headers?: {value: string, name: string};
  }
  
  export default class HTTPTransport {
    get = (url, options = {} as Options) => {
      const query = queryStringify(options.data);
      return this.request(
        url+query,
        { ...options, method: METHODS.GET },
        options.timeout
      );
    };
  
    put = (url, options = {} as Options) => {
      return this.request(
        url,
        { ...options, method: METHODS.PUT },
        options.timeout
      );
    };
  
    post = (url: string, options = {} as Options) => {
      return this.request(
        url,
        { ...options, method: METHODS.POST },
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
      const { method, data, headers } = options;
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
  
        xhr.open(method, url);
  
        if (headers) {
          xhr.setRequestHeader(headers.name, headers.value);
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
          xhr.send(new URLSearchParams(data));
        }
      });
    };
  }
