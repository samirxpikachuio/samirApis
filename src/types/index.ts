// samirapi/types/index.ts

import { RequestOptions, RequestParams } from '../core/http/types';

export { RequestOptions, RequestParams };

export interface SamirApi {
    fetchJson: (endpoint: string, params: any, isPathParam?: boolean, method?: 'GET' | 'POST', data?: any) => Promise<any>;
    fetchBinary: (endpoint: string, params: any, isPathParam?: boolean, method?: 'GET' | 'POST', data?: any) => Promise<Buffer>;
    palm: (a: string) => Promise<any>;
    liner: (a: string) => Promise<any>;
    gpt: (a: string) => Promise<any>;
    llama3: (prompt: string, system_prompt?: string) => Promise<any>;
    mixtral142B: (prompt: string, system_prompt?: string) => Promise<any>;
    bing: (params: { message: string, mode: string, uid: string }) => Promise<any>;
    gemini: (text: string, uid?: string) => Promise<any>;
    stoicai: (a: string) => Promise<any>;
    stoicgpt: (a: string) => Promise<any>;
    generatePrompt: (text: string) => Promise<any>;

    artify: (url: string) => Promise<Buffer>;
    togta: (url: string) => Promise<Buffer>;
    imagine: (prompt: string) => Promise<Buffer>;
    animagine: (prompt: string, resolution: string, model: string, qualitytag?: string) => Promise<Buffer>;
    niji: (prompt: string, resolution: string) => Promise<Buffer>;
    mageDef: (prompt: string) => Promise<Buffer>;
    flux: (prompt: string) => Promise<Buffer>;
    marjia: (prompt: string) => Promise<Buffer>;
    tozombie: (url: string) => Promise<Buffer>;
    remBackground: (url: string) => Promise<Buffer>;


    tiktok: (a: string) => Promise<any>;
    facebook: (a: string) => Promise<any>;
    spotifydl: (a: string) => Promise<any>;
    Twitter: (a: string) => Promise<any>;
    Instagram: (a: string) => Promise<any>;
    pet: (url: string) => Promise<Buffer>;

    html2image: (a: string) => Promise<Buffer>;

    countries: () => Promise<any>;
    numbers: (country: string) => Promise<any>;
    messages: (number: string) => Promise<any>;

    anilistUser: (username: string) => Promise<any>;
    view: (username: string) => Promise<any>;
    animeDetails: (title: string) => Promise<any>;
    animeTop: (category: string) => Promise<any>;

    uploadToTelegraph: (url: string, senderId: string) => Promise<any>;
    shortenUrl: (url: string) => Promise<any>;

    pastebin: (text: string) => Promise<any>;
    paste: (text: string) => Promise<any>;
    hastebin: (text: string) => Promise<any>;
    nekobin: (code: string) => Promise<any>;

    generateAvatar: (name: string, id: string, subname?: string, color?: string) => Promise<Buffer>;
    searchPinterest: (query: string, number?: number) => Promise<any>;
    getLyrics: (query: string) => Promise<any>;

    getTempMail: () => Promise<any>;
    getInbox: (email: string) => Promise<any>;

    obfuscate: (query: string) => Promise<any>;

    getWeather: (city: string) => Promise<any>;

    news: () => Promise<any>;

    generateQRCode: (text: string) => Promise<any>;
    readQRCode: (url: string) => Promise<any>;
    detectHumanAI: (inputText: string) => Promise<any>;
    emojimix: (emoji1: string, emoji2: string) => Promise<any>;
    spotifySearch: (query: string) => Promise<any>;
    googleImageSearch: (query: string) => Promise<any>;
    unsplashSearch: (query: string) => Promise<any>;
    tiktokSearch: (query: string) => Promise<any>;
    npmInfo: (pkg: string) => Promise<any>;
    playstoreSearch: (query: string) => Promise<any>;
    stackOverflowSearch: (query: string) => Promise<any>;
    stackOverflowQuestion: (find: string) => Promise<any>;
    pypiSearch: (query: string) => Promise<any>;
    note: (text: string) => Promise<Buffer>;


    malAnimeSearch: (query: string) => Promise<any>;
    malMangaSearch: (query: string) => Promise<any>;
    malTopAiring: () => Promise<any>;
    malUpcoming: (type?: string) => Promise<any>;

    dictionary: (word: string) => Promise<any>;

    measure: (imageUrl: string) => Promise<any>;

    stylize: (text: string) => Promise<any>;
    mobileLegendsHero: (query: string) => Promise<any>;
    detectLanguage: (text: string) => Promise<any>;
    hentai: () => Promise<any>;

    phonelink: (search: string) => Promise<any>;
    phoneinfo: (url: string) => Promise<any>;

    tikstalk: (username: string) => Promise<any>;
    tweetStalk: (username: string) => Promise<any>;

    convert: (amount: number, from: string, to: string) => Promise<any>;
    ipdetect: () => Promise<any>;
    iplookup: () => Promise<any>;

    ytTranscript: (url: string) => Promise<any>;
    transcribe: (url: string) => Promise<any>;
    vocalRev: (url: string) => Promise<any>;

    waifuTTS: (text: string, number: number) => Promise<any>;
    waifuVoicelist: () => Promise<any>;

    clips: (text: string) => Promise<any>;

    ngl: (username: string, message: string) => Promise<any>;

    snippetLanguages: () => Promise<any>;
    snippetThemes: () => Promise<any>;
    snippet: (code: string, theme: string, language: string, lineNumbers: boolean, scale: number, backgroundColor: string, backgroundImage: string, showBackground: boolean) => Promise<Buffer>;
}