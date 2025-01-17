// samirapi/api/services/search.ts
import { makeRequest } from '../../core';
/**
 * Contains all search related functions
 */
export const searchService = {
    /**
     * Searches pinterest
     */
    searchPinterest: (query: string, number: number = 6) => makeRequest("pinterest", { query, number }),
     /**
     * Get lyrics of a song
     */
    getLyrics: (query: string) => makeRequest("lyrics", { query }),
    /**
     * Searches spotify
     */
    spotifySearch: (query: string) => makeRequest("spotifysearch", { q: query }),
    /**
     * Searches google for images
     */
    googleImageSearch: (query: string) => makeRequest("google/imagesearch", { q: query }),
    /**
     * Searches unsplash
     */
    unsplashSearch: (query: string) => makeRequest("unsplash", { q: query }),
    /**
     * Searches tiktok
     */
    tiktokSearch: (query: string) => makeRequest(`tiktok/search/${encodeURIComponent(query)}`),
     /**
     * Get information about a npm package
     */
    npmInfo: (pkg: string) => makeRequest(`npm-info/${encodeURIComponent(pkg)}`),
      /**
     * Searches playstore
     */
    playstoreSearch: (query: string) => makeRequest(`playstore/search/${encodeURIComponent(query)}`),
    /**
     * Searches stackoverflow
     */
    stackOverflowSearch: (query: string) => makeRequest(`stackoverflow/search`, { q: query }),
     /**
     * Get a stackoverflow question
     */
    stackOverflowQuestion: (find: string) => makeRequest(`stackoverflow/question`, { find }),
    /**
     * Search pypi
     */
    pypiSearch: (query: string) => makeRequest(`pypi/search`, { q: query }),
}