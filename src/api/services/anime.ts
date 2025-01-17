// samirapi/api/services/anime.ts
import { makeRequest } from '../../core';
/**
 * Contains all functions related to anime
 */
export const animeService = {
      /**
     * Get details of a specific anilist user
     */
    anilistUser: (username: string) => makeRequest(`anilist/user/${encodeURIComponent(username)}`),
    /**
     * View anilist user
     */
    view: (username: string) => makeRequest(`view/${encodeURIComponent(username)}`),
     /**
     * Get details of specific anime
     */
    animeDetails: (title: string) => makeRequest(`anime/details/${encodeURIComponent(title)}`),
    /**
     * Get top anime based on the specific category
     */
    animeTop: (category: string) => makeRequest(`anime/top/${encodeURIComponent(category)}`),
    /**
     * Search for anime on mal
     */
    malAnimeSearch: (query: string) => makeRequest(`mal/search/anime`, { q: query }),
    /**
     * Search for manga on mal
     */
    malMangaSearch: (query: string) => makeRequest(`mal/search/manga`, { q: query }),
      /**
     * Get top airing animes from mal
     */
    malTopAiring: () => makeRequest('mal/top/airing'),
     /**
     * Get upcoming animes from mal
     */
    malUpcoming: (type?: string) => makeRequest('mal/upcoming', { type }),
}