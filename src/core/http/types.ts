// samirapi/core/http/types.ts

export interface RequestOptions {
    method: 'GET' | 'POST';
    headers: {
      'Content-Type': 'application/json';
    };
  }
  
  export interface RequestParams {
    [key: string]: any;
  }
  