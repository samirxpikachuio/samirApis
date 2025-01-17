// samirapi/core/http/types.ts


//** nothing speacial .-.*/
export interface RequestOptions {
    method: 'GET' | 'POST';
    headers: {
      'Content-Type': 'application/json';
    };
  }
  //** nothing speacial .-.*/
  export interface RequestParams {
    [key: string]: any;
  }
  