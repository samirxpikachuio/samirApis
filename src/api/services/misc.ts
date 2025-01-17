// samirapi/api/services/misc.ts
import { makeRequest } from '../../core';

export const miscService = {
    clips: (text: string) => makeRequest('clips', { text }),
    ngl: (username: string, message: string) => makeRequest('ngl', { username, message }),
     mobileLegendsHero: (query: string) => makeRequest(`mobile-legends/hero/${encodeURIComponent(query)}`),
}