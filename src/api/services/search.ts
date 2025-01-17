// samirapi/api/services/search.ts
import { makeRequest } from '../../core';

export const searchService = {
    searchPinterest: (query: string, number: number = 6) => makeRequest("pinterest", { query, number }),
    getLyrics: (query: string) => makeRequest("lyrics", { query }),
    spotifySearch: (query: string) => makeRequest("spotifysearch", { q: query }),
    googleImageSearch: (query: string) => makeRequest("google/imagesearch", { q: query }),
    unsplashSearch: (query: string) => makeRequest("unsplash", { q: query }),
    tiktokSearch: (query: string) => makeRequest(`tiktok/search/${encodeURIComponent(query)}`),
    npmInfo: (pkg: string) => makeRequest(`npm-info/${encodeURIComponent(pkg)}`),
    playstoreSearch: (query: string) => makeRequest(`playstore/search/${encodeURIComponent(query)}`),
    stackOverflowSearch: (query: string) => makeRequest(`stackoverflow/search`, { q: query }),
    stackOverflowQuestion: (find: string) => makeRequest(`stackoverflow/question`, { find }),
    pypiSearch: (query: string) => makeRequest(`pypi/search`, { q: query }),
}