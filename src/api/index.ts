// samirapi/api/index.ts

import { makeRequest, makeImageRequest, replacePathParam } from '../core';
import { SamirApi } from '../types';
import * as services from './services';


const samirapi: SamirApi = {
    fetchJson: (endpoint, params, isPathParam = false, method = 'GET', data = null) => {
        if (isPathParam) {
            endpoint = replacePathParam(endpoint, params);
            params = {};
        }
        return makeRequest(endpoint, method === 'GET' ? params : data, method);
    },
    fetchBinary: (endpoint, params, isPathParam = false, method = 'GET', data = null) => {
         if (isPathParam) {
            endpoint = replacePathParam(endpoint, params);
            params = {};
        }
        return makeImageRequest(endpoint, params);
    },
    ...services.imageService,
    ...services.textService,
    ...services.socialService,
    ...services.animeService,
    ...services.utilityService,
    ...services.searchService,
    ...services.aiService,
    ...services.voiceService,
    ...services.miscService,
    ...services.snippetService
}

export default samirapi;