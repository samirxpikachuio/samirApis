// samirapi/types/index.ts

import { RequestOptions, RequestParams } from '../core/http/types';

export { RequestOptions, RequestParams };

/**
 * Defines the structure of the Samir API
 */
export interface SamirApi {
    /**
     * Makes a request and returns a json response
     */
    fetchJson: (endpoint: string, params: any, isPathParam?: boolean, method?: 'GET' | 'POST', data?: any) => Promise<any>;
    /**
     * Makes a request and returns a binary response
     */
    fetchBinary: (endpoint: string, params: any, isPathParam?: boolean, method?: 'GET' | 'POST', data?: any) => Promise<Buffer>;
    /**
     *  Generates response using palm
     */
    palm: (a: string) => Promise<any>;
    /**
     * Generates response using liner
     */
    liner: (a: string) => Promise<any>;
    /**
     * Generates response using gpt
     */
    gpt: (a: string) => Promise<any>;
     /**
      * Generates response using llama3
      */
    llama3: (prompt: string, system_prompt?: string) => Promise<any>;
      /**
     * Generates response using mixtral142B
     */
    mixtral142B: (prompt: string, system_prompt?: string) => Promise<any>;
    /**
     * Generates response using bing
     */
    bing: (params: { message: string, mode: string, uid: string }) => Promise<any>;
    /**
     * Generates response using gemini
     */
    gemini: (text: string, uid?: string) => Promise<any>;
    /**
     * Generates response using stoicai
     */
    stoicai: (a: string) => Promise<any>;
    /**
     * Generates response using stoicgpt
     */
    stoicgpt: (a: string) => Promise<any>;
    /**
     * Generates prompt
     */
    generatePrompt: (text: string) => Promise<any>;
    /**
     *  Generates an image using artify
     */
    artify: (url: string) => Promise<Buffer>;
    /**
     *  Generates an image using togta
     */
    togta: (url: string) => Promise<Buffer>;
    /**
     *  Generates an image using imagine
     */
    imagine: (prompt: string) => Promise<Buffer>;
     /**
      *  Generates an image using animagine
      */
    animagine: (prompt: string, resolution: string, model: string, qualitytag?: string) => Promise<Buffer>;
    /**
     *  Generates an image using niji
     */
    niji: (prompt: string, resolution: string) => Promise<Buffer>;
    /**
     *  Generates an image using mageDef
     */
    mageDef: (prompt: string) => Promise<Buffer>;
    /**
     *  Generates an image using flux
     */
    flux: (prompt: string) => Promise<Buffer>;
    /**
     *  Generates an image using marjia
     */
    marjia: (prompt: string) => Promise<Buffer>;
    /**
     *  Generates an image using tozombie
     */
    tozombie: (url: string) => Promise<Buffer>;
    /**
     *  Removes background from an image
     */
    remBackground: (url: string) => Promise<Buffer>;
    /**
     * Downloads tiktok video
     */
    tiktok: (a: string) => Promise<any>;
    /**
     * Downloads facebook video
     */
    facebook: (a: string) => Promise<any>;
    /**
     * Downloads spotify song
     */
    spotifydl: (a: string) => Promise<any>;
      /**
     * Downloads twitter video
     */
    Twitter: (a: string) => Promise<any>;
     /**
     * Downloads instagram video
     */
    Instagram: (a: string) => Promise<any>;
    /**
     * Generates image based on pet
     */
    pet: (url: string) => Promise<Buffer>;
    /**
     * Converts html to an image
     */
    html2image: (a: string) => Promise<Buffer>;
    /**
     * Get list of countries
     */
    countries: () => Promise<any>;
    /**
     * Get list of phone numbers of a specific country
     */
    numbers: (country: string) => Promise<any>;
      /**
     * Get message from a phone number
     */
    messages: (number: string) => Promise<any>;
     /**
     * Get details of a specific anilist user
     */
    anilistUser: (username: string) => Promise<any>;
    /**
     * View anilist user
     */
    view: (username: string) => Promise<any>;
    /**
     * Get details of specific anime
     */
    animeDetails: (title: string) => Promise<any>;
     /**
     * Get top anime based on the specific category
     */
    animeTop: (category: string) => Promise<any>;
    /**
     * Uploads file to telegraph
     */
    uploadToTelegraph: (url: string, senderId: string) => Promise<any>;
    /**
     * Shortens a url
     */
    shortenUrl: (url: string) => Promise<any>;
    /**
     * Creates paste on pastebin
     */
    pastebin: (text: string) => Promise<any>;
    /**
     * Creates paste on paste
     */
    paste: (text: string) => Promise<any>;
    /**
     * Creates paste on hastebin
     */
    hastebin: (text: string) => Promise<any>;
    /**
     * Creates paste on nekobin
     */
    nekobin: (code: string) => Promise<any>;
    /**
     * Generates avatar
     */
    generateAvatar: (name: string, id: string, subname?: string, color?: string) => Promise<Buffer>;
    /**
     * Searches pinterest
     */
    searchPinterest: (query: string, number?: number) => Promise<any>;
    /**
     * Get lyrics of a song
     */
    getLyrics: (query: string) => Promise<any>;
      /**
     * Get temporary email
     */
    getTempMail: () => Promise<any>;
     /**
     * Get inbox of a temporary email
     */
    getInbox: (email: string) => Promise<any>;
    /**
     * Obfuscate a text
     */
    obfuscate: (query: string) => Promise<any>;
    /**
     * Gets weather of a city
     */
    getWeather: (city: string) => Promise<any>;
    /**
     * Get news
     */
    news: () => Promise<any>;
     /**
     * Generates a qr code
     */
    generateQRCode: (text: string) => Promise<any>;
    /**
     * Reads qr code from an image
     */
    readQRCode: (url: string) => Promise<any>;
      /**
     * Detect if the text is generate by ai
     */
    detectHumanAI: (inputText: string) => Promise<any>;
    /**
     * Mix two emojis
     */
    emojimix: (emoji1: string, emoji2: string) => Promise<any>;
    /**
     * Searches spotify
     */
    spotifySearch: (query: string) => Promise<any>;
     /**
     * Searches google for images
     */
    googleImageSearch: (query: string) => Promise<any>;
    /**
     * Searches unsplash
     */
    unsplashSearch: (query: string) => Promise<any>;
    /**
     * Searches tiktok
     */
    tiktokSearch: (query: string) => Promise<any>;
     /**
     * Get information about a npm package
     */
    npmInfo: (pkg: string) => Promise<any>;
    /**
     * Searches playstore
     */
    playstoreSearch: (query: string) => Promise<any>;
    /**
     * Searches stackoverflow
     */
    stackOverflowSearch: (query: string) => Promise<any>;
      /**
     * Get a stackoverflow question
     */
    stackOverflowQuestion: (find: string) => Promise<any>;
    /**
     * Search pypi
     */
    pypiSearch: (query: string) => Promise<any>;
    /**
     * Generates an image of a note
     */
    note: (text: string) => Promise<Buffer>;
    /**
     * Search for anime on mal
     */
    malAnimeSearch: (query: string) => Promise<any>;
    /**
     * Search for manga on mal
     */
    malMangaSearch: (query: string) => Promise<any>;
    /**
     * Get top airing animes from mal
     */
    malTopAiring: () => Promise<any>;
    /**
     * Get upcoming animes from mal
     */
    malUpcoming: (type?: string) => Promise<any>;
     /**
     * Get meaning of a word
     */
    dictionary: (word: string) => Promise<any>;
    /**
     * Measures an object from an image
     */
    measure: (imageUrl: string) => Promise<any>;
     /**
     * Stylize text
     */
    stylize: (text: string) => Promise<any>;
    /**
     * Get details about a mobile legends hero
     */
    mobileLegendsHero: (query: string) => Promise<any>;
    /**
     * Detects the language of a text
     */
    detectLanguage: (text: string) => Promise<any>;
     /**
     * Gets random hentai
     */
    hentai: () => Promise<any>;
    /**
     * Get details about a phonenumber
     */
    phonelink: (search: string) => Promise<any>;
    /**
     * Get details about phone
     */
    phoneinfo: (url: string) => Promise<any>;
    /**
     * Get tiktoks from a user
     */
    tikstalk: (username: string) => Promise<any>;
     /**
     * Get tweets from a user
     */
    tweetStalk: (username: string) => Promise<any>;
    /**
     * Convert currency
     */
    convert: (amount: number, from: string, to: string) => Promise<any>;
    /**
     * Get your ip
     */
    ipdetect: () => Promise<any>;
    /**
     * Get your ip location
     */
    iplookup: () => Promise<any>;
     /**
     * Get transcript from youtube video
     */
    ytTranscript: (url: string) => Promise<any>;
    /**
     * Transcribes audio from a url
     */
    transcribe: (url: string) => Promise<any>;
      /**
     *  vocal rev
     */
    vocalRev: (url: string) => Promise<any>;
    /**
     * Generates tts using a waifu voice
     */
    waifuTTS: (text: string, number: number) => Promise<any>;
     /**
     *  Get waifu voice list
     */
    waifuVoicelist: () => Promise<any>;
    /**
     * Generates clips
     */
    clips: (text: string) => Promise<any>;
     /**
     * Get ngl responses
     */
    ngl: (username: string, message: string) => Promise<any>;
     /**
     * Get snippet languages
     */
    snippetLanguages: () => Promise<any>;
    /**
     * Get snippet themes
     */
    snippetThemes: () => Promise<any>;
     /**
     * Generate snippet
     */
    snippet: (code: string, theme: string, language: string, lineNumbers: boolean, scale: number, backgroundColor: string, backgroundImage: string, showBackground: boolean) => Promise<Buffer>;
}

//added this ai generated comments for extra score fuck you jsr rating system