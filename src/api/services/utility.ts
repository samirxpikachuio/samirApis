// samirapi/api/services/utility.ts
import { makeRequest } from '../../core';
/**
 * Contains all general utility functions
 */
export const utilityService = {
     /**
     * Get list of countries
     */
    countries: () => makeRequest("api/countries"),
    /**
     * Get list of phone numbers of a specific country
     */
    numbers: (country: string) => makeRequest(`api/numbers/${encodeURIComponent(country)}`),
      /**
     * Get message from a phone number
     */
    messages: (number: string) => makeRequest(`api/messages/${encodeURIComponent(number)}`),
     /**
     * Uploads file to telegraph
     */
    uploadToTelegraph: (url: string, senderId: string) => makeRequest('telegraph', { url, senderId }),
      /**
     * Shortens a url
     */
    shortenUrl: (url: string) => makeRequest('api/shorten', { url }),
      /**
     * Get temporary email
     */
    getTempMail: () => makeRequest("tempmail/get"),
     /**
     * Get inbox of a temporary email
     */
    getInbox: (email: string) => makeRequest(`tempmail/inbox/${encodeURIComponent(email)}`),
    /**
     * Generates a qr code
     */
    generateQRCode: (text: string) => makeRequest("qr", { text }),
     /**
     * Reads qr code from an image
     */
    readQRCode: (url: string) => makeRequest("qr/read", { url }),
    /**
     * Gets weather of a city
     */
    getWeather: (city: string) => makeRequest(`weather/${encodeURIComponent(city)}`),
      /**
     * Get news
     */
    news: () => makeRequest("news"),
     /**
     * Get meaning of a word
     */
    dictionary: (word: string) => makeRequest(`dictionary/${encodeURIComponent(word)}`),
    /**
     * Convert currency
     */
    convert: (amount: number, from: string, to: string) => makeRequest('convert', { amount, from, to }, 'POST'),
    /**
     * Get your ip
     */
    ipdetect: () => makeRequest('ipdetect'),
    /**
     * Get your ip location
     */
    iplookup: () => makeRequest('iplookup', {}, 'POST'),
    /**
     * Get details about a phonenumber
     */
    phonelink: (search: string) => makeRequest('phonelink', { search }),
     /**
     * Get details about phone
     */
    phoneinfo: (url: string) => makeRequest('phoneinfo', { url }),
      /**
      * Measures an object from an image
      */
     measure: (imageUrl: string) => makeRequest('measure', { imageUrl }, 'POST'),
}