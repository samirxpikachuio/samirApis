// samirapi/api/services/utility.ts
import { makeRequest } from '../../core';

export const utilityService = {
    countries: () => makeRequest("api/countries"),
    numbers: (country: string) => makeRequest(`api/numbers/${encodeURIComponent(country)}`),
    messages: (number: string) => makeRequest(`api/messages/${encodeURIComponent(number)}`),
    uploadToTelegraph: (url: string, senderId: string) => makeRequest('telegraph', { url, senderId }),
    shortenUrl: (url: string) => makeRequest('api/shorten', { url }),
    getTempMail: () => makeRequest("tempmail/get"),
    getInbox: (email: string) => makeRequest(`tempmail/inbox/${encodeURIComponent(email)}`),
    generateQRCode: (text: string) => makeRequest("qr", { text }),
    readQRCode: (url: string) => makeRequest("qr/read", { url }),
    getWeather: (city: string) => makeRequest(`weather/${encodeURIComponent(city)}`),
    news: () => makeRequest("news"),
    dictionary: (word: string) => makeRequest(`dictionary/${encodeURIComponent(word)}`),
    convert: (amount: number, from: string, to: string) => makeRequest('convert', { amount, from, to }, 'POST'),
    ipdetect: () => makeRequest('ipdetect'),
    iplookup: () => makeRequest('iplookup', {}, 'POST'),
    phonelink: (search: string) => makeRequest('phonelink', { search }),
    phoneinfo: (url: string) => makeRequest('phoneinfo', { url }),
     measure: (imageUrl: string) => makeRequest('measure', { imageUrl }, 'POST'),
}