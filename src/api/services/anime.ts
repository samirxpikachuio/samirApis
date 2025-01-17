// samirapi/api/services/anime.ts
import { makeRequest } from '../../core';

export const animeService = {
    anilistUser: (username: string) => makeRequest(`anilist/user/${encodeURIComponent(username)}`),
    view: (username: string) => makeRequest(`view/${encodeURIComponent(username)}`),
    animeDetails: (title: string) => makeRequest(`anime/details/${encodeURIComponent(title)}`),
    animeTop: (category: string) => makeRequest(`anime/top/${encodeURIComponent(category)}`),
    malAnimeSearch: (query: string) => makeRequest(`mal/search/anime`, { q: query }),
    malMangaSearch: (query: string) => makeRequest(`mal/search/manga`, { q: query }),
    malTopAiring: () => makeRequest('mal/top/airing'),
    malUpcoming: (type?: string) => makeRequest('mal/upcoming', { type }),
}